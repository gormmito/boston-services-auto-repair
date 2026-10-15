document.documentElement.classList.add("js");

// ---------- Live hours, on Raleigh time (Mon–Fri 10:00–18:00) ----------
(function () {
  var OPEN = 10 * 60, CLOSE = 18 * 60;
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var now;
  try {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York", weekday: "short", month: "short", day: "numeric",
      hour: "numeric", minute: "numeric", hour12: false
    }).formatToParts(new Date());
    var get = function (t) { var p = parts.find(function (x) { return x.type === t; }); return p ? p.value : ""; };
    now = {
      day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday")),
      mins: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10),
      date: get("month") + " " + get("day")
    };
  } catch (e) { return; }

  var weekday = now.day >= 1 && now.day <= 5;
  var open = weekday && now.mins >= OPEN && now.mins < CLOSE;
  var next = function () {
    for (var i = 1; i <= 7; i++) {
      var d = (now.day + i) % 7;
      if (d >= 1 && d <= 5) return i === 1 ? "tomorrow" : DAYS[d];
    }
  };
  var long, short;
  if (open) {
    long = CLOSE - now.mins <= 60 ? "Open now, closing at 6 PM" : "Open now until 6 PM";
    short = "Open · till 6 PM";
  } else if (weekday && now.mins < OPEN) {
    long = "Closed now. Opens today at 10 AM";
    short = "Opens 10 AM";
  } else {
    long = "Closed now. Opens " + next() + " at 10 AM";
    short = "Closed · opens " + (next() === "tomorrow" ? "tomorrow" : next().slice(0, 3)) + " 10 AM";
  }

  var set = function (sel, txt) { document.querySelectorAll(sel).forEach(function (el) { el.textContent = txt; }); };
  set("[data-status-text]", long);
  set("[data-status-short]", short);
  if (now.date.trim()) set("[data-today]", now.date);
  document.querySelectorAll("[data-dot]").forEach(function (el) { el.classList.add(open ? "is-open" : "is-closed"); });
  var row = document.querySelector('.hours tr[data-day="' + now.day + '"]');
  if (row) row.classList.add("is-today");
})();

// ---------- Hide the bar's brand while the letterhead itself is on screen ----------
(function () {
  var lh = document.querySelector(".letterhead");
  if (!lh || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(function (entries) {
    document.documentElement.classList.toggle("lh-in-view", entries[0].isIntersecting);
  }, { rootMargin: "-62px 0px 0px 0px" }).observe(lh);
})();

// ---------- Typed-in entries on the letterhead ----------
(function () {
  var els = document.querySelectorAll(".lh-meta .typed");
  els.forEach(function (el, i) {
    el.setAttribute("data-typing", "");
    setTimeout(function () { el.classList.add("is-typed"); }, 250 + i * 380);
  });
})();

// ---------- Carbon copy: the form's checkboxes and the work lines stay in sync ----------
(function () {
  var form = document.getElementById("order");
  if (!form) return;
  var boxes = form.querySelectorAll("input[data-svc]");
  var rows = document.querySelectorAll(".lines tr[data-svc]");

  function paint(svc, on, flash) {
    rows.forEach(function (tr) {
      if (tr.getAttribute("data-svc") !== svc) return;
      tr.classList.toggle("is-on", on);
      var b = tr.querySelector(".line-tick");
      b.setAttribute("aria-pressed", on ? "true" : "false");
      if (flash) { tr.classList.remove("flash"); void tr.offsetWidth; tr.classList.add("flash"); }
    });
  }

  boxes.forEach(function (box) {
    box.addEventListener("change", function () { paint(box.getAttribute("data-svc"), box.checked, false); });
  });

  rows.forEach(function (tr) {
    var b = tr.querySelector(".line-tick");
    b.addEventListener("click", function () {
      var svc = tr.getAttribute("data-svc");
      var box = form.querySelector('input[data-svc="' + svc + '"]');
      var on = b.getAttribute("aria-pressed") !== "true";
      if (box) box.checked = on;
      paint(svc, on, true);
    });
  });

  // ---------- Send the order as a text message ----------
  var err = form.querySelector(".order-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var phone = f.phone.value.trim();
    var digits = phone.replace(/\D/g, "");
    f.name.removeAttribute("aria-invalid");
    f.phone.removeAttribute("aria-invalid");

    var problem = "";
    if (!name) { problem = "Add your name so the shop knows who's asking."; f.name.setAttribute("aria-invalid", "true"); }
    else if (digits.length < 10) { problem = "Add a phone number with area code so the shop can call you back."; f.phone.setAttribute("aria-invalid", "true"); }
    if (problem) {
      err.textContent = problem;
      err.hidden = false;
      (name ? f.phone : f.name).focus();
      return;
    }
    err.hidden = true;

    var picked = Array.prototype.map.call(form.querySelectorAll("input[name=svc]:checked"), function (i) { return i.value; });
    var lines = [
      "Hi Boston Services, quote request from your website.",
      "Name: " + name,
      "Phone: " + phone
    ];
    if (f.vehicle.value.trim()) lines.push("Vehicle: " + f.vehicle.value.trim());
    if (picked.length) lines.push("Need: " + picked.join(", "));
    if (f.details.value.trim()) lines.push("Details: " + f.details.value.trim());

    var sep = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent) ? "&" : "?";
    window.location.href = "sms:+19195244579" + sep + "body=" + encodeURIComponent(lines.join("\n"));
  });
})();

document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
