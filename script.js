// Live open/closed status, based on Raleigh (America/New_York) time.
// Hours: Mon–Fri 10:00–18:00, closed Sat & Sun.
(function () {
  var OPEN = 10, CLOSE = 18;
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function raleighNow() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hour12: false
    }).formatToParts(new Date());
    var get = function (t) { return (parts.find(function (p) { return p.type === t; }) || {}).value; };
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day: day, hour: parseInt(get("hour"), 10) % 24, minute: parseInt(get("minute"), 10) };
  }

  function nextOpening(day) {
    for (var i = 1; i <= 7; i++) {
      var d = (day + i) % 7;
      if (d >= 1 && d <= 5) return i === 1 ? "tomorrow" : DAYS[d];
    }
  }

  var now;
  try { now = raleighNow(); } catch (e) { return; }
  var weekday = now.day >= 1 && now.day <= 5;
  var mins = now.hour * 60 + now.minute;
  var isOpen = weekday && mins >= OPEN * 60 && mins < CLOSE * 60;

  var text;
  if (isOpen) {
    text = (CLOSE * 60 - mins <= 60) ? "Open now — closing soon (6pm)" : "Open now until 6pm";
  } else if (weekday && mins < OPEN * 60) {
    text = "Closed now — opens today at 10am";
  } else {
    text = "Closed now — opens " + nextOpening(now.day) + " at 10am";
  }

  document.querySelectorAll("[data-open-dot]").forEach(function (el) {
    el.classList.add(isOpen ? "is-open" : "is-closed");
  });
  var label = document.querySelector("[data-open-label]");
  if (label) label.textContent = text + " · 1702 Capital Blvd";
  var status = document.querySelector("[data-status-text]");
  if (status) status.textContent = text;
  var row = document.querySelector('.hours tr[data-day="' + now.day + '"]');
  if (row) row.classList.add("is-today");
})();

// Quote form → pre-filled text message to the shop.
(function () {
  var form = document.getElementById("quote-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var msg = "Hi Boston Services! Quote request from the website.\n" +
      "Name: " + f.name.value + "\n" +
      "Phone: " + f.phone.value + "\n" +
      (f.vehicle.value ? "Vehicle: " + f.vehicle.value + "\n" : "") +
      "Service: " + f.service.value +
      (f.details.value ? "\nDetails: " + f.details.value : "");
    var sep = /iPhone|iPad|iPod/.test(navigator.userAgent) ? "&" : "?";
    window.location.href = "sms:+19195244579" + sep + "body=" + encodeURIComponent(msg);
  });
})();

document.getElementById("year").textContent = new Date().getFullYear();
