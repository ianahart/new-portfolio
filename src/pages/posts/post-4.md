---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Getting Started with React'
pubDate: 2024-08-03
description: 'React was developed by Facebook, it allows developer to create large web applications.'
author: 'Ian Hart'
image:
  url: 'https://res.cloudinary.com/dap5r6vfu/image/upload/v1722699895/getting_started_with_react_ecmcse.jpg'
  alt: 'purple space and stars'
---

## Getting Started with React

React is one of the most popular JavaScript libraries for building user interfaces.
It was developed by Facebook, it allows developers to create large web applications that can update and render efficiently in response to data changes.
If you're new to React, this guide will help you get started with setting up your first React project and creating your first component using **Vite**.

<br />

### What is React and Why Use It?

React simplifies the process of building complex and interactive UIs.

- **Component-Based**: React encourages building resuable components, which makes your code easier to maintain and scale.
- **Virtual DOM**: React uses a virtual DOM to optimize rendering, making updates faster and more efficient. It only updates part of the component where data has changed.
- **JSX**: React uses JSX, a syntax extension that allows you to write HTML-like code within JavaScript, making it easier to visualize the structure of your UI.
- **Community and Ecosystem**: And lastly, React has a mature and rich ecosystem of tools, libraries, support, and a large community.

<br />

### Setting Up Your React Project with Vite

To get started with React, we first have to setup a development environment. We are going to use Vite,
a modern build tool that offers a fast and smooth setup for React projects.

<br />

#### Prerequisites

Before you begin, make sure you have **Node.js** and **npm** (Node Package Manager) installed on your machine.
You can download them from [nodejs.org](https://www.nodejs.org)

<br />

### (Step 1) Create a New React App with Vite

Open your terminal and run the following command to generate a new React project using Vite:

```bash
 npm create vite@latest my-first-react-app --template react
```

Lets breakdown this command into smaller pieces. the `npm create vite@latest` command initializes a new project using the latest version of Vite.
The `my-first-react-app` is the name of your project directory. The `--template react` flag says that we want to use
the react template provided by Vite. (There are other templates for other frameworks)

<br />

#### Why Vite?

Vite provides a faster and more streamlined approach to development compared to traditional build tools like **Create Reat App** which is no longed recommended to use.
It leverages native ES modules and offers an instant server start and fast HMR (Hot Module Replacement).

<br />

### (Step 2) Navigate to Your Project Directory

Move into the newly created project by:

```bash
cd my-first-react-app
```

The **`cd`** command changes the current directory you're in. so you're moving into your new project where all your project files are stored.

<br />

### (Step 3) Install Dependencies

Install the project's dependencies by running the command:

```bash
npm install
```

The **`npm install`** command reads the **package.json** file and installs all the dependencies
listed under **dependencies** and **devDependencies**. Running this command is essential for your project to run correctly.
Some of dependencies installed include **React**, **ReactDOM**, **Vite** and an array of development tools.

<br />

### (Step 4) Start the Development Server

To start the development server run the command:

```bash
npm run dev
```

The **`npm run dev`** command runs the development script located in your **`package.json`** file. Vite starts a local development server, that by default, will run on **`http://localhost:5173`**.

<br />

### Creating Your First React Component

Now that your project is setup, it's time to create your first React component. Components are the building blocks of a React Application.
Each component represents a part of the UI. For Example you could have a **Navbar** component and inside the **Navbar** component you could have nested child links represented by a resuable **Link** Component. (More on this later)

<br />

### (Step 1) Create a new Component File

Navigate to the root of your directory and located the **`src`** directory. Inside,
create a new file called **TodoList.jsx**

```jsx
// src/TodoList.jsx
import React from 'react';

const TodoList = () => {
  return (
    <ul>
      <li>Go to gym</li>
      <li>Grocery shop</li>
      <li>Take dog for a walk</li>
    </ul>
  );
};

export default TodoList;
```

### Explanation

<br />

- **Import React**: the **`import React from 'react'`** statement isn't necessary in current versions, but to maintain backwards compatibility with older versions it is still good practice to bring **React** in.
- **Component Definition**: **`const TodoList = () => {...}`** defines a functional component named **TodoList**. In older versions of React components were class based.
- **JSX**: the **`return`** statement includes the JSX that will be visible in the browser when the component is rendered.
- **Export**: the **`export default TodoList`** statement makes this component available for import in other files.

<br />

### (Step 2) Important and Use the Component

Open the **`App.jsx`** file in the **`src`** directory and import your new component.

```jsx
// src/App.jsx
const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};
export default App;
```

<br />

Lets break this down:
<br />

We first import the **TodoList** component so we can use it in our **App.jsx** file.
**`<TodoList />`** is a JSX tag that renders the **TodoList** component inside the **`App component`**.
The **App** Component is the root component of your application. it renders the **TodoList** component inside a **div** with the class **App**.
The reason why we use **className** instead of **class** like in HTML is that **class** is a reserved keyword in JavaScript which is what JSX is.

### Creating a Child Component

Lets create a reusable **TodoListItem** component for the todos in our **TodoList** component.
For the sake of simplicity I will include both The **TodoList** and the **TodoListItem** in the same code block.

```jsx
// src/TodoListItem.jsx

import React from 'react';

const TodoListItem = (props) => {
  return <li>{props.text}</li>;
};
export default TodoListItem;

<!----------------------------->

// src/TodoList.jsx
import React from 'react';

const TodoList = () => {

const todoListItems = [
{id: 1, text:'Go to gym'},
{id: 2, text:'Grocery Shop'},
{id: 3, text:'Take dog for a walk'},
];

return (
    <ul>
        {todoListItems.map((todoListItem) => {
        return (
            <TodoListItem key={todoListItem.id} text={todoListItem.text} />
        )
        })}
    </ul>
  );
};

export default TodoList;

```

<br />

### Explanation

<br/>

Okay, there is a lot going on here. Lets start off with the **`TodoListItem`** component.
We setup our functional component and we have a mysterious parameter called props. All components in React
get an object passed in as a paremeter called props. Props is how you pass down data from your parent component to a child component.
Whenever the data inside the parent component is updated and you have passed it down as props to a child component, when the data changes the child component will rerender to reflect the new data.
This data that is changing is called **state**. We will cover **state** in another tutorial. For now, we are just using a static array of objects to hold our todo list items.
<br />

The next part we will cover is the **`<li>{props.text}</li>`**. the curly brackets denote that we are embedding a JavaScript expression within our HTML-like syntax.
This allows you to dynamically render content and use JavaScript logic within your JSX code.
Now to explain the **`props.text`** where did the **text** come from? Well if we jump down to the **TodoList component**
you will see **`<TodoListItem key={todoListItem.id} text={todoListItem.text} />`**. We are passing down off of a single todo list item object, the property **text** and assigning it to **text**.
You can call the **text** on the left hand side of the **`=`** anything you want. For example, you could call it **data** and then you would access the data prop in the **TodoListItem** component as **props.data**.
The **key** prop is used to give the child component a unique identifier so react can keep track of it in the UI when state changes, it knows which component to update.
<br />

The last part of the newly updated **TodoList** component to discuss in the **map** function embedded in the JSX.

```jsx
// src/TodoList.jsx
import React from 'react';

const TodoList = () => {
  const todoListItems = [
    { id: 1, text: 'Go to gym' },
    { id: 2, text: 'Grocery Shop' },
    { id: 3, text: 'Take dog for a walk' },
  ];

  return (
    <ul>
      {todoListItems.map((todoListItem) => {
        return <TodoListItem key={todoListItem.id} text={todoListItem.text} />;
      })}
    </ul>
  );
};

export default TodoList;
```

Lets break it down. The **TodoList** is rendering an unordered list where each list item is generated by mapping
over an array called **todoListItems**. Each item in the array is used to create a **TodoListItem** component which is rendered as a child of the **`<ul>`**.
We are passing two **props** to the **TodoListItem**, the **key** which react uses internally, and the **text** prop which we use for the **`<li>`** text in our **TodoListItem** component.
Below is what will be rendered in the browser.

```jsx
<ul>
  <li>Go to gym</li>
  <li>Grocery Shop</li>
  <li>Take dog for walk</li>
</ul>
```

### Conclusion

Congratulations! You've set up your first React project using Vite.
React's component-based architecture makes it easy to build and maintain complex user interfaces.
As you become more familiar with React, you'll discover more advanced features and patterns that will help you create even more dynamic and interactive web applications.

<br />

### Next Steps

- [State](https://react.dev/learn/managing-state)
- [Hooks](https://react.dev/reference/react/hooks)
