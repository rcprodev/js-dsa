I searched recent TypeScript interview-prep sources and cross-checked the topics with official TypeScript docs. These are not “exact company frequency stats,” but the **most repeated interview themes**: generics, narrowing, utility types, strictness, async typing, React/Node typing, and real-world type design. ([DataCamp][1])

## Top 30 TypeScript Interview Questions

1. What is TypeScript, and how is it different from JavaScript?

2. What are the benefits of using TypeScript in a large-scale application?

3. Explain the difference between `type` and `interface`.

4. When would you use `interface` instead of `type`, and vice versa?

5. What is type inference in TypeScript?

6. What is the difference between `any`, `unknown`, and `never`?

7. Why is `unknown` safer than `any`?

8. What is the difference between `void` and `never`?

9. Explain union types and intersection types.

10. What is type narrowing? Give examples using `typeof`, `in`, and `instanceof`.

11. What are custom type guards?

12. What is a discriminated union, and why is it useful?

13. What are generics in TypeScript?

14. How do generic constraints work using `extends`?

15. What is the difference between this:

```ts
function identity<T>(value: T): T;
```

and using `any`?

16. Explain `keyof`, `typeof`, and indexed access types.

17. What are mapped types in TypeScript?

18. What are conditional types?

19. What does the `infer` keyword do in conditional types?

20. Explain common utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`, `ReturnType`, and `Parameters`.

21. What is the difference between optional properties and properties that can be `undefined`?

22. What does `strictNullChecks` do?

23. What is the purpose of `tsconfig.json`?

24. What are important compiler options you use in real projects?

25. How do you type an async function?

26. How do you type API responses safely in TypeScript?

27. How would you avoid overusing `any` in a legacy JavaScript migration?

28. How do you type React component props in TypeScript?

29. How do you type event handlers, refs, and children in React with TypeScript?

30. Design question: How would you model loading, success, and error states using TypeScript so invalid UI states are impossible?

If I were interviewing you, I’d start from **Q6, Q10, Q12, Q13, Q20, and Q30**. Those quickly show whether someone only knows syntax or can actually use TypeScript in production.

[1]: https://www.datacamp.com/blog/typescript-interview-questions?utm_source=chatgpt.com "Top 40 TypeScript Interview Questions and Answers for 2026"

I checked the GitHub markdown file and it contains the same **30 TypeScript interview questions** you listed earlier. Here are clean answers in the same order. The question list is from your linked GitHub file. ([GitHub][1])

## 1. What is TypeScript, and how is it different from JavaScript?

TypeScript is a **strongly typed superset of JavaScript**. It adds static typing, interfaces, generics, access modifiers, and compile-time checking.

JavaScript runs directly in the browser or Node.js. TypeScript does not run directly; it is compiled into JavaScript first. TypeScript helps catch many errors before runtime. ([TypeScript][2])

```ts
let name: string = "John";
name = 123; // Error
```

---

## 2. What are the benefits of using TypeScript in a large-scale application?

TypeScript is useful in large applications because it gives:

- Better code safety
- Early error detection
- Better autocomplete and IntelliSense
- Easier refactoring
- Clear contracts between functions, components, and APIs
- Better maintainability for teams

Example:

```ts
function getUser(id: number) {
  return id;
}

getUser("1"); // Error
```

In large projects, this prevents many bugs before deployment.

---

## 3. Explain the difference between `type` and `interface`.

Both `type` and `interface` can describe object shapes.

```ts
interface User {
  id: number;
  name: string;
}

type Product = {
  id: number;
  name: string;
};
```

Main difference:

`interface` can be extended or reopened.

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

`type` cannot be reopened with the same name.

```ts
type User = {
  id: number;
};

// Error
type User = {
  name: string;
};
```

Use `interface` for object/class contracts. Use `type` for unions, intersections, tuples, primitive aliases, and complex types.

---

## 4. When would you use `interface` instead of `type`, and vice versa?

Use `interface` when defining the shape of objects, classes, or public APIs.

```ts
interface User {
  id: number;
  name: string;
}
```

Use `type` when you need union types, tuples, primitive aliases, conditional types, or complex type composition.

```ts
type Status = "loading" | "success" | "error";

type Point = [number, number];

type ID = string | number;
```

Simple interview rule:

> Use `interface` for object structure. Use `type` for flexible type composition.

---

## 5. What is type inference in TypeScript?

Type inference means TypeScript automatically detects the type without you writing it manually. Official TypeScript docs describe inference as TypeScript providing type information where no explicit annotation exists. ([TypeScript][3])

```ts
let age = 25;
// TypeScript infers: number

age = "twenty five"; // Error
```

You do not always need to write types manually.

```ts
const message = "Hello";
// message is inferred as string
```

---

## 6. What is the difference between `any`, `unknown`, and `never`?

`any` disables type checking.

```ts
let value: any = "hello";
value.toUpperCase();
value.toFixed(); // No compile-time error
```

`unknown` is safer than `any`. You must check the type before using it.

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  value.toUpperCase();
}
```

`never` represents a value that never occurs. It is used for functions that never return or impossible cases.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 7. Why is `unknown` safer than `any`?

`unknown` forces you to do type checking before using the value.

```ts
let data: unknown = "hello";

data.toUpperCase(); // Error

if (typeof data === "string") {
  data.toUpperCase(); // Okay
}
```

With `any`, TypeScript allows anything, even unsafe operations.

```ts
let data: any = "hello";

data.toFixed(); // No TypeScript error, but runtime error
```

So `unknown` is safer because it keeps type checking enabled.

---

## 8. What is the difference between `void` and `never`?

`void` means a function does not return a useful value.

```ts
function logMessage(): void {
  console.log("Hello");
}
```

`never` means a function never successfully finishes.

```ts
function crash(): never {
  throw new Error("Something went wrong");
}
```

Another example:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

Simple difference:

> `void` returns nothing useful. `never` never returns at all.

---

## 9. Explain union types and intersection types.

A union type means a value can be one of multiple types. TypeScript docs define a union type as a type formed from two or more other types. ([TypeScript][4])

```ts
type ID = string | number;

let userId: ID = 101;
userId = "abc";
```

An intersection type combines multiple types into one.

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "John",
  employeeId: 1,
};
```

Union means **OR**. Intersection means **AND**.

---

## 10. What is type narrowing? Give examples using `typeof`, `in`, and `instanceof`.

Type narrowing means reducing a broad type into a more specific type using checks. TypeScript supports narrowing through checks like `typeof`, `in`, `instanceof`, equality checks, and discriminated unions. ([TypeScript][5])

Using `typeof`:

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Using `in`:

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

Using `instanceof`:

```ts
function printDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.toISOString());
  } else {
    console.log(value.toUpperCase());
  }
}
```

---

## 11. What are custom type guards?

Custom type guards are functions that tell TypeScript what type a value is.

They use the syntax:

```ts
value is Type
```

Example:

```ts
type User = {
  id: number;
  name: string;
};

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value
  );
}

const data: unknown = { id: 1, name: "John" };

if (isUser(data)) {
  console.log(data.name);
}
```

This is useful when working with API responses or unknown data.

---

## 12. What is a discriminated union, and why is it useful?

A discriminated union is a union where each type has a common property with a literal value. TypeScript uses that common property to narrow the type safely. ([TypeScript][5])

Example:

```ts
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: string[];
};

type ErrorState = {
  status: "error";
  message: string;
};

type State = LoadingState | SuccessState | ErrorState;

function render(state: State) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return state.data.join(", ");
    case "error":
      return state.message;
  }
}
```

It is useful because it prevents invalid access.

```ts
// state.data is only available when status is "success"
```

---

## 13. What are generics in TypeScript?

Generics allow you to create reusable code that works with different types while preserving type safety. TypeScript docs explain generic functions as functions with type parameters listed before the function parameters. ([TypeScript][6])

Example:

```ts
function identity<T>(value: T): T {
  return value;
}

const a = identity<string>("hello");
const b = identity<number>(100);
```

Generics are useful when the exact type is not known in advance but should still be preserved.

Example with array:

```ts
function getFirst<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirst([1, 2, 3]); // number
const firstName = getFirst(["A", "B"]); // string
```

---

## 14. How do generic constraints work using `extends`?

Generic constraints limit what type a generic can accept.

Example:

```ts
function printLength<T extends { length: number }>(value: T): number {
  return value.length;
}

printLength("hello");
printLength([1, 2, 3]);

printLength(123); // Error
```

Here, `T` must have a `length` property.

Another example:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  id: 1,
  name: "John",
};

getProperty(user, "name"); // Okay
getProperty(user, "email"); // Error
```

---

## 15. What is the difference between this and using `any`?

```ts
function identity<T>(value: T): T;
```

This generic version preserves the input type.

```ts
function identity<T>(value: T): T {
  return value;
}

const result = identity("hello");
// result is string
```

Using `any` loses type safety.

```ts
function identityAny(value: any): any {
  return value;
}

const result = identityAny("hello");
// result is any
```

With generics, TypeScript remembers the type. With `any`, TypeScript forgets the type.

Better:

```ts
const value = identity("hello");
value.toUpperCase(); // Safe
```

Unsafe:

```ts
const value = identityAny("hello");
value.toFixed(); // No compile error, possible runtime error
```

---

## 16. Explain `keyof`, `typeof`, and indexed access types.

`keyof` creates a union of object keys. Official docs describe `keyof` as producing a string or numeric literal union of an object type’s keys. ([TypeScript][7])

```ts
type User = {
  id: number;
  name: string;
};

type UserKeys = keyof User;
// "id" | "name"
```

`typeof` gets the type of a value.

```ts
const user = {
  id: 1,
  name: "John",
};

type UserType = typeof user;
```

Indexed access types get the type of a property. TypeScript docs show this syntax as looking up a specific property on another type. ([TypeScript][8])

```ts
type UserName = User["name"];
// string
```

Combined example:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

## 17. What are mapped types in TypeScript?

Mapped types create new types by transforming properties of an existing type. TypeScript docs describe mapped types as generic types that use a union of keys, often created with `keyof`, to create another type. ([TypeScript][9])

Example:

```ts
type User = {
  id: number;
  name: string;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

This creates:

```ts
type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
};
```

Another example:

```ts
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = Optional<User>;
```

---

## 18. What are conditional types?

Conditional types allow types to be selected based on a condition.

Syntax:

```ts
T extends U ? X : Y
```

Example:

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

Real example:

```ts
type ApiResponse<T> = T extends string ? { message: T } : { data: T };
```

Conditional types are useful for advanced reusable type logic.

---

## 19. What does the `infer` keyword do in conditional types?

`infer` is used inside conditional types to extract a type. TypeScript docs say conditional types can infer from types being compared using the `infer` keyword. ([TypeScript][10])

Example:

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getName() {
  return "John";
}

type Result = GetReturnType<typeof getName>;
// string
```

Another example:

```ts
type GetArrayItem<T> = T extends Array<infer Item> ? Item : T;

type A = GetArrayItem<string[]>; // string
type B = GetArrayItem<number[]>; // number
```

`infer` means: “TypeScript, figure out this type for me.”

---

## 20. Explain common utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`, `ReturnType`, and `Parameters`.

TypeScript provides global utility types for common type transformations. ([TypeScript][11])

Example base type:

```ts
type User = {
  id: number;
  name: string;
  email?: string;
};
```

`Partial<T>` makes all properties optional.

```ts
type PartialUser = Partial<User>;
```

`Required<T>` makes all properties required.

```ts
type RequiredUser = Required<User>;
```

`Pick<T, K>` selects specific properties.

```ts
type UserPreview = Pick<User, "id" | "name">;
```

`Omit<T, K>` removes specific properties.

```ts
type UserWithoutEmail = Omit<User, "email">;
```

`Record<K, T>` creates an object type with keys and values.

```ts
type Roles = Record<string, boolean>;

const roles: Roles = {
  admin: true,
  user: false,
};
```

`Readonly<T>` makes properties readonly.

```ts
type ReadonlyUser = Readonly<User>;
```

`ReturnType<T>` extracts function return type.

```ts
function getUser() {
  return { id: 1, name: "John" };
}

type UserReturn = ReturnType<typeof getUser>;
```

`Parameters<T>` extracts function parameter types as a tuple.

```ts
function createUser(name: string, age: number) {}

type CreateUserParams = Parameters<typeof createUser>;
// [string, number]
```

---

## 21. What is the difference between optional properties and properties that can be `undefined`?

Optional property means the property may be missing.

```ts
type User = {
  name?: string;
};

const user1: User = {};
const user2: User = { name: "John" };
```

A property with `undefined` must exist, but its value can be `undefined`.

```ts
type User = {
  name: string | undefined;
};

const user1: User = {}; // Error
const user2: User = { name: undefined }; // Okay
```

Difference:

```ts
name?: string;
```

means property is optional.

```ts
name: string | undefined;
```

means property is required, but value can be `undefined`.

---

## 22. What does `strictNullChecks` do?

`strictNullChecks` makes `null` and `undefined` separate types. When it is enabled, TypeScript forces you to handle possible `null` or `undefined` values safely. Official docs show that APIs like `Array.find()` return `S | undefined` when `strictNullChecks` is true. ([TypeScript][12])

Example:

```ts
const users = ["John", "Jane"];

const user = users.find((u) => u === "Alex");

console.log(user.toUpperCase()); // Error: user may be undefined
```

Correct:

```ts
if (user) {
  console.log(user.toUpperCase());
}
```

It helps prevent runtime errors like:

```ts
Cannot read properties of undefined
```

---

## 23. What is the purpose of `tsconfig.json`?

`tsconfig.json` tells TypeScript how to compile your project. Official docs say the presence of `tsconfig.json` indicates the root of a TypeScript project and specifies root files and compiler options. ([TypeScript][13])

Example:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

It controls things like:

- JavaScript version output
- Module system
- Strict type checking
- JSX support
- Source maps
- Output folder
- Included/excluded files

---

## 24. What are important compiler options you use in real projects?

Common important options:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

Important ones:

`strict`: enables stronger type checking. TypeScript docs say it turns on a wide range of type-checking behavior for stronger correctness guarantees. ([TypeScript][14])

`noImplicitAny`: gives an error when TypeScript cannot infer a type and falls back to `any`. ([TypeScript][15])

`strictNullChecks`: forces safe handling of `null` and `undefined`.

`noUncheckedIndexedAccess`: makes array/object indexing safer.

`esModuleInterop`: improves compatibility with CommonJS modules.

---

## 25. How do you type an async function?

An async function always returns a `Promise`.

```ts
async function getUser(): Promise<string> {
  return "John";
}
```

Example with object:

```ts
type User = {
  id: number;
  name: string;
};

async function fetchUser(): Promise<User> {
  const response = await fetch("/api/user");
  const data = await response.json();

  return data;
}
```

If the async function does not return anything:

```ts
async function saveUser(): Promise<void> {
  console.log("User saved");
}
```

---

## 26. How do you type API responses safely in TypeScript?

First, define the expected response type.

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

Then use it with your API function.

```ts
async function getUser(): Promise<User> {
  const response = await fetch("/api/user");
  const data: User = await response.json();

  return data;
}
```

Better production approach: treat API data as `unknown`, then validate it.

```ts
function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "email" in value
  );
}

async function getUser(): Promise<User> {
  const response = await fetch("/api/user");
  const data: unknown = await response.json();

  if (!isUser(data)) {
    throw new Error("Invalid user response");
  }

  return data;
}
```

This is safer because external API data cannot be fully trusted.

---

## 27. How would you avoid overusing `any` in a legacy JavaScript migration?

I would migrate gradually.

Good steps:

1. Start with `allowJs` and `checkJs`
2. Convert files one by one from `.js` to `.ts`
3. Use `unknown` instead of `any` for unsafe data
4. Add types around API responses
5. Type function parameters and return values
6. Use utility types where possible
7. Enable strict options gradually
8. Keep `any` only when absolutely necessary and isolate it

Example:

```ts
// Bad
function handleData(data: any) {
  return data.name.toUpperCase();
}
```

Better:

```ts
function handleData(data: unknown) {
  if (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    typeof data.name === "string"
  ) {
    return data.name.toUpperCase();
  }
}
```

Interview answer:

> I would not try to make the whole legacy codebase perfect in one day. I would reduce `any` gradually, starting from risky boundaries like API responses, shared utilities, and business logic.

---

## 28. How do you type React component props in TypeScript?

You can use either `type` or `interface`.

Using `type`:

```tsx
type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

function Button({ label, disabled, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
```

Using `interface`:

```tsx
interface UserCardProps {
  name: string;
  age: number;
}

function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      {name} - {age}
    </div>
  );
}
```

For children:

```tsx
type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <main>{children}</main>;
}
```

---

## 29. How do you type event handlers, refs, and children in React with TypeScript?

Event handler:

```tsx
function SearchBox() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <input onChange={handleChange} />;
}
```

Button click:

```tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked");
};
```

Ref:

```tsx
function InputFocus() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return <input ref={inputRef} />;
}
```

Children:

```tsx
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
```

---

## 30. Design question: How would you model loading, success, and error states using TypeScript so invalid UI states are impossible?

Best answer: use a discriminated union.

Bad approach:

```ts
type State = {
  loading: boolean;
  data?: string[];
  error?: string;
};
```

This allows invalid states:

```ts
{
  loading: true,
  data: ["User"],
  error: "Failed"
}
```

Better approach:

```ts
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: string[];
};

type ErrorState = {
  status: "error";
  message: string;
};

type State = LoadingState | SuccessState | ErrorState;
```

Usage:

```ts
function render(state: State) {
  switch (state.status) {
    case "loading":
      return "Loading...";

    case "success":
      return state.data.join(", ");

    case "error":
      return state.message;
  }
}
```

Now invalid states are impossible because:

- `data` exists only in success state
- `message` exists only in error state
- loading state cannot accidentally contain success/error data

Senior interview answer:

> I would model UI state with a discriminated union instead of multiple booleans. This makes impossible states impossible and gives TypeScript proper narrowing inside switch cases.

[1]: https://github.com/rcprodev/js-dsa/blob/main/questions/ts_interview_questions.md "js-dsa/questions/ts_interview_questions.md at main · rcprodev/js-dsa · GitHub"
[2]: https://www.typescriptlang.org/?utm_source=chatgpt.com "TypeScript: JavaScript With Syntax For Types."
[3]: https://www.typescriptlang.org/docs/handbook/type-inference.html?utm_source=chatgpt.com "TypeScript: Documentation - Type Inference"
[4]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html?utm_source=chatgpt.com "TypeScript: Documentation - Everyday Types"
[5]: https://www.typescriptlang.org/docs/handbook/2/narrowing.html?utm_source=chatgpt.com "TypeScript: Documentation - Narrowing"
[6]: https://www.typescriptlang.org/docs/handbook/2/generics.html?utm_source=chatgpt.com "TypeScript: Documentation - Generics"
[7]: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html?utm_source=chatgpt.com "Documentation - Keyof Type Operator - TypeScript"
[8]: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html?utm_source=chatgpt.com "TypeScript: Documentation - Indexed Access Types"
[9]: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html?utm_source=chatgpt.com "TypeScript: Documentation - Mapped Types"
[10]: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html?utm_source=chatgpt.com "Documentation - Conditional Types - TypeScript"
[11]: https://www.typescriptlang.org/docs/handbook/utility-types.html?utm_source=chatgpt.com "TypeScript: Documentation - Utility Types"
[12]: https://www.typescriptlang.org/tsconfig/strictNullChecks.html?utm_source=chatgpt.com "TypeScript: TSConfig Option: strictNullChecks"
[13]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html?utm_source=chatgpt.com "TypeScript: Documentation - What is a tsconfig.json"
[14]: https://www.typescriptlang.org/tsconfig/strict.html?utm_source=chatgpt.com "TypeScript: TSConfig Option: strict"
[15]: https://www.typescriptlang.org/tsconfig/noImplicitAny.html?utm_source=chatgpt.com "TypeScript: TSConfig Option: noImplicitAny"
