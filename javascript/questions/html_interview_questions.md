Here are the **top 30 most frequently asked HTML interview questions** I’d ask you as a serious frontend interviewer. Recent interview lists heavily focus on **semantic HTML, forms, accessibility, SEO/meta tags, media, and browser behavior**, not just “what is HTML?” questions. ([FrontendAtlas][1])

## Top 30 HTML Interview Questions

1. What is HTML, and what role does it play in web development?

2. What is the difference between HTML and HTML5?

3. What is the basic structure of an HTML document?

4. What is the purpose of `<!DOCTYPE html>`?

5. What is the difference between an HTML element and an HTML tag?

6. What are HTML attributes? Give examples.

7. What is semantic HTML?

8. Why is semantic HTML important for accessibility and SEO?

9. What is the difference between `<div>` and semantic tags like `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, and `<main>`?

10. What is the difference between `<section>` and `<article>`?

11. What is the correct use of heading tags from `<h1>` to `<h6>`?

12. Can a page have multiple `<h1>` tags? Is it good practice?

13. What is the difference between block-level and inline elements?

14. What is the difference between `<strong>` and `<b>`?

15. What is the difference between `<em>` and `<i>`?

16. What is the difference between `<a>`, `<button>`, and clickable `<div>`?

17. Why should we avoid using a `<div>` as a button?

18. What are HTML forms?

19. What is the difference between `GET` and `POST` in forms?

20. What is the purpose of the `name` attribute in form inputs?

21. What is the difference between `id`, `name`, and `class`?

22. What is the purpose of the `<label>` tag?

23. What are common HTML5 input types?

24. What are HTML form validation attributes like `required`, `pattern`, `min`, `max`, and `maxlength`?

25. What is the difference between `placeholder` and `label`?

26. What is the purpose of the `alt` attribute in images?

27. What is the difference between `<img>`, `<picture>`, and `srcset`?

28. What are meta tags? Explain `title`, `description`, `viewport`, and charset.

29. What is accessibility in HTML, and how can semantic HTML improve it?

30. What is ARIA, and when should you use it?

For a real interview, I’d focus most on **Q7–Q10, Q16–Q17, Q22–Q25, Q26–Q30**, because modern frontend interviews care a lot about semantic structure, forms, accessibility, and real-world HTML quality. MDN also emphasizes that using the correct HTML element for the correct purpose is one of the strongest foundations for accessible web content. ([developer.mozilla.org][2])

[1]: https://frontendatlas.com/html/interview-questions?utm_source=chatgpt.com "HTML Interview Questions: 65 Q&A, HTML5 and Forms | FrontendAtlas"
[2]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML?utm_source=chatgpt.com "HTML: A good basis for accessibility - MDN Web Docs"

---

Here are concise, interviewer-ready answers for all 30 HTML interview questions from the repository list:

### Core HTML Concepts (Q1–Q6)

- **1. What is HTML, and what role does it play in web development?**
  HTML (HyperText Markup Language) is the standard markup language used to create the structure of a web page. It acts as the skeleton of a website, organizing content like text, images, and links so browsers know how to display them.
- **2. What is the difference between HTML and HTML5?**
  HTML5 is the latest major version of HTML. Unlike older versions, it introduced native audio/video support (`<audio>`, `<video>`), semantic elements (`<article>`, `<section>`), canvas graphics, local storage capabilities, and improved form inputs without relying on external plugins like Flash.
- **3. What is the basic structure of an HTML document?**
  A standard HTML template requires a `<!DOCTYPE html>` declaration, followed by the `<html>` root element, which contains a `<head>` section (metadata, title, styles) and a `<body>` section (the actual visible content).
- **4. What is the purpose of `<!DOCTYPE html>`?**
  It is an instruction to the browser that the document being rendered is an HTML5 document. It prevents the browser from entering "quirks mode" and ensures the page renders consistently according to modern web standards.
- **5. What is the difference between an HTML element and an HTML tag?**
  An **HTML tag** is the opening or closing bracket system used to mark the start or end of an element (e.g., `<p>` and `</p>`). An **HTML element** is the entire bundle—the opening tag, the content inside, and the closing tag (e.g., `<p>Hello World</p>`).
- **6. What are HTML attributes? Give examples.**
  Attributes provide additional information or configuration for an HTML element. They are always specified in the opening tag as name/value pairs. Examples include `href` in `<a>`, `src` and `alt` in `<img>`, and `class` or `id`.

---

### Semantic HTML & Accessibility (Q7–Q12)

- **7. What is semantic HTML?**
  Semantic HTML refers to tags that inherently describe the meaning and purpose of the content they enclose, rather than just changing its visual layout (e.g., using `<form>`, `<article>`, or `<nav>` instead of a generic `<div>`).
- **8. Why is semantic HTML important for accessibility and SEO?**
  For **accessibility**, screen readers rely on semantic tags to understand page layout and help visually impaired users navigate. For **SEO**, search engine crawlers use these tags to identify key content hierarchies, boosting the page's search ranking accuracy.
- **9. What is the difference between `<div>` and semantic tags like `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, and `<main>`?**
  A `<div>` is a non-semantic block element used strictly for styling or grouping. In contrast, the semantic tags define landmarks: `<header>` and `<footer>` mark top/bottom boundaries, `<nav>` holds navigation links, `<main>` encapsulates unique core content, while `<section>` and `<article>` structurally categorize the body.
- **10. What is the difference between `<section>` and `<article>`?**
  An `<article>` represents a self-contained, independent piece of content that could be reused or syndicated elsewhere on its own (like a blog post or news story). A `<section>` is a thematic grouping of content, typically requiring a heading, representing a chapter or piece of a larger whole.
- **11. What is the correct use of heading tags from `<h1>` to `<h6>`?**
  Headings establish a strict visual and screen-reader hierarchy on the page. They should be nested sequentially without skipping levels (e.g., an `<h3>` should follow an `<h2>`, not jump directly from `<h1>`).
- **12. Can a page have multiple `<h1>` tags? Is it good practice?**
  Technically, HTML5 allows multiple `<h1>` tags (e.g., one per `<section>` or `<article>`). However, **it is not considered best practice**. Sticking to a single `<h1>` per page for the main title offers the cleanest, most predictable hierarchy for both SEO crawlers and screen readers.

---

### Text Formatting & Interaction (Q13–Q17)

- **13. What is the difference between block-level and inline elements?**
  **Block-level elements** (e.g., `<div>`, `<p>`) always start on a new line and stretch to fill the full width of their parent container. **Inline elements** (e.g., `<span>`, `<a>`) do not start on a new line and only take up as much width as their content requires.
- **14. What is the difference between `<strong>` and `<b>`?**
  `<strong>` is a semantic tag indicating that the text has strong importance or urgency; screen readers will emphasize it. `<b>` is a presentational tag that simply makes text bold visually without adding any semantic weight.
- **15. What is the difference between `<em>` and `<i>`?**
  `<em>` is semantic and denotes stress emphasis, which alters the meaning of a sentence or changes screen reader pronunciation. `<i>` is presentational, rendering text in italics strictly for stylistic variance (like idiomatic phrases or technical terms).
- **16. What is the difference between `<a>`, `<button>`, and clickable `<div>`?**
- `<a>` (Anchor) is meant specifically for navigation (moving to a new URL or page section).
- `<button>` is used for triggering actions or behaviors on the current page (like submitting forms or opening modals).
- A clickable `<div>` does neither natively; it requires custom Javascript to work and completely lacks built-in keyboard accessibility unless heavily modified.

- **17. Why should we avoid using a `<div>` as a button?**
  A `<div>` has no semantic meaning. If used as a button, it cannot be focused via the `Tab` key, won't respond to `Enter` or `Space` keyboard clicks natively, and is completely invisible to screen readers as an interactive control unless you manually add complex ARIA roles and event listeners.

---

### Forms & Validation (Q18–Q25)

- **18. What are HTML forms?**
  HTML forms (`<form>`) are sections of a document containing interactive controls (inputs, checkboxes, radio buttons) designed to collect user data and transmit it securely to a web server.
- **19. What is the difference between GET and POST in forms?**
- **GET** appends form data directly to the URL string as key-value pairs. It is visible, cached in history, and meant only for non-sensitive data retrieval.
- **POST** sends data securely inside the HTTP request body. It does not show up in the URL, has no size limits, and is used for creating or modifying data (like passwords or transactions).

- **20. What is the purpose of the `name` attribute in form inputs?**
  The `name` attribute acts as the key identifier for the data when the form is submitted. Without a `name` attribute, the browser will entirely ignore the input element and fail to send its value to the backend server.
- **21. What is the difference between `id`, `name`, and `class`?**
- `id` is a strictly unique identifier for a single element on a page (used for CSS/JS targeting).
- `name` identifies form data fields during submission and handles radio button grouping.
- `class` is a non-unique identifier used to apply shared styles or JS behavior across multiple elements simultaneously.

- **22. What is the purpose of the `<label>` tag?**
  A `<label>` provides a text description for a form control. Linking it via the `for` attribute (matching the input's `id`) vastly improves accessibility for screen readers and increases the clickable target area for users.
- **23. What are common HTML5 input types?**
  Common types include `text`, `password`, `email`, `number`, `url`, `date`, `tel`, and `color`. These trigger native browser validation and surface context-specific keyboards on mobile devices.
- **24. What are HTML form validation attributes like `required`, `pattern`, `min`, `max`, and `maxlength`?**
  These are built-in client-side validation attributes. `required` prevents blank submission; `pattern` enforces a Regular Expression match; `min`/`max` set numeric boundaries; `maxlength` restricts the maximum character count allowed.
- **25. What is the difference between `placeholder` and `label`?**
  A `label` is an accessible title that permanently explains what an input field is for. A `placeholder` is a temporary hint displayed inside the input that vanishes as soon as a user starts typing. A placeholder should never replace a label.

---

### Media, Metadata, & Advanced A11y (Q26–Q30)

- **26. What is the purpose of the `alt` attribute in images?**
  The `alt` (alternative text) attribute describes the image content. It serves as an essential fallback for screen readers to read aloud to visually impaired users, displays if the image fails to load, and is indexed by search engines for image SEO.
- **27. What is the difference between `<img>`, `<picture>`, and `srcset`?**
- `<img>` displays a single simple image.
- `srcset` is an attribute on `<img>` that offers the browser a list of different resolutions of the _same_ image, letting it choose the most efficient one based on device pixel density.
- `<picture>` is a wrapper element containing multiple `<source>` tags used for complex art direction, serving entirely different images or modern formats (like WebP/AVIF) depending on screen media queries.

- **28. What are meta tags? Explain `title`, `description`, `viewport`, and `charset`.**
  Meta tags provide machine-readable metadata about the HTML document located in the `<head>` block.
- `title`: Defines the page name shown on browser tabs and search engine headers.
- `description`: Summarizes the page content for search engine snippet listings.
- `viewport`: Controls page scaling and sizing on mobile screens.
- `charset`: Sets the character encoding standard (typically `UTF-8` to support global text/emojis).

- **29. What is accessibility in HTML, and how can semantic HTML improve it?**
  Accessibility (A11y) means designing web content so that everyone, including people with physical, visual, or cognitive disabilities, can navigate and interact with it seamlessly. Semantic HTML improves this by providing an implicit, structured map of the page layout, allowing assistive technologies like screen readers to parse headers, content blocks, and forms predictably.
- **30. What is ARIA, and when should you use it?**
  ARIA (Accessible Rich Internet Applications) is a set of special attributes (e.g., `aria-label`, `role="dialog"`) that supplements HTML when native semantic elements fall short of describing complex web states or custom components (like tabs or accordions). The primary rule of ARIA is: **No ARIA is better than Bad ARIA**—always prefer built-in, native HTML elements before reaching for ARIA.
