# Complete React Course

![Bidur Sapkota](https://www.bidursapkota.com.np/_next/image?url=%2Fimages%2Fprofile3.png&w=48&q=75 "Bidur Sapkota - Developer")&nbsp;[Bidur Sapkota](https://www.bidursapkota.com.np/)

![React.js Complete Guide by Bidur Sapkota](/4-react-post.jpg "React.js Complete Guide – Blog by Bidur Sapkota")

## Table of Contents

1. [Getting Started](#getting-started)
2. [JSX Basics](#jsx-basics)
3. [CSS Styling](#css-styling)
4. [Components](#components)
5. [Props](#props)
6. [State with useState](#state-with-usestate)
7. [Event Handling](#event-handling)
8. [Conditional Rendering](#conditional-rendering)
9. [Lists and Keys](#lists-and-keys)
10. [Forms and Controlled Components](#forms-and-controlled-components)
11. [useEffect Hook](#useeffect-hook)
12. [useRef Hook](#useref-hook)
13. [Custom Hooks](#custom-hooks)
14. [Context API](#context-api)
15. [useReducer Hook](#usereducer-hook)
16. [React Router](#react-router)

---

## Getting Started

### Setting Up Vite + React

Vite is a modern build tool that provides fast development experience. It's faster than Create React App and has better performance.

**Steps:**

```bash
# Create new project
npm create vite@latest
# Give Project name, select React, select TypeScript, no rollback, yes install and start

# Navigate to project
cd project_name

# Start development server
npm run dev
```

**Project Structure:**

```
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useWindowSize.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── App.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

---

---

## JSX Basics

### What is JSX?

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript. It gets compiled to regular JavaScript function calls.

**Rules:**

- Must return a single parent element
- Use `className` instead of `class`
- Use `camelCase` for attributes (onClick, onChange)
- JavaScript expressions go inside curly braces `{}`
- Self-closing tags must end with `/>`

**Example:**

```tsx
function Greeting() {
  const name: string = "Alice";
  const age: number = 25;

  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Next year you'll be {age + 1}.</p>
    </div>
  );
}

export default Greeting;
```

---

---

---

## CSS Styling

### Different Ways to Style Components

React supports multiple styling approaches: CSS files, inline styles, CSS Modules, and CSS-in-JS libraries.

**Example 1: CSS Module**

```css
/* Button.module.css */
.button {
  background-color: #007bff;
}
```

```tsx
// Button.tsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
```

**Example 2: Inline Styles**

```tsx
import { CSSProperties } from "react";

function InlineStyled() {
  const titleStyle: CSSProperties = {
    color: "#333",
    marginBottom: "10px",
  };

  return (
    <div>
      <h3 style={titleStyle}>Card Title</h3>
      <p>This card uses inline styles</p>
    </div>
  );
}

export default InlineStyled;
```

---

---

---

## Components

### Functional Components

Components are reusable pieces of UI. They're JavaScript functions that return JSX. Component names must start with a capital letter.

**Example:**

```tsx
// Welcome.tsx
function Welcome() {
  return (
    <div>
      <h2>Welcome to React!</h2>
      <p>This is a functional component.</p>
    </div>
  );
}

export default Welcome;

// App.tsx
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;
```

---

---

---

## Props

### Passing Data to Components

Props (properties) allow you to pass data from parent to child components. Props are read-only and cannot be modified by the child component.

**Example:**

```tsx
// UserCard.tsx
interface UserCardProps {
  name: string;
  age: number;
  city: string;
}

function UserCard({ name, age, city }: UserCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// App.tsx
function App() {
  return (
    <div>
      <UserCard name="John" age={28} city="New York" />
      <UserCard name="Sarah" age={32} city="London" />
    </div>
  );
}

export default App;
```

---

---

---

## State with useState

### Managing Component State

State allows components to remember information. When state changes, the component re-renders. `useState` returns an array with the current state value and a function to update it.

**Example:**

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

---

---

## Event Handling

### Handling User Interactions

React events are named using camelCase. Pass a function reference, not a function call. You can pass arguments using arrow functions.

**Example:**

```tsx
import { useState, FormEvent, ChangeEvent } from "react";

function EventDemo() {
  const [message, setMessage] = useState<string>("");

  const handleClick = (): void => {
    setMessage("Button clicked!");
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Submitted: ${message}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleInput}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>

      <p>Message: {message}</p>
    </div>
  );
}

export default EventDemo;
```

---

---

---

## Conditional Rendering

### Showing Different Content Based on Conditions

You can use JavaScript operators like `if`, ternary operator `? :`, and logical AND `&&` to conditionally render elements.

**Example:**

```tsx
import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div>
      {/* Using ternary operator */}
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>

      {/* Using && operator */}
      {isLoggedIn && <p>You have 3 new messages</p>}

      {!isLoggedIn && <p>Log in to see your messages</p>}

      {/* Toggle button */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
```

---

---

---

## Lists and Keys

### Rendering Multiple Items

Use `map()` to transform an array into JSX elements. Each item needs a unique `key` prop to help React identify which items changed. Keys should be stable, predictable, and unique.

**Example:**

```tsx
import { CSSProperties } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const todos: Todo[] = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master Vite", completed: false },
  ];

  return (
    <div>
      <h2>My Todo List</h2>
      <ul>
        {todos.map((todo) => {
          const textStyle: CSSProperties = {
            textDecoration: todo.completed ? "line-through" : "none",
          };

          return (
            <li key={todo.id}>
              <span style={textStyle}>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

---

---

## Forms and Controlled Components

### Managing Form Input

In controlled components, React state is the "single source of truth". The input's value is controlled by state, and updates happen via event handlers.

**Example:**

```tsx
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  username: string;
  email: string;
  age: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    age: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Welcome ${formData.username}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Register</button>

      <div>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}

export default RegistrationForm;
```

---

---

---

## useEffect Hook

### Side Effects in Components

`useEffect` lets you perform side effects like data fetching, subscriptions, or DOM manipulation. It runs after render. The dependency array controls when it re-runs.

**Example 1: Event Listener + Cleanup**

```tsx
import { useState, useEffect } from "react";

function WindowResizeListener() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
      console.log("Window resized:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("Event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed");
    };
  }, []);

  return (
    <div>
      <h2>Window Resize Example</h2>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
}

export default WindowResizeListener;
```

**Example 2: Fetching Data from JSONPlaceholder**

```tsx
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

function FetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users");

        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
```

---

---

---

## useRef Hook

### Accessing DOM Elements and Persisting Values

`useRef` creates a mutable reference that persists across renders without causing re-renders. Commonly used for accessing DOM elements or storing values that don't need to trigger updates.

**Example:**

```tsx
import { useRef, useState, ChangeEvent } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef<number>(0);
  const [name, setName] = useState<string>("");

  // Increment on every render (doesn't cause re-render)
  renderCount.current = renderCount.current + 1;

  const focusInput = (): void => {
    inputRef.current?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Render count: {renderCount.current}</h3>

      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <button onClick={focusInput}>Focus Input</button>

      <p>Name: {name}</p>
    </div>
  );
}

export default FocusInput;
```

---

---

---

## Custom Hooks

### Reusing Stateful Logic

Custom hooks let you extract component logic into reusable functions. They must start with "use" and can call other hooks.

**Example:**

```tsx
import { useState, useEffect } from "react";

// Custom Hook
function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Using the custom hook
function WindowSize() {
  const width = useWindowWidth();

  const getDeviceType = (): string => {
    if (width < 768) return "Mobile";
    if (width < 1024) return "Tablet";
    return "Desktop";
  };

  return (
    <div>
      <h2>Window Width: {width}px</h2>
      <p>{getDeviceType()}</p>
    </div>
  );
}

export default WindowSize;
```

---

---

---

## Context API

### Sharing State Across Components

Context provides a way to pass data through the component tree without passing props manually at every level. Useful for global state like themes, user info, or language.

**Example: Theming**

**Create theme context and theme provider `src/context/ThemeContext.tsx`**

```tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply CSS variables to :root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

**Wrap whole app by theme provider `src/main.tsx`**

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

**Use theme anywhere `src/App.tsx`**

```tsx
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-container">
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

---

---

---

## useReducer Hook

### Managing Complex State

`useReducer` is an alternative to `useState` for managing complex state logic. It's similar to Redux reducers and good when state updates depend on previous state or involve multiple sub-values.

**Example:**

```tsx
import { useReducer } from "react";

// Define state type
interface CounterState {
  count: number;
}

// Define action types
type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

// Reducer function
function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "set":
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>+1</button>

      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>

      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        Set to 10
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterWithReducer;
```

---

---

---

## React Router

### Client-Side Routing

React Router enables navigation between different views in a single-page application. First, install it: `npm install react-router-dom`

**Example:**

```tsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Home Page
function Home() {
  return <h2>Home Page</h2>;
}

// About Page
function About() {
  return <h2>About Page</h2>;
}

// User Profile with dynamic route
function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  return <h2>User Profile: {userId}</h2>;
}

// Navigation Component
function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |
      <Link to="/user/123">User 123</Link>
    </nav>
  );
}

// App with Router
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

---

---
