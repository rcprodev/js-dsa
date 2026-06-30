Here are the **top 30 most frequently asked CSS interview questions** for frontend interviews. Current CSS interview lists repeatedly focus on **box model, specificity, cascade, positioning, Flexbox, Grid, responsive design, animations, debugging, and modern CSS features** like `clamp()`, container queries, and cascade layers. ([Simplilearn.com][1])

## Top 30 CSS Interview Questions

1. [What is CSS, and why is it used?](#q1)

2. [What are the different ways to add CSS to an HTML page?](#q2)

3. [What is the difference between inline CSS, internal CSS, and external CSS?](#q3)

4. [What is the CSS box model?](#q4)

5. [What is the difference between `content-box` and `border-box`?](#q5)

6. [What is margin collapsing in CSS?](#q6)

7. [What is the difference between `display: block`, `inline`, and `inline-block`?](#q7)

8. [What is the difference between `display: none` and `visibility: hidden`?](#q8)

9. [What is the difference between `opacity: 0`, `visibility: hidden`, and `display: none`?](#q8)

10. [What is CSS specificity?](#q10)

11. [How does the CSS cascade decide which style is applied?](#q11)

12. [What is the order of priority between inline styles, IDs, classes, elements, and `!important`?](#q12)

13. [What is inheritance in CSS?](#q13)

14. [What is the difference between `relative`, `absolute`, `fixed`, `sticky`, and `static` positioning?](#q14)

15. [What is `z-index`, and why does it sometimes not work?](#q15)

16. [What is the difference between Flexbox and CSS Grid?](#q16)

17. [When would you use Flexbox instead of Grid?](#q17)

18. [Explain the main Flexbox properties: `display: flex`, `justify-content`, `align-items`, `flex-direction`, `gap`, and `flex-wrap`.](#q18)

19. [Explain the main Grid properties: `grid-template-columns`, `grid-template-rows`, `gap`, `fr`, `auto-fit`, and `minmax()`.](#q19)

20. [How do media queries work?](#q20)

21. [What is responsive design?](#q21)

22. [What is the difference between `px`, `%`, `em`, `rem`, `vh`, and `vw`?](#q22)

23. [What is the difference between `min-width`, `max-width`, and `width`?](#q23)

24. [What are pseudo-classes and pseudo-elements? Example: `:hover`, `:focus`, `::before`, `::after`.](#q24)

25. [What is the difference between CSS transitions and animations?](#q25)

26. [What are CSS custom properties/variables?](#q26)

27. [How do you center a div horizontally and vertically?](#q27)

28. [How do you make a website mobile-friendly using CSS?](#q28)

29. [How do you debug CSS layout issues in browser DevTools?](#q29)

30. [What are modern CSS features like `clamp()`, container queries, `:has()`, and cascade layers?](#q30)

If I were interviewing you, I’d focus heavily on **Q4–Q5, Q10–Q12, Q14–Q19, Q20–Q23, and Q27–Q30**. These show whether you can actually build and debug real layouts, not just memorize CSS definitions. MDN describes specificity as the weight used by the browser’s cascade algorithm to decide which CSS declaration applies, so questions around specificity and cascade are especially common. ([MDN Web Docs][2])

[1]: https://www.simplilearn.com/tutorials/css-tutorial/css-interview-questions?utm_source=chatgpt.com "Top 100+ CSS Interview Questions for 2026 - Simplilearn"
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity?utm_source=chatgpt.com "Specificity - CSS | MDN - MDN Web Docs"

---

Here are concise, interviewer-ready answers for the 30 CSS interview questions from the repository list:

### Core Concepts & The Box Model (Q1–Q6)

- <h3 id="q1">1. What is CSS, and why is it used?</h3>
  CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of a web page written in HTML. It separates content from design, allowing you to control colors, fonts, layouts, and responsiveness across multiple pages efficiently.
- <h3 id="q2">2. What are the different ways to add CSS to an HTML page?</h3>
  There are three ways:
- **Inline:** Using the `style` attribute directly inside HTML elements.
- **Internal/Embedded:** Using the `<style>` tag inside the HTML `<head>`.
- **External:** Linking an external `.css` file using the `<link>` tag.

- <h3 id="q3">3. What is the difference between inline CSS, internal CSS, and external CSS?</h3>
- **Inline** applies styles only to a single element and has high specificity, making it hard to maintain.
- **Internal** applies styles to a single HTML document.
- **External** keeps styles in a separate file, allowing the same styles to be reused across an entire website, which is the best practice for performance and maintenance.

- <h3 id="q4">4. What is the CSS box model?</h3>
  The CSS box model is a box that wraps around every HTML element. It consists of four layers (from inside to outside): **Content** (the text/images), **Padding** (transparent space around content), **Border** (a line around padding), and **Margin** (transparent space outside the border separating elements).
- <h3 id="q5">5. What is the difference between `content-box` and `border-box`?</h3>
- `content-box` (default): The specified `width` and `height` apply only to the content. Padding and borders are added _on top_ of this width, making the element larger than expected.
- `border-box`: The specified `width` and `height` include the content, padding, and border. This makes layout sizing much more predictable.

- <h3 id="q6">6. What is margin collapsing in CSS?</h3>
  Margin collapsing occurs when the top and bottom margins of adjacent block-level elements combine into a single margin. Instead of adding together, the resulting margin size is equal to the larger of the two individual margins.

---

### Display, Visibility, & Cascade Specificity (Q7–Q13)

- <h3 id="q7">7. What is the difference between `display: block`, `inline`, and `inline-block`?</h3>
- `block`: Starts on a new line, takes up full width available, and obeys width/height/margin/padding.
- `inline`: Stays on the same line, takes up only content width, and **ignores** top/bottom width, height, and margins.
- `inline-block`: Stays on the same line like `inline`, but respects width, height, margin, and padding like a `block` element.

- <h3 id="q8">8. What is the difference between `display: none` and `visibility: hidden`?</h3>
- `display: none`: Completely removes the element from the document layout. It takes up no space, and its children are hidden too.
- `visibility: hidden`: Hides the element visually, but it still takes up its original space in the layout.

- <h3 id="q9">9. What is the difference between `opacity: 0`, `visibility: hidden`, and `display: none`?</h3>
- `display: none`: Takes up no space, cannot be clicked, invisible to screen readers.
- `visibility: hidden`: Takes up space, cannot be clicked, invisible to screen readers.
- `opacity: 0`: Takes up space, **can still be clicked/interacted with**, and remains fully accessible to screen readers.

- <h3 id="q10">10. What is CSS specificity?</h3>
  Specificity is the weight or algorithm browsers use to determine which CSS rule wins and gets applied when multiple rules target the same element.
- <h3 id="q11">11. How does the CSS cascade decide which style is applied?</h3>
  The cascade sorts conflicting styles based on three main factors (in order of priority):

1. **Importance** (e.g., `!important`)
2. **Specificity** (weight of selectors)
3. **Source Order** (the rule declared last in the file wins if specificity is tied)

- <h3 id="q12">12. What is the order of priority between inline styles, IDs, classes, elements, and `!important`?</h3>
  From highest priority to lowest:

1. `!important` (overrides everything)
2. Inline styles (written directly in HTML)
3. IDs (`#id`)
4. Classes, pseudo-classes, and attributes (`.class`, `:hover`)
5. Elements and pseudo-elements (`div`, `::before`)

- <h3 id="q13">13. What is inheritance in CSS?</h3>
  Inheritance is the mechanism by which certain CSS properties are passed down from a parent element to its children. For example, text properties like `color` and `font-family` inherit by default, while layout properties like `margin` and `border` do not.

---

### Positioning & Layout (Q14–Q19)

- <h3 id="q14">14. What is the difference between `relative`, `absolute`, `fixed`, `sticky`, and `static` positioning?</h3>
- `static` (default): Follows the normal page flow.
- `relative`: Positioned relative to its normal position without altering the page flow.
- `absolute`: Positioned relative to its nearest _positioned_ ancestor (non-static) and removed from page flow.
- `fixed`: Positioned relative to the browser viewport; stays in place during scrolling.
- `sticky`: Toggles between `relative` and `fixed` depending on the user's scroll position.

- <h3 id="q15">15. What is `z-index`, and why does it sometimes not work?</h3>
  `z-index` controls the vertical stacking order of overlapping elements. It often fails to work if the element has `position: static` (it requires `relative`, `absolute`, `fixed`, or `sticky`) or if it belongs to a separate parent stacking context with a lower `z-index`.
- <h3 id="q16">16. What is the difference between Flexbox and CSS Grid?</h3>
- **Flexbox** is primarily **one-dimensional** (designed for layouts along a single row _or_ column).
- **CSS Grid** is **two-dimensional** (designed to handle both rows _and_ columns simultaneously).

- <h3 id="q17">17. When would you use Flexbox instead of Grid?</h3>
  Use Flexbox when aligning content items linearly (like a navigation bar, standard list, or center-aligning elements). Use Grid when building complex, full-page structures or card layouts requiring precise control of both rows and columns.
- <h3 id="q18">18. Explain the main Flexbox properties: `display: flex`, `justify-content`, `align-items`, `flex-direction`, `gap`, and `flex-wrap`.</h3>
- `display: flex`: Activates flex context for children.
- `justify-content`: Aligns items along the main axis (horizontally by default).
- `align-items`: Aligns items along the cross axis (vertically by default).
- `flex-direction`: Sets the main axis orientation (`row` or `column`).
- `gap`: Sets spacing between items.
- `flex-wrap`: Controls whether items wrap onto multiple lines if space runs out.

- <h3 id="q19">19. Explain the main Grid properties: `grid-template-columns`, `grid-template-rows`, `gap`, `fr`, `auto-fit`, and `minmax()`.</h3>
- `grid-template-columns/rows`: Defines the sizes and counts of columns and rows.
- `fr`: A fractional unit representing a share of the available free space.
- `auto-fit`: Tells the track configuration to expand columns to fill all available space.
- `minmax(min, max)`: Defines a size range so a grid track stays responsive between a minimum boundary and a maximum size.

---

### Responsiveness, Units, & Modern Selectors (Q20–Q26)

- <h3 id="q20">20. How do media queries work?</h3>
  Media queries use `@media` rules to apply specific blocks of CSS styles only if certain device characteristics match—most commonly screen widths (e.g., `@media (max-width: 768px)`).
- <h3 id="q21">21. What is responsive design?</h3>
  Responsive web design is an approach where a website's layout dynamically adjusts, scales, and re-flows gracefully to fit any screen size, whether viewed on a mobile phone, tablet, or desktop monitor.
- <h3 id="q22">22. What is the difference between `px`, `%`, `em`, `rem`, `vh`, and `vw`?</h3>
- `px`: An absolute, fixed pixel unit.
- `%`: Relative to the parent element's size.
- `em`: Relative to the font size of the _current element_ (or parent for layout).
- `rem`: Relative to the root (`<html>`) font size (highly recommended for accessibility).
- `vh`/`vw`: Relative to $1\%$ of the viewport's height or width, respectively.

- <h3 id="q23">23. What is the difference between `min-width`, `max-width`, and `width`?</h3>
- `width`: Sets a rigid size.
- `max-width`: Prevents an element from growing _larger_ than a set limit (great for making items fluid).
- `min-width`: Guarantees an element won't shrink _smaller_ than a set limit.

- <h3 id="q24">24. What are pseudo-classes and pseudo-elements? Give examples.</h3>
- **Pseudo-classes (`:`)** target elements in a specific state (e.g., `:hover` on mouse-over, `:focus` on keyboard click).
- **Pseudo-elements (`::`)** style specific virtual parts of an element (e.g., `::before` or `::after` to inject decorative content).

- <h3 id="q25">25. What is the difference between CSS transitions and animations?</h3>
- **Transitions** smoothly animate a property change implicitly triggered by a state change (e.g., toggling a hover state).
- **Animations** are explicitly controlled, complex timelines defined by `@keyframes` that run automatically without needing a state trigger.

- <h3 id="q26">26. What are CSS custom properties/variables?</h3>
  They are developer-defined values declared using double dashes (`--primary-color: #000;`) that can be dynamically called throughout a stylesheet using the `var()` function, enabling global style updates.

---

### Centering, Debugging, & Advanced CSS (Q27–Q30)

- <h3 id="q27">27. How do you center a div horizontally and vertically?</h3>
  The most straightforward modern approach is using Flexbox on the parent element:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- <h3 id="q28">28. How do you make a website mobile-friendly using CSS?</h3>
  By utilizing a fluid layout grid, implementing a mobile-first approach, applying responsive relative typography units like `rem`, setting up appropriate viewport meta tags, and adjusting break points cleanly using CSS media queries.
- <h3 id="q29">29. How do you debug CSS layout issues in browser DevTools?</h3>
  By right-clicking and using "Inspect Element" to examine calculated box-model boundaries, toggling styles on/off, monitoring active/overridden rules via the styles panel, and activating dedicated overlays for Grid and Flexbox layouts.
- <h3 id="q30">30. What are modern CSS features like `clamp()`, container queries, `:has()`, and cascade layers?</h3>
- `clamp(min, val, max)`: Restricts a dynamic value smoothly between absolute minimum and maximum constraints.
- **Container Queries**: Applies styles conditionally based on the size of a specific parent container element rather than the entire browser viewport.
- `:has()`: A parent selector selector that allows you to style an element based on what children it contains.
- **Cascade Layers (`@layer`)**: Gives developers explicit control over layering priority to manage specificity architecture cleanly without selector fights.
