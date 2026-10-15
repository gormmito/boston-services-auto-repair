---
name: Boston Services Auto Repair
description: The shop's own carbon-copy repair order, printed in preprint red and carbon blue on canary form stock.
colors:
  preprint-red: "#b8141f"
  preprint-red-press: "#960f18"
  carbon-blue: "#1d3a9a"
  carbon-blue-press: "#17307f"
  ballpoint-ink: "#182f78"
  canary-copy: "#f4e49e"
  canary-deep: "#ead57c"
  pink-copy: "#f7d7da"
  original-sheet: "#fffefa"
  paperclip-steel: "#7d8794"
  red-rule: "rgba(184, 20, 31, .32)"
  red-wash: "rgba(184, 20, 31, .14)"
  blue-wash: "rgba(29, 58, 154, .14)"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "0"
    fontVariation: "\"wdth\" 62"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.3rem, 5.6vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "0"
    fontVariation: "\"wdth\" 62"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.02em"
    fontVariation: "\"wdth\" 75"
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.12em"
  entry:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "1.12rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  none: "0px"
  sm: "3px"
  md: "4px"
  stamp: "6px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  sheet: "clamp(18px, 3vw, 40px)"
  section: "clamp(28px, 5vw, 64px)"
  column: "22px"
  tap: "44px"
components:
  button-ink:
    backgroundColor: "{colors.carbon-blue}"
    textColor: "{colors.original-sheet}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.carbon-blue-press}"
  stamp-call:
    backgroundColor: "transparent"
    textColor: "{colors.preprint-red}"
    rounded: "{rounded.stamp}"
    padding: "0 16px"
    height: "48px"
  stamp-call-hover:
    backgroundColor: "{colors.preprint-red}"
    textColor: "{colors.original-sheet}"
  bar-call:
    backgroundColor: "{colors.preprint-red}"
    textColor: "{colors.original-sheet}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  bar-call-hover:
    backgroundColor: "{colors.preprint-red-press}"
  field-entry:
    backgroundColor: "transparent"
    textColor: "{colors.carbon-blue}"
    typography: "{typography.entry}"
    rounded: "{rounded.none}"
    padding: "4px 2px 5px"
  field-entry-focus:
    backgroundColor: "{colors.blue-wash}"
  checkbox-box:
    backgroundColor: "{colors.original-sheet}"
    rounded: "{rounded.none}"
    size: "24px"
  line-items-header:
    backgroundColor: "{colors.preprint-red}"
    textColor: "{colors.original-sheet}"
    typography: "{typography.label}"
    padding: "9px 14px"
  clipped-photo:
    backgroundColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "10px 10px 12px"
  pickup-stub:
    backgroundColor: "{colors.canary-copy}"
    textColor: "{colors.ballpoint-ink}"
    padding: "12px 16px 12px 22px"
  footer:
    backgroundColor: "{colors.preprint-red}"
    textColor: "{colors.original-sheet}"
---

# Design System: Boston Services Auto Repair

## Overview

**Creative North Star: "The Carbon-Copy Repair Order"**

The whole site is the shop's own multi-part repair order. A white original sheet sits on canary "customer copy" ground, a pink copy follows behind a perforation, and everything on it is printed in exactly two inks: preprint red for what the form says, carbon blue for what was written on it. Preprinted labels are condensed grotesk capitals; anything a person "filled in" (order numbers, hours, captions, quotes, typed entries) is a typewriter face in blue. The material grammar is office paper: hairline red rules, empty checkboxes, dotted perforations, rubber stamps, and real photographs paper-clipped onto the sheet at a slight tilt.

Density is that of a working form, not a brochure. Sections are "copies" separated by perforations; services are line items in a ruled table; reviews are customer remarks typed onto ruled lines with a red margin. The red, white and blue come straight from the building (red canopy, white band, blue bay doors), so the form is the shop's own stationery rather than a generic theme.

The world rejects the stock auto-shop template: no full-bleed photo hero with overlaid headline, no grid of icon service cards, no gradients, no glossy chrome.

**Key Characteristics:**
- Two inks only, red and blue, on canary, pink and white paper stocks.
- Condensed heavy capitals for preprint; Courier Prime for every filled-in value.
- Hairline red rules, square checkboxes and perforations instead of cards and dividers.
- Photographs are clipped prints with a white border, a steel paperclip and a 1 to 1.5 degree tilt.
- Depth is paper on paper: soft warm drop shadows, never glass or glow.

## Colors

A two-ink print job: one saturated preprint red, one deep carbon blue, and three paper stocks that carry them.

### Primary
- **Preprint Red** (`preprint-red`): the form's printed voice. Headlines, labels, letterhead, rules, checkbox outlines, the line-items header bar, stamps, the sticky bar's call button and the footer slab. Pressed state is **Preprint Red, Pressed** (`preprint-red-press`).

### Secondary
- **Carbon Blue** (`carbon-blue`): the ink of anything written onto the form. Typewriter entries, check ticks, focus washes and the primary "ink" button. Pressed state is **Carbon Blue, Pressed** (`carbon-blue-press`).
- **Ballpoint Ink** (`ballpoint-ink`): the slightly deeper blue used for running body text, nav links and line-item titles.

### Neutral
- **Canary Copy** (`canary-copy`): the page ground, the customer copy under the original. Carries a faint fractal-noise paper grain. **Canary Deep** (`canary-deep`) is its shadowed edge (scrollbar track).
- **Pink Copy** (`pink-copy`): the third copy, used for one whole section (inspection) behind a half-pink perforation.
- **Original Sheet** (`original-sheet`): the white top sheet, tables, map mat, status chip and text on red/blue fills.
- **Red Rule** (`red-rule`) and **Red Wash** (`red-wash`): translucent red for hairlines, field underlines, dashed check rows and error fills.
- **Blue Wash** (`blue-wash`): translucent blue for focus and hover fills in fields, boxes and selected rows.
- **Paperclip Steel** (`paperclip-steel`): only the paperclips and the neutral status dot.

### Named Rules
**The Two Inks Rule.** Every mark is red or blue. Red is what the form printed; blue is what someone wrote. If a new element needs a third hue, it is a different document.

**The Carbon Rule.** Blue appears where a person acted: a typed entry, a tick, a focus, a selected line. Do not use blue for decoration.

## Typography

**Display Font:** Archivo variable, width axis 62 to 125 (with Arial Narrow fallback)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Courier Prime (with Courier New fallback) for filled-in entries

**Character:** A compressed, black-weight grotesk set like the preprint on a shop form, against a plain typewriter face that reads as somebody's handwork on that form.

### Hierarchy
- **Display** (900, width 62, clamp(2.6rem, 5vw, 4.4rem), 0.92, uppercase, red): the hero headline only. Shares this cut with the letterhead name and the footer "Thank you for your business".
- **Headline** (900, width 62, clamp(2.3rem, 5.6vw, 4rem), 0.92, uppercase, red, balanced wrap): one per copy section.
- **Title** (800, width 75, 1.12rem, uppercase): line-item names, address name, side-note heads (up to 1.5rem at weight 900).
- **Body** (400, 17px, 16px under 600px, 1.55): running text in ballpoint ink; lede and section intros at about 1.05 to 1.08rem, measured at 46 to 60ch.
- **Label** (800, 0.72rem, 0.12em tracking, uppercase, red): every preprinted field caption, legend, column head and stub head.
- **Entry** (Courier Prime 700, 1.12rem, 1.4, blue): input values and anything presented as filled-in. Customer remarks set it larger, clamp(1.15rem, 2vw, 1.4rem) at 1.6 on ruled lines.

### Named Rules
**The Preprint vs. Filled-In Rule.** Archivo capitals for what the shop printed; Courier Prime in blue for what was written in. Never set a label in Courier or a value in condensed caps.

**The Width Axis Rule.** Condensing is done with the Archivo width axis (62 for display, 75 for titles and stamps), never with faux scaling or letter-spacing squeeze. Display tracking stays at 0.

## Layout

The page is a stack of paper: one white original sheet (max 1240px, centered, padded by the `sheet` step, with an inset double red border) followed by canary and pink "copies", each separated by a dotted perforation strip 26px tall. Section content sits in a 1240px container with the fluid `gutter`. Sections open with the `section` step of top padding.

The hero sheet is a letterhead row (emblem, name block, a three-cell RO No. / Date / Time-in box) above an asymmetric grid: the order form on the left (about 1.25fr), the clipped storefront photo across the right two tracks, and a tilted rating stamp and hours stub tucked underneath. The services copy is a 1.6fr / 1fr split with a sticky side column; inspection is 0.8fr / 1.2fr; pick-up is 1fr / 1.15fr with the map.

Responsive steps: at 1080px the nav hides, the letterhead meta box spans full width in three cells, and two-column copies stack. At 820px the hero collapses to a single flowing column (headline, lede, form, photo, rating, stub). At 600px body drops to 16px, fields and checks go single-column, the order actions stretch full width, the line-items "Quote" column hides, and a fixed bottom dock (Call / Quote / Directions) appears. Every interactive target is at least 44px tall.

## Elevation & Depth

Depth is physical paper, not interface layering. Sheets, tables, the map mat, clipped photos and the stub lift off the canary ground with soft, warm, downward shadows tinted toward the paper's yellow (never neutral grey, never colored glow). Everything else is flat and separated by rules. Tilt (1 to 1.5 degrees) does as much depth work as shadow: loose papers lie slightly askew and straighten on hover.

### Shadow Vocabulary
- **Loose paper** (`box-shadow: 0 1px 1px rgba(40, 30, 0, .12), 0 10px 24px -8px rgba(40, 30, 0, .35)`): clipped photos, line-items table, hours table, map mat, hours stub.
- **Top sheet** (`box-shadow: 0 1px 0 rgba(0,0,0,.04), 0 24px 50px -24px rgba(60, 40, 0, .45)`): the original sheet only.
- **Dock lift** (`box-shadow: 0 -8px 20px -10px rgba(60, 40, 0, .5)`): the fixed mobile action dock.
- **Paperclip cast** (`filter: drop-shadow(1px 2px 1px rgba(0,0,0,.25))`): steel paperclips only.

### Named Rules
**The Paper-Only Rule.** Only things that are paper get shadows. Buttons, fields and stamps are printed or inked on the paper and stay flat to it.

## Shapes

Paper is square. Sheets, fields, checkboxes, tables, photos and the hours stub have no radius. The only rounding is on things that are not paper: the ink button (3px), the bar call button (4px) and the rubber stamp (6px, a slightly rounded stamp face). The status dot is the only circle besides the emblem.

Borders are the main form language: a 2px red rule under the letterhead and the sticky bar, a 2px red inset frame with a hairline echo inside the original sheet, 1 to 1.5px red hairlines between cells, dashed red rules under checklist rows that turn solid blue when ticked, and a dotted perforation for every tear line. The B emblem is an original roundel: two concentric rings, the shop name set on a circular path, and a slab B in the center.

## Components

### Buttons
Inked and stamped, never glossy.
- **Ink button (primary):** carbon-blue fill, sheet-white Archivo 800 at 1rem, 52px tall, 0 22px padding, 3px corners, an inline 20px SVG icon. Used for "Text this order" and "Get directions".
- **Hover / Focus:** fill deepens to carbon-blue-press and the button rises 1px; it presses down 1px on active. Focus is the global 2px dashed red outline at 3px offset.
- **Call stamp (secondary):** a rubber stamp. Red Archivo 900 at width 75, uppercase, 0.06em tracking, 2.5px red border with an inset hairline second ring, 6px corners, rotated -2 degrees. On hover it inks in (red fill, white text) and straightens to 0 degrees.
- **Bar call:** compact red fill, 4px corners, 44px tall; collapses to an icon-only 44px square under 600px.

### Inputs / Fields
- **Style:** no box. A red caption label above, then a transparent field with a 1.5px red-rule underline; values typed in blue Courier Prime 700. Textareas are ruled paper: repeating red hairlines every 31.5px, line-height locked to the rule.
- **Focus:** underline turns carbon blue and the field fills with blue wash; no outline.
- **Error:** underline turns solid red over a red wash; the error message is a red-bordered, red-washed box in bold red.

### Checkboxes
- **Style:** 24px square, 2px red border on sheet white, inside a 44px row with a dashed red-rule underline.
- **State:** the blue tick draws in left to right (clip-path, 0.35s). A checked row's underline goes solid blue. Hover fills the box with blue wash; keyboard focus puts the dashed red outline on the box.

### Line-Items Table
The services list as an order's line items: sheet-white table with loose-paper shadow, a solid red header bar with white label-style column heads, red hairline cells, a tick-box column, a titled description column and a typewriter "Quote" column. Ticking a line marks it with a blue underline, washes the row blue, and copies the tick to the hero form; a 1.1s blue "carbon" flash runs on the row.

### Clipped Photo
A real photograph printed with a white border (10px, 12px at the bottom), a steel paperclip overhanging the top-left, a 1 to 1.5 degree tilt, and a caption line in blue typewriter with any credit ("Imagery © Google") set small at the right.

### Rating Stamp and Hours Stub
- **Rating stamp:** a red-bordered stamp, rotated -1.5 degrees, with a large width-62 "4.5", five stars (the last clipped to half) and a red label line. Straightens and washes red on hover.
- **Hours stub:** a canary tear-off slip with a dotted perforation down its left edge, red label head, typed hours, and an underlined blue link. Rotated 1.2 degrees, straightens on hover.

### Navigation
- **Top bar:** sticky, canary at 94% with a light blur, closed by a 2px red rule plus a faint second rule beneath. Brand lockup (40px emblem plus width-62 name) fades in only after the letterhead scrolls away. Links are ballpoint Archivo 700 at 0.82rem, uppercase, 0.12em tracking, with a 2px blue underline on hover.
- **Mobile dock (under 600px):** fixed bottom bar on sheet white with a red top rule: a red "Call now" cell and two blue-text cells (Quote, Directions) split by red hairlines, 58px tall, safe-area aware.

### Footer
A solid preprint-red slab with "Thank you for your business" in display capitals, underlined by a translucent white rule, and the address, hours and credits in sheet white.

## Do's and Don'ts

### Do:
- **Do** print every new mark in either preprint red or carbon blue on canary, pink or sheet-white stock.
- **Do** set preprinted captions as red Archivo 800 caps at 0.72rem with 0.12em tracking, and any filled-in value in blue Courier Prime.
- **Do** separate sections with a perforation strip and content with red hairlines rather than cards.
- **Do** present photographs as clipped prints: white border, steel paperclip, a 1 to 1.5 degree tilt, a typed caption and any required credit.
- **Do** let loose papers and stamps straighten to 0 degrees on hover with the shared ease (cubic-bezier(.16, 1, .3, 1)).
- **Do** keep every tap target at 44px or taller and honor reduced motion by dropping transitions and the typing reveal.

### Don't:
- **Don't** add a third ink. Status, success and emphasis must be expressed in red or blue.
- **Don't** round paper. Sheets, fields, tables, checkboxes and photos stay square; only the ink button, bar call and stamp take a radius.
- **Don't** give buttons, fields or stamps a drop shadow; shadows belong to paper lying on paper.
- **Don't** use a full-bleed photo hero with overlaid text or a grid of icon service cards.
- **Don't** use gradients, glass, glow or neutral grey shadows.
- **Don't** reproduce the Boston Red Sox mark; use the original B roundel emblem.
