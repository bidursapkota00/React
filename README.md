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
15. [Optimizations](#optimizations)
16. [Basic Project1: Filter Menu](#basic-project1-filter-menu)
17. [Basic Project2: Carousel](#basic-project2-carousel)
18. [Basic Project3: Grocery Bud](#basic-project3-grocery-bud)

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

**Add this to index.css**

```css
:root {
  --bg-color: #ffffff;
  --fg-color: #000000;
}

:root[data-theme="dark"] {
  --bg-color: #121212;
  --fg-color: #ffffff;
}

body {
  margin: 0;
}

.theme-container {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
  padding: 2rem;
}

button {
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  background: var(--fg-color);
  color: var(--bg-color);
  border-radius: 6px;
}
```

**Add this to App.tsx**

**Use theme anywhere `src/App.tsx`**

```tsx
export default function App() {
  return (
    <div className="theme-container">
      <h2>Theme</h2>
      <button>Toggle Theme</button>
    </div>
  );
}
```

**Inspect Elements in browser. Double click on html. Add `data-theme="dark"` to see result.**
<br>

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

**Use theme anywhere. Edit `src/App.tsx` to add useTheme**

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

## Optimizations

**memo()**

- We use memo on the Child so it doesn't re-render when the state of Parent changes but child does not depend on that state.
- Wraps a component to prevent re-renders when props are unchanged

**useCallback()**

- We use useCallback to pass a stable function to the Child.
- Memoizes a function so it keeps the same reference

**useMemo()**

- We use useMemo to cache a "heavy" math operation.
- Memoizes a computed value to avoid expensive recalculations
  <br>

**Example:**

```tsx
import { useState, memo, useCallback, useMemo } from "react";

type ChildProps = {
  label: string;
  onLog: () => void;
};

// Goal: 'Child' will ONLY re-render if 'label' or 'onLog' changes.
const Child = memo(({ label, onLog }: ChildProps) => {
  console.log("Child re-rendered");

  return (
    <div style={{ border: "1px solid grey", padding: 10, marginTop: 10 }}>
      <p>Child Component: {label}</p>
      <button onClick={onLog}>Log to Console</button>
    </div>
  );
});

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Goal: Only run this heavy math when 'count' changes, not when 'darkTheme' changes.
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    return count * 1_000_000; // Imagine a slow loop here
  }, [count]);

  // Goal: Keep this function identical between renders so 'Child' doesn't re-render.
  const handleLog = useCallback(() => {
    console.log("Log triggered from child");
  }, []); // Empty dependency array = function never changes

  return (
    <div
      style={{
        background: darkTheme ? "#333" : "#FFF",
        color: darkTheme ? "#FFF" : "#000",
        padding: 20,
      }}
    >
      <h1>Parent Component</h1>

      <p>Count: {count}</p>
      <p>Expensive Result: {expensiveValue}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <button onClick={() => setDarkTheme((prev) => !prev)}>
        Toggle Theme
      </button>

      <Child label="I am static" onLog={handleLog} />
    </div>
  );
};
```

## Basic Project1: Filter Menu

Build a restaurant menu application with category filtering using React, TypeScript, and modular CSS.

**Create Vite Project**

```bash
npm create vite@latest filter-menu -- --template react-ts
code filter-menu
```

**Project Structure**

```text
filter-menu/
├── src/
│   ├── components/
│   │   ├── Categories.tsx
│   │   ├── Categories.css
│   │   ├── Menu.tsx
│   │   ├── Menu.css
│   │   ├── MenuItem.tsx
│   │   ├── MenuItem.css
│   │   ├── Title.tsx
│   │   └── Title.css
│   ├── data/
│   │   └── menu.ts
│   ├── types/
│   │   └── menu.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
│   └── images/
│       ├── item-1.jpeg
│       ├── item-2.jpeg
│       └── ... (item-9.jpeg)
```

**Add Images to `public/images/`**

Place your menu item images (item-1.jpeg through item-9.jpeg) in the `public/images/` directory.

**Note:** You can use placeholder images from services like Unsplash or Lorem Picsum during development.

---

**Define Types**

**Create `src/types/menu.ts`**

```typescript
export interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

export type Category = string;
```

---

**Create Data File**

**Create `src/data/menu.ts`**

```typescript
import { type MenuItem } from "../types/menu";

const menu: MenuItem[] = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

export default menu;
```

---

**Setup Global Styles**

**Create `src/index.css`**

```css
/* Global Reset and Variables */
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

:root {
  /* Primary Colors */
  --primary-100: #fef3c7;
  --primary-500: #f59e0b;
  --primary-700: #b45309;

  /* Grey Scale */
  --grey-50: #f8fafc;
  --grey-200: #e2e8f0;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-900: #0f172a;

  /* Semantic Colors */
  --white: #fff;
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);

  /* Layout */
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;

  /* Shadows */
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: var(--textColor);
}

/* Typography */
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h2 {
  font-size: 2.441rem;
}

h5 {
  font-size: 1.25rem;
}

/* Utility Classes */
.img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.btn {
  cursor: pointer;
  color: var(--white);
  background: var(--primary-500);
  border: transparent;
  border-radius: var(--borderRadius);
  letter-spacing: var(--letterSpacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
}

.btn:hover {
  background: var(--primary-700);
}
```

---

**Create Title Component**

**Create `src/components/Title.tsx`**

```typescript
import "./Title.css";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
```

**Create `src/components/Title.css`**

```css
.title {
  text-align: center;
}

.title-underline {
  background: var(--primary-500);
  width: 7rem;
  height: 0.25rem;
  margin: 0 auto;
  margin-top: 1rem;
}
```

**Create Main App Component**

**Create `src/App.tsx`**

```typescript
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
      </section>
    </main>
  );
}

export default App;
```

**Create `src/App.css`**

```css
.menu {
  padding: 5rem 0;
}
```

**Output**

![Output with Title](/filter-menu/screenshots/filter-op1.png)

---

**Create MenuItem Component**

Each menu item shows an image, title, price badge, and description.

**Create `src/components/MenuItem.tsx`**

```typescript
import "./MenuItem.css";

interface MenuItemProps {
  img: string;
  title: string;
  price: number;
  desc: string;
}

const MenuItem = ({ img, title, price, desc }: MenuItemProps) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
```

**Create `src/components/MenuItem.css`**

```css
.menu-item {
  background: var(--white);
  border-radius: var(--borderRadius);
  max-width: 25rem;
}

.menu-item .img {
  height: 15rem;
  border-top-right-radius: var(--borderRadius);
  border-top-left-radius: var(--borderRadius);
}

.item-info {
  padding: 1.5rem;
}

.item-info header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.item-info h5 {
  font-weight: 500;
}

.item-price {
  background: var(--primary-500);
  color: var(--white);
  padding: 0.25rem 0.5rem;
  letter-spacing: var(--letterSpacing);
  border-radius: var(--borderRadius);
}

.item-text {
  line-height: 2;
  color: var(--grey-500);
}
```

**Create Menu Component**

The Menu component renders a responsive grid of menu items that adapts from 1 to 3 columns based on screen size.

**Create `src/components/Menu.tsx`**

```typescript
import { type MenuItem as MenuItemType } from "../types/menu";
import MenuItem from "./MenuItem";
import "./Menu.css";

interface MenuProps {
  items: MenuItemType[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
```

**Create `src/components/Menu.css`**

```css
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  display: grid;
  gap: 2rem;
  justify-items: center;
}

@media screen and (min-width: 992px) {
  .section-center {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

@media screen and (min-width: 1170px) {
  .section-center {
    width: 95vw;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Update Main App Component to add Menu**

**Update `src/App.tsx`**

```ts
import Title from "./components/Title";
import items from "./data/menu";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
```

**Output**

![Output with Menus](/filter-menu/screenshots/filter-op2.png)

---

**Create Categories Component**

Categories renders filter buttons that trigger the filterItems function when clicked.

**Create `src/components/Categories.tsx`**

```typescript
import { type Category } from "../types/menu";
import "./Categories.css";

interface CategoriesProps {
  categories: Category[];
  filterItems: (category: Category) => void;
}

const Categories = ({ categories, filterItems }: CategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
```

**Create `src/components/Categories.css`**

```css
.btn-container {
  margin: 2rem 0 4rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
```

**Update Main App Component to Filter Buttons**

`allCategories`: Creates unique list of categories with `all` option

**Update `src/App.tsx`**

```ts
import Title from "./components/Title";
import items from "./data/menu";
import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={allCategories} filterItems={() => {}} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
```

**Output**

![Output with Filter Button](/filter-menu/screenshots/filter-op3.png)

---

**Update Main App Component to implement Filter feature**

- `menuItems` state: Tracks currently displayed items
- `filterItems`: Filters menu based on selected category

**Update `src/App.tsx`**

```typescript
import { useState } from "react";
import Title from "./components/Title";
import items from "./data/menu";
import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
```

![Output with Filter Functionality](/filter-menu/screenshots/filter-op4.png)

---

**Run the Project**

```bash
npm run dev
```

Visit `http://localhost:5173` to see your menu in action.

---

---

---

## Basic Project2: Carousel

Build a testimonial carousel/slider with automatic rotation, manual navigation, and smooth transitions using React and TypeScript.

**Create Vite Project**

```bash
npm create vite@latest carousel-slider -- --template react-ts
code carousel-slider
npm install react-icons
```

**Project Structure**

```text
carousel-slider/
├── src/
│   ├── components/
│   │   ├── Carousel.tsx
│   │   └── Carousel.css
│   ├── data/
│   │   └── people.ts
│   ├── types/
│   │   └── person.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
│   └── images/
│       ├── person-1.jpeg
│       ├── person-2.jpeg
│       ├── person-3.jpeg
│       └── person-4.jpeg
```

**Add Images to `public/images/`**

Place your menu person images (person-1.jpeg through person-4.jpeg) in the `public/images/` directory.

**Note:** You can use placeholder images from services like Unsplash or Lorem Picsum during development.

---

**Define Types**

**Create `src/types/person.ts`**

```typescript
export interface Person {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}
```

**Create Data File**

**Create `src/data/people.ts`**

```typescript
import { type Person } from "../types/person";

export const list: Person[] = [
  {
    id: 1,
    image: "/images/person-1.jpeg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image: "/images/person-2.jpeg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image: "/images/person-3.jpeg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image: "/images/person-4.jpeg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.",
  },
];
```

---

**Setup Global Styles**

**Create `src/index.css`**

```css
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

:root {
  /* Primary Colors - Purple Theme */
  --primary-100: #ede9fe;
  --primary-200: #ddd6fe;
  --primary-300: #c4b5fd;
  --primary-400: #a78bfa;
  --primary-500: #8b5cf6;
  --primary-600: #7c3aed;
  --primary-700: #6d28d9;
  --primary-800: #5b21b6;
  --primary-900: #4c1d95;

  /* Grey Scale */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;

  /* Semantic Colors */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  /* Typography */
  --small-text: 0.875rem;
  --extra-small-text: 0.7em;

  /* Layout */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;

  /* Shadows */
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  line-height: 1;
  color: var(--textColor);
}

p {
  margin: 0;
}

/* Typography */
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

.text {
  margin-bottom: 1.5rem;
  max-width: 40em;
}

small,
.text-small {
  font-size: var(--small-text);
}

/* Utility Classes */
a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}
```

---

**Create Carousel Component**

- `people`: Stores the array of testimonials
- `currentPerson`: Tracks which slide is currently visible (index)
- `prevSlide()`: Calculates previous index using modulo for circular navigation
- `nextSlide()`: Calculates next index using modulo for circular navigation

**Create `src/components/Carousel.tsx`**

```typescript
import { useEffect, useState } from "react";
import { list as people } from "../data/people";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Carousel.css";

const Carousel = () => {
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  // Re-run when currentPerson changes
  // Ensures the interval is reset after each slide change
  // Prevents memory leaks by cleaning up old intervals
  // User clicks won't interfere with auto-play timing

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
```

**Animation Concept**

- `transform`: Positions each slide horizontally
  - Current slide: `translateX(0%)` (visible)
  - Next slide: `translateX(100%)` (off-screen right)
  - Previous slide: `translateX(-100%)` (off-screen left)
- `opacity`: Fades out non-active slides
- `visibility`: Removes hidden slides from accessibility tree

**Create `src/components/Carousel.css`**

```css
.slider-container {
  margin: 0 auto;
  margin-top: 10rem;
  width: 80vw;
  max-width: 800px;
  position: relative;
  height: 450px;
  overflow: hidden;
}

.slide {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: var(--transition);
}

.person-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: 4px solid var(--primary-200);
  box-shadow: var(--shadow-3);
}

.name {
  text-transform: uppercase;
  color: var(--primary-500);
  margin-bottom: 0.75rem;
}

.title {
  text-transform: capitalize;
  color: var(--grey-700);
  margin-bottom: 0.75rem;
}

.text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--grey-500);
}

.icon {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--primary-500);
}

.prev,
.next {
  position: absolute;
  top: 200px;
  background: var(--grey-500);
  color: var(--white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  border-radius: var(--borderRadius);
  cursor: pointer;
  transition: var(--transition);
}

.prev:hover,
.next:hover {
  background: var(--primary-500);
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

@media screen and (min-width: 800px) {
  .text {
    max-width: 45em;
  }

  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
```

**Create App Component**

**Create `src/App.tsx`**

```typescript
import Carousel from "./components/Carousel";
import "./App.css";

const App = () => {
  return (
    <main>
      <Carousel />
    </main>
  );
};

export default App;
```

**Create `src/App.css`**

```css
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

![Output with Filter Functionality](/carousel-slider/public/screenshots/slider.png)

---

**Run the Project**

```bash
npm run dev
```

Visit `http://localhost:5173` to see your Carousel in action.

---

---

---

## Basic Project3: Grocery Bud

Build a Gorcery list app.

**Create Vite Project**

```bash
npm create vite@latest grocery-bud -- --template react-ts
code grocery-bud
```

**Project Structure**

```text
grocery-bud/
├── src/
│   ├── components/
│   │   ├── Form.tsx
│   │   ├── Form.css
│   │   ├── Items.tsx
│   │   ├── Items.css
│   │   ├── SingleItem.tsx
│   │   └── SingleItem.css
│   ├── data/
│   │   └── groceryItems.ts
│   ├── types/
│   │   └── groceryItem.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
```

---

**Define Types**

**Create `src/types/groceryItem.ts`**

```typescript
export interface GroceryItem {
  id: string;
  name: string;
  completed: boolean;
}
```

---

**Create Data File**

**Create `src/data/groceryItems.ts`**

```typescript
import { type GroceryItem } from "../types/groceryItem";

export const groceryItems: GroceryItem[] = [
  { id: "1", name: "milk", completed: true },
  { id: "2", name: "bread", completed: true },
  { id: "3", name: "eggs", completed: false },
  { id: "4", name: "butter", completed: false },
];
```

---

**Setup Global Styles**

**Create `src/index.css`**

```css
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
} /*16px*/

:root {
  /* colors */
  --primary-100: #e2e0ff;
  --primary-200: #a5f3fc;
  --primary-300: #67e8f9;
  --primary-400: #22d3ee;
  --primary-500: #06b6d4;
  --primary-600: #0891b2;
  --primary-700: #0e7490;
  --primary-800: #155e75;
  --primary-900: #164e63;

  /* grey */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  --small-text: 0.875rem;
  --extra-small-text: 0.7em;
  /* rest of the vars */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  line-height: 1;
  color: var(--textColor);
}
p {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

.text {
  margin-bottom: 1.5rem;
  max-width: 40em;
}

small,
.text-small {
  font-size: var(--small-text);
}

a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}
/* buttons */

.btn {
  cursor: pointer;
  color: var(--white);
  background: var(--primary-500);
  border: transparent;
  border-radius: var(--borderRadius);
  letter-spacing: var(--letterSpacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
}
.btn:hover {
  background: var(--primary-700);
  box-shadow: var(--shadow-3);
}

.form {
  width: 90vw;
  max-width: var(--fixed-width);
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
}
.form-label {
  display: block;
  font-size: var(--small-text);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}
.form-input,
.form-textarea {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--borderRadius);
  background: var(--backgroundColor);
  border: 1px solid var(--grey-200);
}

.form-textarea {
  height: 7rem;
}
::placeholder {
  font-family: inherit;
  color: var(--grey-400);
}
```

---

**Create SingleItem Component**

**Install react-icons**

```bash
npm install react-icons
```

**Create `src/components/SingleItem.tsx`**

```typescript
import { type GroceryItem } from "../types/groceryItem";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

interface SingleItemProps {
  item: GroceryItem;
}

const SingleItem = ({ item }: SingleItemProps) => {
  return (
    <div className="single-item">
      <input type="checkbox" checked={item.completed} onChange={() => null} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>

      <button className="btn icon-btn" type="button" onClick={() => null}>
        <FiEdit size={18} />
      </button>

      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => null}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;
```

**Create `src/components/SingleItem.css`**

```css
.single-item {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  column-gap: 1rem;
  align-items: center;
}
.single-item p {
  letter-spacing: var(--letterSpacing);
}

.remove-btn {
  padding: 0.15rem 0.25rem;
  font-size: 0.75rem;
  background: var(--black);
}
```

---

**Create Items Component**

**Create `src/components/Items.tsx`**

```typescript
import SingleItem from "./SingleItem";
import { type GroceryItem } from "../types/groceryItem";
import "./Items.css";

interface ItemsProps {
  items: GroceryItem[];
}

const Items = ({ items }: ItemsProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
```

**Create `src/components/Items.css`**

```css
.items {
  margin-top: 2rem;
  display: grid;
  row-gap: 1rem;
}
```

---

**Update Main App Component**

**Update `src/App.tsx`**

```typescript
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import "./App.css";

const App = () => {
  return (
    <section className="section-center">
      <Items items={groceryItems} />
    </section>
  );
};

export default App;
```

**Create `src/App.css`**

```css
.section-center {
  width: 90vw;
  margin: 0 auto;
  margin-top: 8rem;
  max-width: 30rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  padding: 2rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
}
.section-center:hover {
  box-shadow: var(--shadow-3);
}
```

**Output**

![Grocery List Output](/grocery-bud/screenshots/grocery-op1.png)

---

**ADD Edit Completed Feature**

**Update `src/App.tsx`**

```typescript
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { useState } from "react";
import { type GroceryItem } from "./types/groceryItem";
import "./App.css";

const App = () => {
  const [items, setItems] = useState<GroceryItem[]>(groceryItems);

  const editCompleted = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <section className="section-center">
      <Items items={items} editCompleted={editCompleted} />
    </section>
  );
};

export default App;
```

---

**Update `src/components/Items.tsx`**

```typescript
import SingleItem from "./SingleItem";
import { type GroceryItem } from "../types/groceryItem";
import "./Items.css";

interface ItemsProps {
  items: GroceryItem[];
  editCompleted: (itemId: string) => void;
}

const Items = ({ items, editCompleted }: ItemsProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem key={item.id} item={item} editCompleted={editCompleted} />
        );
      })}
    </div>
  );
};

export default Items;
```

---

**Update `src/components/SingleItem.tsx`**

```typescript
// ...
interface SingleItemProps {
  item: GroceryItem;
  editCompleted: (itemId: string) => void;
}

const SingleItem = ({ item, editCompleted }: SingleItemProps) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />
      // ....
    </div>
  );
};

export default SingleItem;
```

**Output**

![Grocery List Output with Edit](/grocery-bud/screenshots/grocery-op2.png)

---

**ADD Delete Feature**

**Install react-toastify**

```bash
npm install react-toastify
```

**Update `src/App.tsx`**

```typescript
// ...
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [items, setItems] = useState<GroceryItem[]>(groceryItems);

  // ...

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />
    </section>
  );
};

export default App;
```

**Update `src/App.css`**

```css
/* ... */
.Toastify__toast {
  text-transform: capitalize;
}
```

---

**Update `src/components/Items.tsx`**

```typescript
import SingleItem from "./SingleItem";
import { type GroceryItem } from "../types/groceryItem";
import "./Items.css";

interface ItemsProps {
  items: GroceryItem[];
  editCompleted: (itemId: string) => void;
  removeItem: (itemId: string) => void;
}

const Items = ({ items, editCompleted, removeItem }: ItemsProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            editCompleted={editCompleted}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
```

---

**Update `src/components/SingleItem.tsx`**

```typescript
// ...
interface SingleItemProps {
  item: GroceryItem;
  editCompleted: (itemId: string) => void;
  removeItem: (itemId: string) => void;
}

const SingleItem = ({ item, editCompleted, removeItem }: SingleItemProps) => {
  return (
    <div className="single-item">
      // ....
      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;
```

**Output**

![Grocery List Output with Edit](/grocery-bud/screenshots/grocery-op3.png)

---

**Create Form Component to add new grocery item**

**Create `src/components/Form.tsx`**

```typescript
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import "./Form.css";

interface FormProps {
  addItem: (itemName: string) => void;
}

const Form = ({ addItem }: FormProps) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          placeholder="e.g. eggs"
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
```

**Create `src/components/Form.css`**

```css
form h4 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.form-control {
  display: grid;
  grid-template-columns: 1fr 100px;
}
.form-input {
  border-radius: 0;
  border-top-left-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);
}
.form-control .btn {
  border-radius: 0;
  border-top-right-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);
}
```

---

**Update Main App Component to add Grocery**

**Update `src/App.tsx`**

```ts
//...
import { nanoid } from "nanoid";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState<GroceryItem[]>(groceryItems);

  const addItem = (itemName: string) => {
    const newItem: GroceryItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success("grocery item added");
  };

  //...

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />
    </section>
  );
};

export default App;
```

**Output**

![Output with Menus](/grocery-bud/screenshots/grocery-op4.png)

---

**ADD Edit Grocery Name Feature**

**Update `src/App.tsx`**

```typescript
//...
import { useEffect, useRef, useState } from "react";
//....

const App = () => {
  const [items, setItems] = useState<GroceryItem[]>(groceryItems);
  const [editId, setEditId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  // ...

  const updateItemName = (newName: string) => {
    const newItems = items.map((item) => {
      if (item.id === editId) {
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(newItems);
    setEditId(null);
    toast.success("item updated");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form
        addItem={addItem}
        updateItemName={updateItemName}
        editItemId={editId}
        itemToEdit={items.find((item) => item.id === editId)}
        inputRef={inputRef}
      />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
        setEditId={setEditId}
      />
    </section>
  );
};

export default App;
```

**Update `src/components/Items.tsx`**

```typescript
import SingleItem from "./SingleItem";
import { type GroceryItem } from "../types/groceryItem";
import "./Items.css";

interface ItemsProps {
  items: GroceryItem[];
  editCompleted: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  setEditId: (itemId: string) => void;
}

const Items = ({ items, editCompleted, removeItem, setEditId }: ItemsProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            editCompleted={editCompleted}
            removeItem={removeItem}
            setEditId={setEditId}
          />
        );
      })}
    </div>
  );
};

export default Items;
```

**Update `src/components/SingleItem.tsx`**

```typescript
// ....
interface SingleItemProps {
  item: GroceryItem;
  editCompleted: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  setEditId: (itemId: string) => void;
}

const SingleItem = ({
  item,
  editCompleted,
  removeItem,
  setEditId,
}: SingleItemProps) => {
  return (
    <div className="single-item">
      // ....
      <button
        className="btn icon-btn"
        type="button"
        onClick={() => setEditId(item.id)}
      >
        <FiEdit size={18} />
      </button>
      // ....
    </div>
  );
};

export default SingleItem;
```

**Update `src/components/Form.tsx`**

```typescript
import { useState, type FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { type GroceryItem } from "../types/groceryItem";
import "./Form.css";

interface FormProps {
  addItem: (itemName: string) => void;
  editItemId: string | null;
  updateItemName: (itemName: string) => void;
  itemToEdit?: GroceryItem;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const Form = ({
  addItem,
  editItemId,
  updateItemName,
  itemToEdit,
  inputRef,
}: FormProps) => {
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setNewItemName(itemToEdit.name);
    } else {
      setNewItemName("");
    }
  }, [itemToEdit]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    if (editItemId) {
      updateItemName(newItemName);
    } else {
      addItem(newItemName);
    }
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          ref={inputRef}
          placeholder="e.g. eggs"
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          {editItemId ? "edit item" : "add item"}
        </button>
      </div>
    </form>
  );
};

export default Form;
```

**Output**

![Grocery List Output with Edit Name](/grocery-bud/screenshots/grocery-op5.png)

---

**Save Grocery to local storage**

**Update `src/App.tsx`**

```ts
// import { groceryItems } from "./data/groceryItems";
// ....
const getLocalStorage = () => {
  let list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list) as GroceryItem[];
  }
  return [];
};

const setLocalStorage = (items: GroceryItem[]) => {
  localStorage.setItem("grocery-list", JSON.stringify(items));
};

const initialList = getLocalStorage();

const App = () => {
  const [items, setItems] = useState<GroceryItem[]>(initialList);
  // ....

  const addItem = (itemName: string) => {
    // ....
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const editCompleted = (itemId: string) => {
    // ...
    setLocalStorage(newItems);
  };

  const removeItem = (itemId: string) => {
    // ....
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const updateItemName = (itemEditName: string) => {
    // ....
    setLocalStorage(newItems);
    toast.success("item updated");
  };
};
```

---

**Run the Project**

```bash
npm run dev
```

Visit `http://localhost:5173` to see your Grocery bud in action.
