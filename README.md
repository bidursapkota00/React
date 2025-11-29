# Complete React Course

![Bidur Sapkota](https://www.bidursapkota.com.np/_next/image?url=%2Fimages%2Fprofile3.png&w=48&q=75 "Bidur Sapkota - Developer")&nbsp;[Bidur Sapkota](https://www.bidursapkota.com.np/)

![React.js Complete Guide by Bidur Sapkota](/4-react-post.jpg "React.js Complete Guide – Blog by Bidur Sapkota")

## Table of Contents

1. [Getting Started](#getting-started)
2. [JSX Basics](#jsx-basics)
3. [CSS Styling](#css-styling)
4. [Components](#components)
5. [Props](#props)
6. [Images](#images)
7. [State with useState](#state-with-usestate)
8. [Forms and Controlled Components](#forms-and-controlled-components)
9. [useEffect Hook](#useeffect-hook)
10. [useRef Hook](#useref-hook)
11. [Custom Hooks](#custom-hooks)
12. [Context API](#context-api)
13. [useReducer Hook](#usereducer-hook)
14. [React Router](#react-router)

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

# stop the server
CTRL + C
```

**Project Structure:**

```text
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

#### Folder Structure

- `node_modules`

  Contains all dependencies required by the app. Main dependencies also listed in package.json

- `public`

  Contains static assets

- `index.html`

  - id="root" - our entire app

- `src`

  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.

- `.gitignore`

  Specifies which files source control (Git) should ignore

- `package.json`

  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- `package-lock.json`

  A snapshot of the entire dependency tree

- `README`

  The markdown file where you can share more info about the project for example build instructions and summary

---

---

---

## JSX Basics

### What is JSX?

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript. It gets compiled to regular JavaScript function calls.

**Rules Summary:**

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

**Everything is actually js**

```jsx
return (
  <div>
    <h2>hello world</h2>
  </div>
);
// Or
return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "hello world")
);
```

### JSX Rules

- Every component should return single element (one parent element)

  - semantics section/article
  - Fragment - let's us group elements without adding extra nodes

```js
return <React.Fragment>...rest of the return</React.Fragment>;

// shorthand

return <>...rest of the return</>;
```

- camelCase property naming convention

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className instead of class

```js
return <div className="someValue">hello</div>;
```

- Close every element

```js
return <img />;
// or
return <input />;
```

- Formatting
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <div className="someValue">hello</div>;
  );
}

function Greeting() {
  return <div className="someValue">hello</div>;
}
```

#### React Developer Tools

- top right corner
- more tools/extensions
- open chrome web store

![Debugger Meme](/debug.png)

#### Extensions and settings.json

- Auto Rename Tag
- ES7+ React/Redux/React-Native snippets
- glean
  - easy extract JSX into a new component
- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)
- customize in settings.json or settings icon on left > settings > search

**settings.json**

```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
```

- ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export )
  - same as the file name
  - Import React On Top
    - uncheck
    - React Snippets › Settings: Import React On Top

---

---

---

## CSS Styling

### Different Ways to Style Components

React supports multiple styling approaches: CSS files, inline styles, CSS Modules, and CSS-in-JS libraries.

**Example 1: CSS**

```css
/* Button.css */
.button {
  background-color: #007bff;
}
```

```tsx
// Button.tsx
import "./Button.css";

function Button() {
  return <button className="button">Click Me</button>;
}

export default Button;
```

**Example 2: CSS Module**

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

**Example 3: Inline Styles**

- style prop
- {} in JSX means going back to JS Land
- value is an object with key/value pairs - capitalized and with ''

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
// ProductCard.tsx

// 1. WITHOUT DESTRUCTURING
interface ProductCardProps {
  name: string;
  price: number;
}

function ProductCard(props: ProductCardProps) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
    </div>
  );
}

export default ProductCard;


// App.tsx
function App() {
  return (
    <div>
      <h2>Products:</h2>
      <ProductCard name="Acer Predator" price={300000} />
      <ProductCard name="Macbook Air" price={150000} />
      <ProductCard name="Lenovo Legion" price={200000} />
    </div>
  );
}

export default App;


// 2. Passing whole object

interface ProductCardProps {
  laptop: {
    name: string;
    price: number;
  };
}

function ProductCard(props: ProductCardProps) {
  const { name, price } = props.laptop;
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

function App() {
  const laptop1 = { name: "Acer Predator", price: 300000 };
  const laptop2 = { name: "Macbook Air", price: 150000 };
  const laptop3 = { name: "Lenovo Legion", price: 200000 };

  return (
    <div>
      <h2>Products:</h2>
      <ProductCard laptop={laptop1} />
      <ProductCard laptop={laptop2} />
      <ProductCard laptop={laptop3} />
    </div>
  );
}

// 3. WITH DESTRUCTURING
function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}


// 4. ARRAY OF OBJECTS WITH MAP
function App() {
  const laptops = [
    { name: "Acer Predator", price: 300000 },
    { name: "Macbook Air", price: 150000 },
    { name: "Lenovo Legion", price: 200000 },
  ];

  return (
    <div>
      <h2>Products:</h2>
      {laptops.map((laptop, index) => (
        <ProductCard
          key={index}
          name={laptop.name}
          price={laptop.price}
        />
      ))}
    </div>
  );
}

// 5. Passing whole object (using spread operator)
function App() {
  const laptops = [
    { name: "Acer Predator", price: 300000 },
    { name: "Macbook Air", price: 150000 },
    { name: "Lenovo Legion", price: 200000 },
  ];

  return (
    <div>
      <h2>Products:</h2>
      {laptops.map((laptop, index) => (
          return <ProductCard key={index} {...laptop} />;
      ))}
    </div>
  );
}
```

Use `map()` to transform an array into JSX elements. Each item needs a unique `key` prop to help React identify which items changed. Keys should be stable, predictable, and unique.

#### Children Prop

- everything we render between component tags
- during the course we will mostly use it Context API
- special prop, has to be "children"
- can place anywhere in JSX

```tsx
// ProductCard.tsx
interface ProductCardProps {
  name: string;
  price: number;
  children: React.ReactNode;
}

function ProductCard({ name, price, children }: ProductCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
      <div>{children}</div>
    </div>
  );
}

export default ProductCard;

// App.tsx
import ProductCard from "./ProductCard";

function App() {
  const laptops = [
    { name: "Acer Predator", price: 300000 },
    { name: "Macbook Air", price: 150000 },
    { name: "Lenovo Legion", price: 200000 },
  ];

  return (
    <div>
      <h2>Products:</h2>
      {laptops.map((laptop, index) => (
        <ProductCard key={index} {...laptop}>
          <p>
            This is a <strong>description</strong>
          </p>
        </ProductCard>
      ))}
    </div>
  );
}

export default App;
```

#### Styling Card

Create `ProductCard.css`

```css
.card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin-right: 20px;
}
```

Update `ProductCard.tsx`

```tsx
import "./ProductCard.css";

// ...
```

---

---

---

## Images

#### Local Images (Public Folder)

- external images (hosted on different server) - just need an url
- local images (public folder) - less performant
- local images (src folder) - better solution for assets, since under the hood they get optimized.

- save image (Save Image As....)
- create images folder in public
- copy/paste image
- rename (optional)
- replace url in the src - './images/imageName.extension'
- './' because assets are on the same server

```js
const Image = () => (
  <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds" />
);
```

- whatever assets we place in public - instantly available
- domain(localhost)/asset

**Update App.tsx**

Add images

```tsx
// ...
const laptops = [
  {
    name: "Acer Predator",
    price: 300000,
    image: "./images/acer-predator.jpeg",
  },
  { name: "Macbook Air", price: 150000, image: "./images/macbook-air.jpg" },
  {
    name: "Lenovo Legion",
    price: 200000,
    image: "./images/lenovo-legion.jpg",
  },
];
// ...
```

**Update ProductCard.tsx**

```tsx
import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="card">
      <img src={image} alt="Product Image" />
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
    </div>
  );
}

export default ProductCard;
```

**Update ProductCard.css**

```css
/* // ... */
.card > img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: inline-block;
}
```

**Output:**

![Laptop Product Output](/laptop-product.png)

#### Local Images (src folder)

- better performance because optimized **(hashing and caching)**
- add one more book to array
- download all three images (rename)
- setup images folder in the src
- import all three images in the App.tsx
- set image property equal to import
- and yes each image requires new import

**Update App.tsx**

```tsx
import ProductCard from "./ProductCard";
import acerImage from "./images/acer-predator.jpeg";
import macImage from "./images/macbook-air.jpg";
import lenovoImage from "./images/lenovo-legion.jpg";

function App() {
  const laptops = [
    {
      name: "Acer Predator",
      price: 300000,
      image: acerImage,
    },
    { name: "Macbook Air", price: 150000, image: macImage },
    {
      name: "Lenovo Legion",
      price: 200000,
      image: lenovoImage,
    },
  ];

  return (
    <div>
      <h2>Products:</h2>
      {laptops.map((laptop, index) => (
        <ProductCard key={index} {...laptop} />
      ))}
    </div>
  );
}

export default App;
```

---

---

---

## State with useState

### The Need For State

- in App.jsx setup import and container div

  Setup Challenge :

- create count variable
- display value in the JSX
- add button and increase the value
- the reason for bug - we don't trigger re-render

```js
const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    // preserve value between renders
    // trigger re-render
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
```

### Managing Component State

#### useState Basics

- useState hook
- returns an array with two elements: the current state value, and a function that we can use to update the state
- destructuring from array (js basics)
- accepts default value as an argument
- state update triggers re-render

**Example:**

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

#### Initial Render and Re-Renders

In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

**Infinite loop warning**

```tsx
const handleClick = () => {
  setCount(count + 1);
};
handleClick();
```

- initial render happens
- handleClick is called - it changes state
- state change cause re-render
- re-render calls handleClick

#### General Rules of Hooks

- starts with "use" (both -react and custom hooks)
- invoke inside function/component body
- don't call hooks conditionally
- set functions don't update state immediately (`setCount(count => count + 1)`)

**State update is not immediate**

```tsx
const handleClick = () => {
  // count is zero initially
  setCount((count) => count + 1);
  console.log(count); // prints zero not one
};
```

```tsx
const handleClick = () => {
  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 3000);
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 3000);
};
```

#### Automatic Batching

In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.

```tsx
const handleClick = () => {
  setCount((count) => count + 1);
  setCount((count) => count + 1);
  setCount((count) => count + 1);
  setCount((count) => count + 1);
  console.log(count);
};
console.log("hello"); // runs once (twice due to strict mode in dev)
```

### Conditional Rendering

You can use JavaScript operators like `if`, ternary operator `? :`, and logical AND `&&` (Short Circuit Evaluation) to conditionally render elements.

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

## Forms and Controlled Components

### Managing Form Input

In controlled components, React state is the "single source of truth". The input's value is controlled by state, and updates happen via event handlers.

**Example:**

```tsx
import { useState, type FormEvent, type ChangeEvent } from "react";

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

useEffect is a hook in React that allows you to perform side effects in function components. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

Note: subscription refers to listening to some external data source or event stream so your component can react to updates over time. Like websocket connection, firestore listner, scroll events, etc

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

**If you want to test cleanup**

```tsx
import React from "react";
import WindowResizeListener from "./Test.tsx";

export default function Unmount() {
  const [isMounted, setIsMounted] = React.useState(true);

  const handleUnmount = () => {
    setIsMounted(!isMounted);
  };
  return (
    <>
      {isMounted && <WindowResizeListener />}
      <button onClick={handleUnmount}>Unmount</button>
    </>
  );
}
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

**Test by setting network throttling to 3G.**

---

---

---

## useRef Hook

### Accessing DOM Elements and Persisting Values

- lets you store a mutable value
- preserves the value between renders
- DOES NOT TRIGGER RE-RENDER
- target DOM nodes/elements

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

Create `/src/hooks/useFetch.ts`

```tsx
import { useState, useEffect } from "react";

const useFetch = <T,>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return [data, isLoading, isError] as const;
};

export default useFetch;
```

**Now use anywhere**

```tsx
import useFetch from "./hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

const url = "https://jsonplaceholder.typicode.com/users";

export default function FetchUsers() {
  const [users, isLoading, isError] = useFetch<User[]>(url);

  if (isLoading) return <p>Loading users...</p>;
  if (isError)
    return <p style={{ color: "red" }}>Error: Something went wrong</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
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
