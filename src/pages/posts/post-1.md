---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'What Are Functions And How To Use Them'
pubDate: 2023-11-28
description: 'Functions are one of the building blocks of JavaScript programming for creating web applications.'
author: 'Ian Hart'
image:
  url: 'https://res.cloudinary.com/dap5r6vfu/image/upload/v1701209435/post-1_orlpss.jpg'
  alt: 'Vue Code'
---

# What Are Functions And How To Use Them

<br />
<br />

## What Are Functions?

In this article I will be explaining functions and how to use them in
**JavaScript**. **JavaScript** is a high level, interpreted language used on the client side,
meaning it runs in the user's browser. You can use it create all sorts of applications and software,
including web and mobile applications.
<br />
<br />

## Function Syntax

Simply put, a function is a block of code that performs a specific task.
Javascript functions are basically used to enclose logic, making the code in the
function more resuable and modular, leading to more easier to understand code.
<br />
<br />
The syntax for creating a function in JavaScript is quite simple.
Functions can take input in in the form of paramters and return an output.
<br />
<br />

Functions help you organize and structure your code. As mentioned above functions
are resuable and this helps when you are working on a larger codebase.
<br />
<br />

## How To Write a Function in JavaScript

To create a function, You start by using the keyword **function** followed by a set of **parentheses**.
Inside the parentheses you defined what are called parameters which are optional.
<br />
<br />
Next are a set of **curly braces**.
Inisde the curly braces you write your logic or the steps to be preformed for your function that will be excuted when called
<br />
<br />
Below is an example of a basic function that takes in two numbers and returns their sum.

```js
function addNums(a, b) {
  return a + b;
}

addNums(1, 2);
```

The function above, named **"addNums"**, takes in two parameters, **a** and **b**.
parameter **a** is equal to **1** and parameter **b** is equal to **2**.
inside the body of the function, we return **a + b** which is essentially **1 + 2**.
the last thing that happens is calling the function. we declare the name of the function
followed by two parentheses with two arguments inside that we want to get the sum of.
<br />
<br />

## How to Declare a Function In JavaScript

You can also define functions using **function expressions** or **arrow functions**.
<br />
<br />
The arrow function syntax is a shorthand version and more concise way to write a function.
Here is the same function as above, but written as an arrow function

```js
// shorthand version
const addNums = (a, b) => a + b;
// regular version
const addNums = (a, b) => {
  return a + b;
};

addNums(1, 2);
```

In the example above, the function is assigned to the variable **addNums**.
The arrow **=>** is used to define the function. Following the arrow is the function body.
If the function body contains only one expression you can omit the curly braces and the return statement.
<br />
<br />

## Using Default Parameters

JavaScript functions also have a feature called **default parameters**. This allows you
set default values for parameters incase they are not passed in as arguments when the function is called.
<br />
<br />
This is helpful in scenarios when you are not sure that an argument will be passed to a function.
You can set a default value for that parameter so you will not get an error.
Below is an example

```js
const greetUser = (name, timeOfDay = 'Morning') => {
  return `Good ${timeOfDay}, ${name}`;
};

greetUser('Ian', 'Afternoon'); // Good Afternoon, Ian
greetUser('Ian'); // Good Morning, Ian
```

In this example, **greetUser()** takes in two parameters, **name** and **timeOfDay**.
You will notice **timeOfDay** is assigned a default value of **"Morning"**.
If **greetUser** is called without a **timeOfDay** argument, the function will use the
default value assigned to **timeOfDay**.
<br />
<br />

## Conclusion

In this article we went over the basics of functions in JavaScript, including how to
define and call them.
<br />
<br />
Having a solid understanding of functions can lead to more resuable and maintainable
code.

If you want to dive deeper into functions and how they work, I recommend looking
at the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) to read more about them.
