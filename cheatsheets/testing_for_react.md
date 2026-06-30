# React Testing Cheat Sheet

**Jest + React Testing Library**

React Testing Library’s core idea is simple: test the component the way a user uses it, not by checking internal state or implementation details. Its docs recommend user-focused queries such as role, label, text, and accessible name, with `getByRole` usually being the top choice. ([Testing Library][1])

---

## 1. Basic test structure

```tsx
import { render, screen } from "@testing-library/react";

test("renders heading", () => {
  render(<h1>Dashboard</h1>);

  expect(
    screen.getByRole("heading", { name: /dashboard/i }),
  ).toBeInTheDocument();
});
```

Use this mental model:

```txt
render component
find element like a user
interact like a user
assert visible result
```

---

## 2. Most important imports

```tsx
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
```

`@testing-library/jest-dom` adds readable DOM matchers like `toBeInTheDocument`, `toBeDisabled`, `toHaveTextContent`, and `toHaveValue`. ([GitHub][2])

---

## 3. Query priority

Use queries in this order most of the time:

```txt
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId
```

Best:

```tsx
screen.getByRole("button", { name: /submit/i });
screen.getByLabelText(/email/i);
screen.getByRole("textbox", { name: /search/i });
```

Avoid this unless needed:

```tsx
screen.getByTestId("submit-button");
```

`getByRole` works with elements exposed in the accessibility tree, and many HTML elements have implicit roles, such as `<button>` having the `button` role. ([Testing Library][3])

---

## 4. `getBy` vs `queryBy` vs `findBy`

| Query     | Use when                         | If not found       |
| --------- | -------------------------------- | ------------------ |
| `getBy`   | element should exist immediately | throws error       |
| `queryBy` | element should not exist         | returns `null`     |
| `findBy`  | element appears after async work | waits, then throws |

```tsx
screen.getByText(/profile/i); // present now
screen.queryByText(/error/i); // may be absent
await screen.findByText(/loaded/i); // appears later
```

For multiple elements:

```tsx
screen.getAllByRole("listitem");
screen.queryAllByRole("button");
await screen.findAllByRole("row");
```

---

## 5. Presence and absence

Element exists:

```tsx
expect(screen.getByText(/success/i)).toBeInTheDocument();
```

Element does not exist:

```tsx
expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
```

Do not use `getBy` for absence:

```tsx
// Bad
expect(screen.getByText(/error/i)).not.toBeInTheDocument();
```

For disappearance:

```tsx
await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
```

Testing Library documents `waitForElementToBeRemoved` as a wrapper around `waitFor` for waiting until elements are removed from the DOM. ([Testing Library][4])

---

## 6. User interactions

Use `userEvent` for realistic user behavior. The official docs describe `user-event` as a companion library that simulates browser interactions by dispatching the events that would happen during real user interaction. ([Testing Library][5])

```tsx
const user = userEvent.setup();

await user.click(screen.getByRole("button", { name: /save/i }));
await user.type(screen.getByLabelText(/email/i), "test@mail.com");
await user.clear(screen.getByLabelText(/email/i));
await user.tab();
await user.keyboard("{Enter}");
```

`userEvent.setup()` creates a user-event instance with shared input-device state, which is useful for realistic consecutive interactions. ([Testing Library][6])

---

## 7. Button click test

```tsx
test("calls save handler", async () => {
  const user = userEvent.setup();
  const onSave = jest.fn();

  render(<button onClick={onSave}>Save</button>);

  await user.click(screen.getByRole("button", { name: /save/i }));

  expect(onSave).toHaveBeenCalledTimes(1);
});
```

Better React test:

```tsx
test("shows saved message after clicking save", async () => {
  const user = userEvent.setup();

  render(<ProfileForm />);

  await user.click(screen.getByRole("button", { name: /save/i }));

  expect(screen.getByText(/saved successfully/i)).toBeInTheDocument();
});
```

Prefer testing visible behavior over only checking callback calls when possible.

---

## 8. Input test

```tsx
test("types into email input", async () => {
  const user = userEvent.setup();

  render(<input aria-label="Email" />);

  const emailInput = screen.getByLabelText(/email/i);

  await user.type(emailInput, "test@mail.com");

  expect(emailInput).toHaveValue("test@mail.com");
});
```

---

## 9. Form submit test

```tsx
test("submits form with email and password", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();

  render(<LoginForm onSubmit={onSubmit} />);

  await user.type(screen.getByLabelText(/email/i), "test@mail.com");
  await user.type(screen.getByLabelText(/password/i), "secret123");

  await user.click(screen.getByRole("button", { name: /login/i }));

  expect(onSubmit).toHaveBeenCalledWith({
    email: "test@mail.com",
    password: "secret123",
  });
});
```

---

## 10. Checkbox, radio, select

Checkbox:

```tsx
const checkbox = screen.getByRole("checkbox", { name: /accept/i });

await user.click(checkbox);

expect(checkbox).toBeChecked();
```

Radio:

```tsx
await user.click(screen.getByRole("radio", { name: /card/i }));

expect(screen.getByRole("radio", { name: /card/i })).toBeChecked();
```

Select:

```tsx
await user.selectOptions(screen.getByLabelText(/country/i), "in");

expect(screen.getByRole("option", { name: /india/i })).toBeSelected();
```

---

## 11. Async testing

Use `findBy` when waiting for UI:

```tsx
expect(await screen.findByText(/john/i)).toBeInTheDocument();
```

Use `waitFor` when waiting for a condition:

```tsx
await waitFor(() => {
  expect(mockApi).toHaveBeenCalledTimes(1);
});
```

Testing Library’s async docs describe `findBy` as a combination of `getBy` and `waitFor`, while `waitFor` is useful for retrying assertions until they pass or timeout. ([Testing Library][7])

---

## 12. Loading, success, error states

```tsx
test("shows loading then users", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: "John" }],
  }) as jest.Mock;

  render(<Users />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  expect(await screen.findByText("John")).toBeInTheDocument();

  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
});
```

Error state:

```tsx
test("shows error when API fails", async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

  render(<Users />);

  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});
```

---

## 13. Mock functions

```tsx
const onClick = jest.fn();

onClick("hello");

expect(onClick).toHaveBeenCalledTimes(1);
expect(onClick).toHaveBeenCalledWith("hello");
```

Jest mock functions can replace real implementations, capture calls and parameters, and configure return values. ([Testing Library][5])

Common mock patterns:

```tsx
jest.fn();
jest.fn().mockReturnValue("John");
jest.fn().mockResolvedValue({ data: [] });
jest.fn().mockRejectedValue(new Error("Failed"));
```

---

## 14. Mocking fetch

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

---

## 15. Mocking Axios

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

---

## 16. Better API mocking with MSW

For larger React apps, prefer mocking API behavior at the network layer instead of mocking `fetch` or Axios in every test. MSW is an API mocking library for browser and Node.js that intercepts outgoing requests and returns mocked responses. ([mswjs.io][8])

Basic idea:

```tsx
// test checks real component behavior
render(<Users />);

expect(await screen.findByText("John")).toBeInTheDocument();
```

The mock server handles the request behind the scenes.

Use MSW when:

```txt
many components call APIs
you want reusable API mocks
you want tests closer to real app behavior
you want less mocking inside test files
```

---

## 17. Testing props

```tsx
test("renders user name", () => {
  render(<UserCard name="John" age={25} />);

  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText(/25/)).toBeInTheDocument();
});
```

Callback prop:

```tsx
test("calls delete callback", async () => {
  const user = userEvent.setup();
  const onDelete = jest.fn();

  render(<UserCard name="John" onDelete={onDelete} />);

  await user.click(screen.getByRole("button", { name: /delete/i }));

  expect(onDelete).toHaveBeenCalledTimes(1);
});
```

---

## 18. Testing state

Do not test state directly. Test what the state change does to the UI.

```tsx
test("increments counter", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  await user.click(screen.getByRole("button", { name: /increment/i }));

  expect(screen.getByText("1")).toBeInTheDocument();
});
```

Bad mindset:

```txt
Check whether count state became 1
```

Good mindset:

```txt
Click button and check user sees 1
```

---

## 19. Testing `useEffect`

Do not test that `useEffect` was called. Test the result of the effect.

```tsx
test("loads profile on mount", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ name: "John" }),
  }) as jest.Mock;

  render(<Profile />);

  expect(await screen.findByText("John")).toBeInTheDocument();
});
```

React’s `act` helper exists to make sure pending React updates are applied before assertions, though React Testing Library helpers usually reduce the need to call `act` directly. ([React][9])

---

## 20. Testing Context API

```tsx
function renderWithAuth(ui: React.ReactElement) {
  return render(
    <AuthContext.Provider value={{ user: { name: "John" } }}>
      {ui}
    </AuthContext.Provider>,
  );
}

test("shows logged-in user", () => {
  renderWithAuth(<Profile />);

  expect(screen.getByText("John")).toBeInTheDocument();
});
```

Use a custom render helper when many components need the same providers.

---

## 21. Testing React Router

Use `MemoryRouter` for route-based tests. React Router documents `MemoryRouter` as a router that stores entries in memory and supports `initialEntries`. ([React Router][10])

```tsx
import { MemoryRouter } from "react-router-dom";

test("renders user route", () => {
  render(
    <MemoryRouter initialEntries={["/users/1"]}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { name: /user/i })).toBeInTheDocument();
});
```

Navigation test:

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

---

## 22. Testing custom hooks

Use `renderHook` for isolated hook logic:

```tsx
import { renderHook, act } from "@testing-library/react";

test("increments count", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

But for UI-related hooks, often better:

```txt
test the component using the hook
not the hook implementation itself
```

---

## 23. Fake timers

Use fake timers for debounce, throttle, timeout, interval, polling, and auto-dismiss alerts. Jest fake timers replace native timer functions like `setTimeout`, and timers can be restored with `jest.useRealTimers()`. ([Jest][11])

```tsx
jest.useFakeTimers();

test("hides toast after 3 seconds", () => {
  render(<Toast message="Saved" />);

  expect(screen.getByText(/saved/i)).toBeInTheDocument();

  jest.advanceTimersByTime(3000);

  expect(screen.queryByText(/saved/i)).not.toBeInTheDocument();

  jest.useRealTimers();
});
```

For debounce:

```tsx
jest.useFakeTimers();

await user.type(screen.getByRole("textbox"), "react");

jest.advanceTimersByTime(500);

expect(mockSearch).toHaveBeenCalledWith("react");
```

---

## 24. Snapshot testing

```tsx
test("matches snapshot", () => {
  const { container } = render(<Button>Save</Button>);

  expect(container).toMatchSnapshot();
});
```

Use snapshots carefully.

Good for:

```txt
small presentational components
stable markup
serialized data
```

Avoid:

```txt
huge snapshots
blind snapshot updates
using snapshots instead of behavior tests
```

---

## 25. Coverage

Run:

```bash
npm test -- --coverage
```

Or:

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

Coverage checks:

```txt
statements
branches
functions
lines
```

Strong rule:

```txt
High coverage does not guarantee good tests.
Good tests must have meaningful assertions.
```

---

## 26. Best matchers for React tests

```tsx
expect(element).toBeInTheDocument();
expect(element).not.toBeInTheDocument();
expect(button).toBeDisabled();
expect(button).toBeEnabled();
expect(input).toHaveValue("John");
expect(checkbox).toBeChecked();
expect(option).toBeSelected();
expect(element).toHaveTextContent(/success/i);
expect(element).toHaveClass("active");
expect(link).toHaveAttribute("href", "/about");
```

---

## 27. Common mistakes

### Mistake 1: Testing implementation details

Bad:

```tsx
expect(setState).toHaveBeenCalled();
```

Good:

```tsx
expect(screen.getByText(/saved/i)).toBeInTheDocument();
```

### Mistake 2: Using `getByTestId` everywhere

Bad:

```tsx
screen.getByTestId("submit");
```

Good:

```tsx
screen.getByRole("button", { name: /submit/i });
```

### Mistake 3: Not awaiting user events

Bad:

```tsx
user.click(button);
```

Good:

```tsx
await user.click(button);
```

### Mistake 4: Using fixed delays

Bad:

```tsx
await new Promise((r) => setTimeout(r, 1000));
```

Good:

```tsx
await screen.findByText(/loaded/i);
```

### Mistake 5: Testing loading only, not error

Good tests usually cover:

```txt
loading
success
error
empty state
user interaction
```

---

## 28. Useful test helper

```tsx
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <ThemeProvider>{ui}</ThemeProvider>
      </AuthProvider>
    </MemoryRouter>,
  );
}

export { renderWithProviders };
```

Usage:

```tsx
test("renders profile", () => {
  renderWithProviders(<Profile />);

  expect(screen.getByText(/profile/i)).toBeInTheDocument();
});
```

---

## 29. What to test in React components

Test these:

```txt
renders correct content
handles user interaction
calls important callbacks
shows validation errors
handles loading state
handles success state
handles error state
handles empty state
navigation works
disabled/enabled states work
accessibility roles and labels exist
```

Do not focus on these:

```txt
internal state names
private functions
exact component structure
CSS implementation details
third-party library internals
```

---

## 30. Interview-ready testing rule

Use this answer in interviews:

> I write React tests from the user’s perspective. I render the component, query elements by accessible role or label, interact using `userEvent`, and assert visible outcomes. I avoid testing internal state or implementation details. For async flows, I use `findBy` or `waitFor`. For APIs, I mock the network boundary and test loading, success, and error states.

Best short pattern:

```tsx
test("user can submit the form", async () => {
  const user = userEvent.setup();

  render(<LoginForm />);

  await user.type(screen.getByLabelText(/email/i), "test@mail.com");
  await user.type(screen.getByLabelText(/password/i), "secret123");
  await user.click(screen.getByRole("button", { name: /login/i }));

  expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
});
```

This is the pattern you should remember for real React development.

[1]: https://testing-library.com/docs/react-testing-library/intro/?utm_source=chatgpt.com "React Testing Library"
[2]: https://github.com/testing-library/jest-dom?utm_source=chatgpt.com "GitHub - testing-library/jest-dom: :owl: Custom jest matchers to test ..."
[3]: https://testing-library.com/docs/queries/byrole/?utm_source=chatgpt.com "ByRole - Testing Library"
[4]: https://testing-library.com/docs/dom-testing-library/api-async/?utm_source=chatgpt.com "Async Methods - Testing Library"
[5]: https://testing-library.com/docs/user-event/intro/?utm_source=chatgpt.com "Introduction - Testing Library"
[6]: https://testing-library.com/docs/user-event/setup/?utm_source=chatgpt.com "Setup - Testing Library"
[7]: https://testing-library.com/docs/queries/about/?utm_source=chatgpt.com "About Queries - Testing Library"
[8]: https://mswjs.io/docs/?utm_source=chatgpt.com "Introduction - Mock Service Worker - Node.js"
[9]: https://react.dev/reference/react/act?utm_source=chatgpt.com "act – React"
[10]: https://reactrouter.com/api/declarative-routers/MemoryRouter?utm_source=chatgpt.com "MemoryRouter | React Router"
[11]: https://jestjs.io/docs/timer-mocks?utm_source=chatgpt.com "Timer Mocks - Jest"
