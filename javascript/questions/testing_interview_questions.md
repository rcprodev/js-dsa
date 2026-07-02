## Jest & React Testing Library Interview Questions

1. [What is Jest, and why is it used in React applications?](#q1)

2. [What is React Testing Library, and how is it different from Enzyme?](#q2)

3. [What is the main philosophy of React Testing Library?](#q3)

4. [What is the difference between unit testing, integration testing, and end-to-end testing?](#q4)

5. [What is the difference between Jest and React Testing Library?](#q5)

6. [What is the role of `describe`, `test`, and `it` in Jest?](#q6)

7. [What is the difference between `test()` and `it()` in Jest?](#q7)

8. [What are Jest matchers? Explain common matchers like `toBe`, `toEqual`, and `toContain`.](#q8)

9. [What is the difference between `toBe()` and `toEqual()`?](#q9)

10. [What is `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` in Jest?](#q10)

11. [How do you render a React component in React Testing Library?](#q11)

12. [What is the purpose of the `screen` object in React Testing Library?](#q12)

13. [What is the difference between `getBy`, `queryBy`, and `findBy` queries?](#q13)

14. [What is the difference between `getAllBy`, `queryAllBy`, and `findAllBy`?](#q14)

15. [Why is `getByRole` preferred over `getByTestId`?](#q15)

16. [When should you use `data-testid`?](#q16)

17. [How do you test whether an element is present in the DOM?](#q17)

18. [How do you test whether an element is not present in the DOM?](#q18)

19. [What is `@testing-library/jest-dom`, and why is it used?](#q19)

20. [What is the difference between `fireEvent` and `userEvent`?](#q20)

21. [Why is `userEvent` usually preferred over `fireEvent`?](#q21)

22. [How do you test button clicks in React Testing Library?](#q22)

23. [How do you test input change events?](#q23)

24. [How do you test form submission?](#q24)

25. [How do you test checkbox and radio button behavior?](#q25)

26. [How do you test select dropdowns?](#q26)

27. [How do you test conditional rendering in React?](#q27)

28. [How do you test a component that receives props?](#q28)

29. [How do you test a component that uses state?](#q29)

30. [How do you test a component that uses `useEffect`?](#q30)

31. [How do you test asynchronous UI updates?](#q31)

32. [What is `waitFor`, and when should you use it?](#q32)

33. [What is `findBy`, and how is it different from `waitFor`?](#q33)

34. [How do you test API calls in React components?](#q34)

35. [How do you mock `fetch` in Jest?](#q35)

36. [How do you mock Axios in Jest?](#q36)

37. [What is `jest.fn()`?](#q37)

38. [What is `jest.mock()`?](#q38)

39. [What is `jest.spyOn()`?](#q39)

40. [What is the difference between mock, spy, and stub?](#q40)

41. [How do you test error states in React components?](#q41)

42. [How do you test loading states?](#q42)

43. [How do you test components that use React Router?](#q43)

44. [How do you test components that use Context API?](#q44)

45. [How do you test custom hooks?](#q45)

46. [What is snapshot testing in Jest?](#q46)

47. [What are the advantages and disadvantages of snapshot testing?](#q47)

48. [How do you check test coverage in Jest?](#q48)

49. [What are fake timers in Jest, and when would you use them?](#q49)

50. [What are best practices for writing maintainable React tests?](#q50)

---

Here are **strong interview answers** for all 50 Jest + React Testing Library questions, using the same clickable anchor format.

---

<h3 id="q1">1. What is Jest, and why is it used in React applications?</h3>

Jest is a JavaScript testing framework used to run tests, make assertions, mock functions/modules, test async logic, generate coverage reports, and run tests in watch mode. In React projects, Jest is commonly used as the test runner and assertion library, while React Testing Library is used to render and interact with components. Jest’s `expect` API provides matchers for validating test results. ([Jest][1])

Example:

```ts
test("adds two numbers", () => {
  expect(2 + 2).toBe(4);
});
```

A good interview answer:

> Jest handles the testing environment, assertions, mocks, timers, and coverage. React Testing Library handles rendering and user-focused interaction with React components.

---

<h3 id="q2">2. What is React Testing Library, and how is it different from Enzyme?</h3>

React Testing Library is a lightweight testing utility for React components. It encourages testing components through real DOM behavior instead of testing component internals. Its main idea is: the more tests resemble how users use the app, the more confidence they give. ([Testing Library][2])

The main difference from Enzyme is that Enzyme often focused on component instances, props, state, and implementation details. React Testing Library focuses on visible output, accessibility roles, text, labels, and user interactions.

Good answer:

> Enzyme tests how the component is built. React Testing Library tests how the component behaves from the user’s perspective.

---

<h3 id="q3">3. What is the main philosophy of React Testing Library?</h3>

The philosophy is to test behavior, not implementation details. React Testing Library encourages querying DOM nodes in the same way users would find them: by role, label, text, placeholder, display value, and accessible name. ([Testing Library][2])

Bad test:

```tsx
expect(wrapper.state("isOpen")).toBe(true);
```

Better test:

```tsx
expect(screen.getByRole("dialog")).toBeInTheDocument();
```

Interview answer:

> I should not test private state or internal functions. I should test what the user can see and do.

---

<h3 id="q4">4. What is the difference between unit testing, integration testing, and end-to-end testing?</h3>

Unit testing tests a small isolated piece of code, like a function or simple component.

Integration testing checks whether multiple pieces work together, such as a form component calling validation and submitting data.

End-to-end testing checks the full user flow in a real or browser-like environment, such as login, checkout, or registration.

Example:

```txt
Unit: test formatPrice()
Integration: test LoginForm with validation
E2E: test full login flow in browser
```

Strong answer:

> In React, most useful tests are often integration-style component tests because they check how the component behaves with user interaction.

---

<h3 id="q5">5. What is the difference between Jest and React Testing Library?</h3>

Jest is the test runner, assertion library, mocking system, and coverage tool. React Testing Library is used to render React components and query/interact with the DOM. React Testing Library’s `render` gives access to DOM queries, and Jest’s `expect` validates the result. ([Testing Library][3])

Example:

```tsx
render(<Button />);
expect(screen.getByRole("button")).toBeInTheDocument();
```

Here:

```txt
render/screen = React Testing Library
expect = Jest
```

---

<h3 id="q6">6. What is the role of `describe`, `test`, and `it` in Jest?</h3>

`describe` groups related tests.

`test` defines an individual test case.

`it` is an alias for `test` and is often used for more readable test descriptions.

Example:

```ts
describe("sum", () => {
  test("adds two numbers", () => {
    expect(2 + 3).toBe(5);
  });

  it("returns 0 for empty input", () => {
    expect(0).toBe(0);
  });
});
```

Good answer:

> `describe` is for grouping. `test` or `it` is for actual test cases.

---

<h3 id="q7">7. What is the difference between `test()` and `it()` in Jest?</h3>

There is no functional difference. `it()` is an alias of `test()`. The choice is mostly style.

```ts
test("returns true", () => {
  expect(true).toBe(true);
});

it("returns true", () => {
  expect(true).toBe(true);
});
```

Many teams use `it` when writing behavior-style tests:

```ts
it("shows an error when email is invalid", () => {});
```

Interview answer:

> They are the same technically. I choose one style and keep it consistent across the project.

---

<h3 id="q8">8. What are Jest matchers? Explain common matchers like `toBe`, `toEqual`, and `toContain`.</h3>

Matchers are functions used with `expect()` to check whether a value meets a condition. Jest provides many matchers for equality, truthiness, arrays, objects, promises, errors, and mocks. ([Jest][1])

Examples:

```ts
expect(10).toBe(10);
expect({ name: "John" }).toEqual({ name: "John" });
expect(["html", "css", "js"]).toContain("css");
```

Common matchers:

```ts
toBe(); // primitive equality
toEqual(); // object/array deep equality
toContain(); // array/string contains value
toBeTruthy(); // truthy value
toBeFalsy(); // falsy value
toHaveLength(); // length check
```

---

<h3 id="q9">9. What is the difference between `toBe()` and `toEqual()`?</h3>

`toBe()` checks exact identity using `Object.is`. It is best for primitives like strings, numbers, booleans, `null`, and `undefined`.

```ts
expect(5).toBe(5);
expect("hello").toBe("hello");
```

`toEqual()` checks deep equality for objects and arrays.

```ts
expect({ name: "John" }).toEqual({ name: "John" });
expect([1, 2, 3]).toEqual([1, 2, 3]);
```

This may fail:

```ts
expect({ name: "John" }).toBe({ name: "John" });
```

Strong answer:

> Use `toBe` for primitives and reference identity. Use `toEqual` for object and array structure.

---

<h3 id="q10">10. What is `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` in Jest?</h3>

These are setup and teardown hooks.

```ts
beforeEach(() => {
  // runs before every test
});

afterEach(() => {
  // runs after every test
});

beforeAll(() => {
  // runs once before all tests
});

afterAll(() => {
  // runs once after all tests
});
```

Use cases:

```txt
beforeEach: reset mocks, render component
afterEach: cleanup, clear timers
beforeAll: connect test database/server
afterAll: close database/server
```

Example:

```ts
beforeEach(() => {
  jest.clearAllMocks();
});
```

Good answer:

> I use `beforeEach` for test isolation and `beforeAll` only for expensive setup that can be shared safely.

---

<h3 id="q11">11. How do you render a React component in React Testing Library?</h3>

Use the `render` function from `@testing-library/react`.

```tsx
import { render, screen } from "@testing-library/react";

test("renders heading", () => {
  render(<h1>Hello</h1>);

  expect(screen.getByRole("heading", { name: "Hello" })).toBeInTheDocument();
});
```

`render` mounts the component into a test DOM and provides access to Testing Library queries. ([Testing Library][3])

Strong answer:

> I render the component, query it like a user would, then assert the visible behavior.

---

<h3 id="q12">12. What is the purpose of the `screen` object in React Testing Library?</h3>

`screen` gives access to queries bound to `document.body`, so you do not need to destructure query methods from `render`. Testing Library recommends using queries that resemble how users find elements. ([Testing Library][4])

Preferred:

```tsx
render(<Login />);
expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
```

Instead of:

```tsx
const { getByRole } = render(<Login />);
expect(getByRole("button")).toBeInTheDocument();
```

Good answer:

> `screen` makes tests cleaner and closer to how users see the whole page.

---

<h3 id="q13">13. What is the difference between `getBy`, `queryBy`, and `findBy` queries?</h3>

`getBy` is used when the element should exist immediately. It throws an error if no element is found.

`queryBy` is used when the element may not exist. It returns `null` instead of throwing.

`findBy` is async. It waits for the element to appear and returns a Promise. Testing Library documents `findBy` as a combination of `getBy` queries and `waitFor`. ([Testing Library][5])

Example:

```tsx
screen.getByRole("button");
screen.queryByText("Error");
await screen.findByText("Loaded");
```

Rule:

```txt
getBy  = must be present now
queryBy = may be absent
findBy = will appear async
```

---

<h3 id="q14">14. What is the difference between `getAllBy`, `queryAllBy`, and `findAllBy`?</h3>

These are used when expecting multiple matching elements.

```tsx
screen.getAllByRole("listitem");
screen.queryAllByRole("listitem");
await screen.findAllByRole("listitem");
```

Difference:

```txt
getAllBy   = returns array, throws if none
queryAllBy = returns array, returns [] if none
findAllBy  = async, waits and returns array
```

React Testing Library’s cheat sheet documents these query families and whether they throw, return `null`/array, or wait asynchronously. ([Testing Library][6])

Good answer:

> Use `AllBy` queries when multiple elements are expected, like rows, list items, cards, or buttons.

---

<h3 id="q15">15. Why is `getByRole` preferred over `getByTestId`?</h3>

`getByRole` is preferred because it reflects how users and assistive technologies interact with the page. It checks accessible roles like `button`, `textbox`, `heading`, `link`, `checkbox`, and `dialog`. Testing Library’s query priority guide recommends semantic queries to test the page in the most accessible way. ([Testing Library][4])

Preferred:

```tsx
screen.getByRole("button", { name: /submit/i });
```

Less preferred:

```tsx
screen.getByTestId("submit-button");
```

Strong answer:

> `getByRole` improves test confidence and accessibility. `getByTestId` should be a fallback, not the first choice.

---

<h3 id="q16">16. When should you use `data-testid`?</h3>

Use `data-testid` only when there is no better user-facing or accessibility-based query.

Good cases:

```txt
Icon-only visual element with no accessible label
Complex SVG/chart
Non-semantic third-party component
Element with no stable text
```

Example:

```tsx
<div data-testid="price-chart" />
```

Test:

```tsx
expect(screen.getByTestId("price-chart")).toBeInTheDocument();
```

Better first choices:

```tsx
getByRole();
getByLabelText();
getByText();
getByPlaceholderText();
getByAltText();
```

Testing Library provides `ByTestId`, but its docs also emphasize semantic queries and accessible querying first. ([Testing Library][4])

---

<h3 id="q17">17. How do you test whether an element is present in the DOM?</h3>

Use `getBy...` or `findBy...` with `toBeInTheDocument()`.

```tsx
render(<Login />);

expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
```

For async element:

```tsx
expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
```

`toBeInTheDocument()` comes from `@testing-library/jest-dom`, which adds DOM-specific matchers.

Good answer:

> If I expect the element to exist immediately, I use `getBy`. If it appears after async work, I use `findBy`.

---

<h3 id="q18">18. How do you test whether an element is not present in the DOM?</h3>

Use `queryBy...` with `.not.toBeInTheDocument()`.

```tsx
render(<Login />);

expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
```

Do not use `getBy` for absence because `getBy` throws if the element is missing.

Bad:

```tsx
expect(screen.getByText(/error/i)).not.toBeInTheDocument();
```

Good:

```tsx
expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
```

Interview answer:

> For absence, always use `queryBy` or `queryAllBy`, not `getBy`.

---

<h3 id="q19">19. What is `@testing-library/jest-dom`, and why is it used?</h3>

`@testing-library/jest-dom` adds custom DOM matchers to Jest, making assertions more readable.

Examples:

```tsx
expect(button).toBeInTheDocument();
expect(button).toBeDisabled();
expect(input).toHaveValue("John");
expect(error).toHaveTextContent("Required");
```

Without it, tests become less expressive.

```tsx
expect(button.disabled).toBe(true);
```

Better:

```tsx
expect(button).toBeDisabled();
```

Strong answer:

> It gives DOM-specific matchers that make React component tests easier to read and closer to user-facing behavior.

---

<h3 id="q20">20. What is the difference between `fireEvent` and `userEvent`?</h3>

`fireEvent` triggers a single DOM event directly.

```tsx
fireEvent.click(button);
```

`userEvent` simulates higher-level user interactions more realistically, such as typing, clicking, tabbing, selecting, and keyboard actions. Testing Library describes `user-event` as a companion library that provides more advanced simulation of browser interactions than `fireEvent`. ([Testing Library][7])

Preferred:

```tsx
const user = userEvent.setup();

await user.click(button);
await user.type(input, "hello");
```

Strong answer:

> `fireEvent` fires events. `userEvent` simulates user behavior.

---

<h3 id="q21">21. Why is `userEvent` usually preferred over `fireEvent`?</h3>

`userEvent` is preferred because real user actions usually trigger multiple browser events, not just one. For example, typing into an input involves focus, keyboard events, input events, and change events. `userEvent` gives a more realistic interaction model than manually firing one event. ([Testing Library][7])

Example:

```tsx
const user = userEvent.setup();

await user.type(screen.getByRole("textbox"), "John");
```

Better than:

```tsx
fireEvent.change(input, { target: { value: "John" } });
```

Good answer:

> I use `userEvent` for user interactions and keep `fireEvent` for lower-level edge cases.

---

<h3 id="q22">22. How do you test button clicks in React Testing Library?</h3>

Use `userEvent.click()` and assert the result.

```tsx
import userEvent from "@testing-library/user-event";

test("increments counter", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  await user.click(screen.getByRole("button", { name: /increment/i }));

  expect(screen.getByText("1")).toBeInTheDocument();
});
```

If the click calls a prop:

```tsx
test("calls onClick", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Save</Button>);

  await user.click(screen.getByRole("button", { name: /save/i }));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

Strong answer:

> I don’t test that React’s click works. I test what the click changes in the UI or whether the expected callback was called.

---

<h3 id="q23">23. How do you test input change events?</h3>

Use `userEvent.type()` for realistic typing.

```tsx
test("updates input value", async () => {
  const user = userEvent.setup();

  render(<input aria-label="Name" />);

  const input = screen.getByLabelText(/name/i);

  await user.type(input, "John");

  expect(input).toHaveValue("John");
});
```

For a controlled component:

```tsx
test("updates form field", async () => {
  const user = userEvent.setup();

  render(<LoginForm />);

  await user.type(screen.getByLabelText(/email/i), "test@mail.com");

  expect(screen.getByLabelText(/email/i)).toHaveValue("test@mail.com");
});
```

Good answer:

> Prefer `userEvent.type` over `fireEvent.change` because it better represents how users type.

---

<h3 id="q24">24. How do you test form submission?</h3>

Fill the form using `userEvent`, click the submit button, then assert the expected result.

```tsx
test("submits login form", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(<LoginForm onSubmit={handleSubmit} />);

  await user.type(screen.getByLabelText(/email/i), "test@mail.com");
  await user.type(screen.getByLabelText(/password/i), "secret123");
  await user.click(screen.getByRole("button", { name: /login/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: "test@mail.com",
    password: "secret123",
  });
});
```

Strong answer:

> I test the form the way a user uses it: type into fields, submit, then verify UI behavior or submitted data.

---

<h3 id="q25">25. How do you test checkbox and radio button behavior?</h3>

Use `userEvent.click()` and assert checked state.

Checkbox:

```tsx
test("checks checkbox", async () => {
  const user = userEvent.setup();

  render(<input type="checkbox" aria-label="Accept terms" />);

  const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
});
```

Radio:

```tsx
test("selects radio option", async () => {
  const user = userEvent.setup();

  render(<PaymentOptions />);

  await user.click(screen.getByRole("radio", { name: /card/i }));

  expect(screen.getByRole("radio", { name: /card/i })).toBeChecked();
});
```

Good answer:

> I query checkboxes and radio buttons by role and accessible name, then assert `toBeChecked()`.

---

<h3 id="q26">26. How do you test select dropdowns?</h3>

Use `userEvent.selectOptions()`.

```tsx
test("selects country", async () => {
  const user = userEvent.setup();

  render(
    <select aria-label="Country">
      <option value="in">India</option>
      <option value="us">USA</option>
    </select>,
  );

  await user.selectOptions(screen.getByLabelText(/country/i), "us");

  expect(screen.getByRole("option", { name: "USA" })).toBeSelected();
});
```

Strong answer:

> I avoid testing implementation state directly. I verify the selected option visible in the DOM.

---

<h3 id="q27">27. How do you test conditional rendering in React?</h3>

Render the component in different states and assert what should appear or disappear.

Example:

```tsx
test("shows error message when error exists", () => {
  render(<Alert error="Something went wrong" />);

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
```

Testing absence:

```tsx
test("does not show error when there is no error", () => {
  render(<Alert error={null} />);

  expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
});
```

Good answer:

> For conditional rendering, I test both branches: when the condition is true and when it is false.

---

<h3 id="q28">28. How do you test a component that receives props?</h3>

Pass props during render and assert how they affect the UI.

```tsx
test("renders user name", () => {
  render(<UserCard name="John" age={25} />);

  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText(/25/)).toBeInTheDocument();
});
```

For callback props:

```tsx
test("calls onDelete when delete button is clicked", async () => {
  const user = userEvent.setup();
  const onDelete = jest.fn();

  render(<UserCard name="John" onDelete={onDelete} />);

  await user.click(screen.getByRole("button", { name: /delete/i }));

  expect(onDelete).toHaveBeenCalledTimes(1);
});
```

Strong answer:

> Props are inputs. I test whether different prop values produce the correct output or behavior.

---

<h3 id="q29">29. How do you test a component that uses state?</h3>

Do not test internal state directly. Trigger user actions and assert the resulting UI.

Bad:

```tsx
expect(component.state("count")).toBe(1);
```

Good:

```tsx
test("increments count", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  await user.click(screen.getByRole("button", { name: /increment/i }));

  expect(screen.getByText("1")).toBeInTheDocument();
});
```

Strong answer:

> State is an implementation detail. I test the behavior caused by state changes.

---

<h3 id="q30">30. How do you test a component that uses `useEffect`?</h3>

Test the visible result of the effect. If `useEffect` fetches data, mock the API and wait for the UI update.

```tsx
test("loads users on mount", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: "John" }],
  }) as jest.Mock;

  render(<Users />);

  expect(await screen.findByText("John")).toBeInTheDocument();
});
```

React notes that libraries like React Testing Library wrap helpers with `act`, which helps ensure updates are processed before assertions. ([React][8])

Strong answer:

> I don’t test that `useEffect` was called. I test the behavior caused by the effect.

---

<h3 id="q31">31. How do you test asynchronous UI updates?</h3>

Use `findBy...` or `waitFor`.

Example with `findBy`:

```tsx
test("shows loaded data", async () => {
  render(<UserProfile />);

  expect(await screen.findByText(/john/i)).toBeInTheDocument();
});
```

Example with `waitFor`:

```tsx
await waitFor(() => {
  expect(mockApi).toHaveBeenCalledTimes(1);
});
```

Testing Library provides async utilities for waiting for elements to appear, disappear, or update after promises, timeouts, events, or user actions. ([Testing Library][5])

Good answer:

> For async rendering, I avoid manual delays. I use `findBy` or `waitFor`.

---

<h3 id="q32">32. What is `waitFor`, and when should you use it?</h3>

`waitFor` repeatedly runs an assertion until it passes or times out. It is useful when waiting for async side effects that are not directly represented by one element query. Testing Library documents `waitFor` as part of its async utilities. ([Testing Library][5])

Example:

```tsx
await waitFor(() => {
  expect(mockFetch).toHaveBeenCalledTimes(1);
});
```

Use `waitFor` for:

```txt
API mock calls
Async callback assertions
Element updates that need custom assertions
Side effects
```

Avoid:

```tsx
await new Promise((resolve) => setTimeout(resolve, 1000));
```

Strong answer:

> `waitFor` is for waiting until an expectation becomes true, not for adding random sleep time.

---

<h3 id="q33">33. What is `findBy`, and how is it different from `waitFor`?</h3>

`findBy` is an async query that waits for an element to appear. It is essentially `getBy` plus `waitFor`. Testing Library explicitly describes `findBy` queries as a combination of `getBy` queries and `waitFor`. ([Testing Library][5])

Example:

```tsx
const user = await screen.findByText("John");
expect(user).toBeInTheDocument();
```

`waitFor` is more general:

```tsx
await waitFor(() => {
  expect(mockApi).toHaveBeenCalledTimes(1);
});
```

Rule:

```txt
Use findBy when waiting for an element.
Use waitFor when waiting for any custom condition.
```

---

<h3 id="q34">34. How do you test API calls in React components?</h3>

Mock the API, render the component, then assert loading, success, or error states.

```tsx
test("renders users after API call", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: "John" }],
  }) as jest.Mock;

  render(<Users />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(await screen.findByText("John")).toBeInTheDocument();
});
```

Strong answer:

> I do not call the real API in unit/component tests. I mock the network boundary and test how the component responds.

---

<h3 id="q35">35. How do you mock `fetch` in Jest?</h3>

You can mock `global.fetch` with `jest.fn()`.

```tsx
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test("fetches user", async () => {
  (global.fetch as jest.Mock).mockResolvedValue({
    ok: true,
    json: async () => ({ id: 1, name: "John" }),
  });

  render(<User />);

  expect(await screen.findByText("John")).toBeInTheDocument();
});
```

For failure:

```tsx
(global.fetch as jest.Mock).mockResolvedValue({
  ok: false,
});
```

Good answer:

> I mock `fetch`, control the response, and assert the UI state for success and failure.

---

<h3 id="q36">36. How do you mock Axios in Jest?</h3>

Mock the Axios module.

```tsx
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

test("loads user", async () => {
  mockedAxios.get.mockResolvedValue({
    data: { id: 1, name: "John" },
  });

  render(<User />);

  expect(await screen.findByText("John")).toBeInTheDocument();
});
```

For error:

```tsx
mockedAxios.get.mockRejectedValue(new Error("Network error"));
```

Strong answer:

> Axios should be mocked at the module level so the component test does not depend on real network calls.

---

<h3 id="q37">37. What is `jest.fn()`?</h3>

`jest.fn()` creates a mock function. It can track calls, arguments, return values, and custom implementations. Jest docs describe mock functions as a way to erase the real implementation, capture calls and parameters, and configure return values during tests. ([Jest][9])

Example:

```ts
const onClick = jest.fn();

onClick("hello");

expect(onClick).toHaveBeenCalledTimes(1);
expect(onClick).toHaveBeenCalledWith("hello");
```

Mock return value:

```ts
const getName = jest.fn().mockReturnValue("John");

expect(getName()).toBe("John");
```

Strong answer:

> `jest.fn()` is useful for testing callbacks and replacing real functions with controlled test doubles.

---

<h3 id="q38">38. What is `jest.mock()`?</h3>

`jest.mock()` mocks an entire module.

Example:

```ts
jest.mock("axios");
```

Then you can control its behavior:

```ts
mockedAxios.get.mockResolvedValue({
  data: [{ id: 1, name: "John" }],
});
```

Manual module mock example:

```ts
jest.mock("../api", () => ({
  getUser: jest.fn(),
}));
```

Strong answer:

> `jest.mock()` replaces a real module dependency with a mock so the test can control external behavior.

---

<h3 id="q39">39. What is `jest.spyOn()`?</h3>

`jest.spyOn()` watches an existing object method. You can assert that it was called, and you can optionally mock its implementation.

Example:

```ts
const spy = jest.spyOn(console, "log").mockImplementation(() => {});

console.log("Hello");

expect(spy).toHaveBeenCalledWith("Hello");

spy.mockRestore();
```

Another example:

```ts
const dateSpy = jest.spyOn(Date, "now").mockReturnValue(123456789);
```

Strong answer:

> I use `jest.spyOn()` when I want to observe or temporarily override an existing method without manually replacing the whole module.

---

<h3 id="q40">40. What is the difference between mock, spy, and stub?</h3>

A mock is a fake function or module that records how it was used.

A spy watches an existing function and records calls.

A stub provides a predefined response.

Example mock:

```ts
const onSave = jest.fn();
```

Example spy:

```ts
jest.spyOn(console, "error");
```

Example stub:

```ts
mockApi.getUser.mockResolvedValue({ id: 1, name: "John" });
```

Good interview answer:

> A stub controls behavior. A spy observes behavior. A mock can often do both: replace behavior and record interactions.

---

<h3 id="q41">41. How do you test error states in React components?</h3>

Mock the API or function to fail, then assert the error UI.

```tsx
test("shows error message when API fails", async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

  render(<Users />);

  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});
```

If API returns non-OK response:

```tsx
(global.fetch as jest.Mock).mockResolvedValue({
  ok: false,
});
```

Strong answer:

> Error states are first-class UI states. I test them by forcing the dependency to fail and checking what the user sees.

---

<h3 id="q42">42. How do you test loading states?</h3>

Render the component while async work is pending and assert the loading indicator.

```tsx
test("shows loading state", () => {
  global.fetch = jest.fn(() => new Promise(() => {})) as jest.Mock;

  render(<Users />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
```

For loading then success:

```tsx
test("shows loading then data", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: "John" }],
  }) as jest.Mock;

  render(<Users />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(await screen.findByText("John")).toBeInTheDocument();
});
```

Good answer:

> I test both the temporary loading UI and the final UI after the async operation completes.

---

<h3 id="q43">43. How do you test components that use React Router?</h3>

Wrap the component in a router provider, usually `MemoryRouter`.

```tsx
import { MemoryRouter } from "react-router-dom";

test("renders user page", () => {
  render(
    <MemoryRouter initialEntries={["/users/1"]}>
      <UserPage />
    </MemoryRouter>,
  );

  expect(screen.getByText(/user/i)).toBeInTheDocument();
});
```

For navigation:

```tsx
test("navigates to about page", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );

  await user.click(screen.getByRole("link", { name: /about/i }));

  expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
});
```

Strong answer:

> I provide the same routing context the component expects, but use an in-memory router to keep the test isolated.

---

<h3 id="q44">44. How do you test components that use Context API?</h3>

Wrap the component with the required provider.

```tsx
test("renders logged-in user", () => {
  render(
    <AuthContext.Provider value={{ user: { name: "John" } }}>
      <Profile />
    </AuthContext.Provider>,
  );

  expect(screen.getByText("John")).toBeInTheDocument();
});
```

For repeated tests, create a custom render helper:

```tsx
function renderWithAuth(ui: React.ReactElement) {
  return render(
    <AuthContext.Provider value={{ user: { name: "John" } }}>
      {ui}
    </AuthContext.Provider>,
  );
}
```

React’s `useContext` lets a component read and subscribe to context from a provider above it in the tree, so tests must provide that context when needed. ([React][10])

Strong answer:

> If a component depends on context, my test should render it with the same provider structure it needs in the app.

---

<h3 id="q45">45. How do you test custom hooks?</h3>

For hooks used by a component, the best approach is often to test the component behavior.

For isolated hook testing, use `renderHook` if available in your setup.

```tsx
import { renderHook, act } from "@testing-library/react";

test("increments counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

React docs describe custom hooks as a way to reuse logic built from React’s built-in hooks. ([React][11])

Strong answer:

> I test custom hooks directly when the hook contains reusable logic. If the hook is tightly coupled to UI, I test it through the component.

---

<h3 id="q46">46. What is snapshot testing in Jest?</h3>

Snapshot testing captures the rendered output of a component or serialized value and compares it against a saved snapshot in future test runs.

Example:

```tsx
import { render } from "@testing-library/react";

test("matches snapshot", () => {
  const { container } = render(<Button>Save</Button>);

  expect(container).toMatchSnapshot();
});
```

If the output changes, the test fails until the snapshot is updated.

Good answer:

> Snapshot tests are useful for detecting unexpected structural changes, but they should not replace behavior-based tests.

---

<h3 id="q47">47. What are the advantages and disadvantages of snapshot testing?</h3>

Advantages:

```txt
Quick to write
Good for stable presentational components
Can catch unexpected markup changes
Useful for serialized data structures
```

Disadvantages:

```txt
Easy to overuse
Large snapshots are hard to review
Can encourage blind updates
Does not prove behavior works
Can become noisy during refactoring
```

Strong answer:

> I use snapshots carefully for small, stable output. For user behavior, I prefer explicit assertions with React Testing Library.

---

<h3 id="q48">48. How do you check test coverage in Jest?</h3>

Run Jest with coverage enabled.

```bash
npm test -- --coverage
```

Or configure it:

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

Coverage commonly reports:

```txt
Statements
Branches
Functions
Lines
```

Strong answer:

> Coverage tells me what code was executed, but high coverage does not always mean high-quality tests. I care about meaningful assertions, not just numbers.

---

<h3 id="q49">49. What are fake timers in Jest, and when would you use them?</h3>

Fake timers let Jest control timer functions like `setTimeout`, `setInterval`, `clearTimeout`, and `clearInterval` without waiting for real time. Jest docs explain that native timers are not ideal in tests because they depend on real time passing, so Jest can replace them with controllable timer functions. ([Jest][12])

Example:

```ts
jest.useFakeTimers();

test("calls function after timeout", () => {
  const callback = jest.fn();

  setTimeout(callback, 1000);

  jest.advanceTimersByTime(1000);

  expect(callback).toHaveBeenCalled();
});
```

Use fake timers for:

```txt
Debounce
Throttle
setTimeout
setInterval
Auto-dismiss alerts
Delayed loaders
Polling
```

Good answer:

> Fake timers make time-based tests fast, deterministic, and reliable.

---

<h3 id="q50">50. What are best practices for writing maintainable React tests?</h3>

Best practices:

1. Test behavior, not implementation details.
2. Prefer `getByRole`, `getByLabelText`, and other accessible queries.
3. Use `userEvent` for user interactions.
4. Avoid testing internal state directly.
5. Mock network requests and external dependencies.
6. Test loading, success, and error states.
7. Keep tests readable and focused.
8. Avoid huge snapshots.
9. Use custom render helpers for providers.
10. Write tests that fail for real user-facing bugs.

React Testing Library’s guiding principle is that tests should resemble how software is used, and its utilities encourage querying actual DOM nodes like users would. ([Testing Library][2])

Strong final interview answer:

> A good React test should give confidence that the user flow works. I avoid implementation details, query by accessibility, simulate real user actions, and assert visible outcomes.

[1]: https://jestjs.io/docs/expect?utm_source=chatgpt.com "Expect - Jest"
[2]: https://testing-library.com/docs/react-testing-library/intro/?utm_source=chatgpt.com "React Testing Library"
[3]: https://testing-library.com/docs/react-testing-library/api/?utm_source=chatgpt.com "API - Testing Library"
[4]: https://testing-library.com/docs/queries/about/?utm_source=chatgpt.com "About Queries - Testing Library"
[5]: https://testing-library.com/docs/dom-testing-library/api-async/?utm_source=chatgpt.com "Async Methods - Testing Library"
[6]: https://testing-library.com/docs/react-testing-library/cheatsheet/?utm_source=chatgpt.com "Cheatsheet - Testing Library"
[7]: https://testing-library.com/docs/user-event/v13/?utm_source=chatgpt.com "user-event v13 - Testing Library"
[8]: https://react.dev/reference/react/act?utm_source=chatgpt.com "act – React"
[9]: https://jestjs.io/docs/mock-functions?utm_source=chatgpt.com "Mock Functions - Jest"
[10]: https://react.dev/reference/react/useContext?utm_source=chatgpt.com "useContext – React"
[11]: https://react.dev/learn/reusing-logic-with-custom-hooks?utm_source=chatgpt.com "Reusing Logic with Custom Hooks – React"
[12]: https://jestjs.io/docs/timer-mocks?utm_source=chatgpt.com "Timer Mocks - Jest"
