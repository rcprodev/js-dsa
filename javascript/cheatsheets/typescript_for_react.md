# TypeScript Cheat Sheet for React Development

React supports TypeScript with JSX, and any file that contains JSX should use the `.tsx` extension. React docs also recommend adding React type definitions such as `@types/react` and `@types/react-dom` when needed. ([React][1])

---

## 1. Basic component props

```tsx
type UserCardProps = {
  name: string;
  age: number;
  isActive?: boolean; // optional prop
};

function UserCard({ name, age, isActive = false }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}
```

Use `type` or `interface`. Both are okay for props.

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

---

## 2. Typing `children`

Use `React.ReactNode` for normal children.

```tsx
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
```

Usage:

```tsx
<Card>
  <h2>Hello</h2>
  <p>This is content</p>
</Card>
```

---

## 3. Typing `useState`

Simple state:

```tsx
const [count, setCount] = React.useState<number>(0);
```

String state:

```tsx
const [name, setName] = React.useState<string>("");
```

Boolean state:

```tsx
const [isOpen, setIsOpen] = React.useState<boolean>(false);
```

Array state:

```tsx
type User = {
  id: number;
  name: string;
};

const [users, setUsers] = React.useState<User[]>([]);
```

Object or null state:

```tsx
type User = {
  id: number;
  name: string;
};

const [user, setUser] = React.useState<User | null>(null);
```

When initial value is clear, TypeScript can infer the type:

```tsx
const [count, setCount] = React.useState(0);
// count is number
```

---

## 4. Typing event handlers

Input change:

```tsx
function SearchBox() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <input onChange={handleChange} />;
}
```

Form submit:

```tsx
function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  );
}
```

Button click:

```tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked");
};
```

Select change:

```tsx
const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(event.target.value);
};
```

Textarea change:

```tsx
const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log(event.target.value);
};
```

---

## 5. Typing refs

Input ref:

```tsx
function FocusInput() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

Div ref:

```tsx
const divRef = React.useRef<HTMLDivElement | null>(null);
```

Button ref:

```tsx
const buttonRef = React.useRef<HTMLButtonElement | null>(null);
```

Timer ref:

```tsx
const timerRef = React.useRef<number | null>(null);
```

---

## 6. Typing API responses

```tsx
type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser(): Promise<User> {
  const response = await fetch("/api/user");
  const data: User = await response.json();

  return data;
}
```

Better safe version:

```tsx
async function getUser(): Promise<User> {
  const response = await fetch("/api/user");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = (await response.json()) as User;
  return data;
}
```

For production, API data should ideally be validated before trusting it.

```tsx
function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "email" in value
  );
}
```

---

## 7. Loading, success, error state

Bad approach:

```tsx
type State = {
  loading: boolean;
  data?: string[];
  error?: string;
};
```

Better approach: discriminated union.

```tsx
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

```tsx
function renderContent(state: State) {
  switch (state.status) {
    case "loading":
      return <p>Loading...</p>;

    case "success":
      return (
        <ul>
          {state.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "error":
      return <p>{state.message}</p>;
  }
}
```

This pattern avoids invalid UI states.

---

## 8. Typing arrays and lists

```tsx
type Product = {
  id: number;
  title: string;
  price: number;
};

const products: Product[] = [
  { id: 1, title: "Laptop", price: 50000 },
  { id: 2, title: "Mouse", price: 1000 },
];
```

Component:

```tsx
type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ₹{product.price}
        </li>
      ))}
    </ul>
  );
}
```

---

## 9. Typing function props

```tsx
type CounterProps = {
  count: number;
  onIncrement: () => void;
  onChangeCount: (value: number) => void;
};

function Counter({ count, onIncrement, onChangeCount }: CounterProps) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={() => onChangeCount(10)}>Set 10</button>
    </div>
  );
}
```

---

## 10. Typing `useReducer`

```tsx
type State = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    case "set":
      return { count: action.payload };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Set 10
      </button>
    </>
  );
}
```

---

## 11. Typing Context API

```tsx
type AuthContextType = {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);
```

Provider:

```tsx
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(null);

  const login = (name: string) => setUser(name);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

Custom hook:

```tsx
function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
```

Usage:

```tsx
function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <p>{user}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

---

## 12. Typing custom hooks

```tsx
function useToggle(initialValue = false) {
  const [value, setValue] = React.useState<boolean>(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return { value, toggle };
}
```

Usage:

```tsx
const { value, toggle } = useToggle(false);
```

Custom hook with API:

```tsx
type User = {
  id: number;
  name: string;
};

function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      const response = await fetch("/api/user");
      const data = (await response.json()) as User;

      setUser(data);
      setLoading(false);
    }

    fetchUser();
  }, []);

  return { user, loading };
}
```

---

## 13. Typing form state

```tsx
type LoginForm = {
  email: string;
  password: string;
};

function Login() {
  const [form, setForm] = React.useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="password" value={form.password} onChange={handleChange} />
    </form>
  );
}
```

---

## 14. Typing component style prop

```tsx
type BoxProps = {
  style?: React.CSSProperties;
};

function Box({ style }: BoxProps) {
  return <div style={style}>Box</div>;
}
```

Usage:

```tsx
<Box style={{ color: "red", padding: "20px" }} />
```

---

## 15. Typing component with HTML props

Useful when your component should accept normal button attributes.

```tsx
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
}
```

Usage:

```tsx
<Button disabled onClick={() => console.log("clicked")}>
  Submit
</Button>
```

For input:

```tsx
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return <input {...props} />;
}
```

---

## 16. Useful React TypeScript types

```tsx
React.ReactNode;
```

Use for children or anything React can render.

```tsx
React.CSSProperties;
```

Use for inline style objects.

```tsx
React.ChangeEvent<HTMLInputElement>;
```

Use for input change event.

```tsx
React.FormEvent<HTMLFormElement>;
```

Use for form submit event.

```tsx
React.MouseEvent<HTMLButtonElement>;
```

Use for button click event.

```tsx
React.ComponentProps<"button">;
```

Use to get all native button props.

```tsx
React.ElementRef<"input">;
```

Use to get ref type of an element.

---

## 17. Union types for props

```tsx
type AlertProps = {
  type: "success" | "error" | "warning";
  message: string;
};

function Alert({ type, message }: AlertProps) {
  return <div className={`alert alert-${type}`}>{message}</div>;
}
```

Usage:

```tsx
<Alert type="success" message="Saved successfully" />
```

This will give error:

```tsx
<Alert type="danger" message="Invalid type" />
```

---

## 18. Conditional props

Example: button can be either link or normal button.

```tsx
type ButtonAsButton = {
  as?: "button";
  onClick: () => void;
  href?: never;
};

type ButtonAsLink = {
  as: "a";
  href: string;
  onClick?: never;
};

type SmartButtonProps = ButtonAsButton | ButtonAsLink;

function SmartButton(props: SmartButtonProps) {
  if (props.as === "a") {
    return <a href={props.href}>Link</a>;
  }

  return <button onClick={props.onClick}>Button</button>;
}
```

---

## 19. Utility types useful in React

```tsx
type User = {
  id: number;
  name: string;
  email: string;
};
```

`Partial`

```tsx
type UpdateUser = Partial<User>;
```

`Pick`

```tsx
type UserPreview = Pick<User, "id" | "name">;
```

`Omit`

```tsx
type UserWithoutEmail = Omit<User, "email">;
```

`Readonly`

```tsx
type ReadonlyUser = Readonly<User>;
```

`Record`

```tsx
type Role = "admin" | "user" | "guest";

type Permissions = Record<Role, boolean>;
```

---

## 20. Common best practices

Use `.tsx` for files with JSX and `.ts` for plain TypeScript files. This follows React’s TypeScript guidance. ([React][1])

Prefer `unknown` over `any` for unsafe external data.

```tsx
const data: unknown = await response.json();
```

Avoid this:

```tsx
const data: any = await response.json();
```

Use discriminated unions for UI states.

```tsx
type State =
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };
```

Use strict TypeScript settings in real projects. `tsconfig.json` is the root config file that defines TypeScript compiler options, and the `jsx` option controls how JSX is emitted from `.tsx` files. ([TypeScript][2])

Good `tsconfig.json` base:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "jsx": "react-jsx",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "moduleResolution": "Bundler",
    "skipLibCheck": true
  }
}
```

---

## 21. Interview-ready summary

For React TypeScript development, you should be strong in:

1. Typing props
2. Typing `children`
3. Typing `useState`
4. Typing events
5. Typing refs
6. Typing API responses
7. Typing forms
8. Typing custom hooks
9. Typing context
10. Using union types for safer UI states

The most senior-looking answer is this:

```tsx
type State =
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };
```

Because it shows you know how to make invalid UI states impossible.

[1]: https://react.dev/learn/typescript?utm_source=chatgpt.com "Using TypeScript – React"
[2]: https://www.typescriptlang.org/docs/handbook/tsconfig-json?utm_source=chatgpt.com "TypeScript: Documentation - What is a tsconfig.json"
