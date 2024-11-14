---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Custom Hooks in React'
pubDate: 2024-11-24
description: 'Custom Hooks are a powerful feature of React'
author: 'Ian Hart'
image:
  url: 'https://res.cloudinary.com/dap5r6vfu/image/upload/v1731599124/custom-hook_a0xwbt.jpg'
  alt: 'hanging hooks on tables'
---

Custom Hooks are a powerful feature of React that offer a powerful mechanism to extract and reuse stateful logic
across different components. this ensures you are writing clean code and it also reduces the time to write the code.
It also reduces rendering speed of the code as a custom hook does not need to be rerendered again and again while rendering the components.

<br />

## What are custom hooks?

Custom Hooks are functions that start with the word `use` and can return any value, including other hooks.
They can be used to encapsulate logic that you need to use across multiple components.

<br />

## Lets build a custom hook

Inside your terminal run the command

```markdown
npm create vite@latest
```

During the installation you want to select **React** and for the language **JavaScript**.
Go into the newly created folder using **cd** and run

```markdown
npm install
```

We are also going to use a third party library called **axios**. Axios is a popular, open-source npm package
that allows developers to make HTTP requests.

```markdown
npm install axios
```

<br />

## Creating the `useFetch` hook

Create a new file named `useFetch.js` in the `src/hooks` directory. This hook will take in a specified URL and handle the fetching logic.

`src/hooks/useFetch.js`

```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };

```

<br />

Lets explain what is happening here: As you can see we have three pieces of state, `data`, `loading`, and `error`.
`data` stores the fetched data. `loading` tracks the loading state. `error` stores any error message that should arise.

<br />

We are using the `useEffect` built-in React hook. Inside the `useEffect` hook we are executing the fetchData function
anytime the `url` changes. We are using `axios` to send a GET request that updates the `data` piece of state accordingly.

<br />

Also inside the `useEffect` in the `catch block` we are capturing any errors that may occur and updating that `error` peice of state.
The `finally` block ensures that the `loading` state is set to false after the request completes.

<br />

## Using `useFetch` inside a component

Now, let's create a component that uses the `useFetch` hook to fetch and display todos.

`src/components/TodoList.jsx`

```jsx
import { useFetch } from '../hooks/useFetch';

const TodoList = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const { data: todos, loading, error } = useFetch(url);

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.data.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
```

First off, we have to import the `useFetch` hook into our **TodoList** component.
We are using jsonplaceholder as our REST API. It is a free fake REST API that comes with different resources we can access
like posts, comments, and todos.

<br />

Inside our **TodoList** component we have an endpoint that will give us access to a list of todos.
Below that is where we use or newly created `useFetch` hook. As you can see it takes in the url as an argument and returns to us
the three pieces of state that were defined in the `useFetch` hook. Because we returned them inside an object in the hook
we are using destructuring to get them into their own variables outside the object. We are also renaming data to `todos`.

```jsx
const url = 'https://jsonplaceholder.typicode.com/todos';
const { data: todos, loading, error } = useFetch(url);
```

<br />

Now we check to see if request is still processing by checking to see if loading is `true`. If it is still loading
we return

```jsx
if (loading) {
  return <p>Loading todos...</p>;
}
```

<br/>

If there was any sort of error during the request we then return

```jsx
if (error) {
  return <p>Error: {error}</p>;
}
```

<br />

If those two if statements do not trigger, then we return and render out the todos as an unordered list.

```jsx
return (
  <div>
    <h1>TodoList</h1>
    <ul>
      {todos.data.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  </div>
);
```

<br />

Now that we have our **TodoList** component finished, we need to use it.
Open up `App.jsx` and nest the **TodoList** component inside the jsx like so.

```jsx
import { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return <TodoList />;
};

export default App;
```

<br />

## Benefits of using custom hooks

There are many benefits to using custom hooks in React, including:

<br />

- **Performance**: Custom hooks can improve the performance of your application by avoiding unecessary re-renders.
- **Resuability**: Custom hooks can be reused in mulitple components, which can save you time and effort.
- **Maintainability**: They can make your code more organized and maintainable by encapsulating common functionality into resuable peices of logic.
- **Testability**: Because custom hooks are pure functions they can be tested more easily than traditional components.

<br />

## Conclusion

Creating a custom React hook like `useFetch` not only helps streamline your code by abstracting
repetitive logic, but also enhances code reusuability and readability across your application.
With `useFetch`, you now have a versatile tool to easily handle data fetching, manage loading states, and handle errors.

<br />

By mastering the creation of custom hooks, you unlock a higher level of flexibility in React, making
it easier to tackle common challenges while keeping your components focused on their primary purpose: rendering the UI.

Happy Coding 🚀
