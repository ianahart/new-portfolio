---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'innerHTML VS innerText VS textContent'
pubDate: 2023-11-29
description: 'There are many ways to get or set an element in JavaScript.'
author: 'Ian Hart'
image:
  url: 'https://res.cloudinary.com/dap5r6vfu/image/upload/v1701276527/post-2_ro49r8.png'
  alt: 'Javascript'
---

# innerHTML VS innerText VS textContent

<br />
<br />

In JavaScript, there are a few different ways to manipulate or read text content of a node
within the Document Object Model('DOM'). In this post, I'll break down the subtle differences
between **innerHTML**, **innerText**, and **textContent**.
<br />
<br />

The first property we'll look at, **innerText** shows the rendered inner text content of a node.
The next properties **textContent** and **innerHTML**, both return the text content of all
children of a parent node, but the actual text content they return differ. In some cases,
these three properties will all return the same value. One would think they could be used interchangeably
without consequence. This can cause confusion if the user does not have a lot of experience in JavaScript.
<br />
<br />

### innerHTML

Using **innerHTML** allows you to see what's in the HTML markup contained within a string.
This includes elements like spacing, line breaks, formatting, and inner HTML tags.
<br />
<br />

### innerText

**innerText** returns just the text content of the element and all its children. This does
NOT include CSS, hidden text spacing, and tags. **script** and **style** tags are an exception.
<br />
<br />

### textContent

The **textContent** property returns the text content of the element and all descendaces, WITH
spacing, and CSS hidden text, but without any tags.
<br />
<br />

Let's start with some HTML code that we will use to to demonstrate how each
property works.

```html
<div id="container">
  <p>this is a <strong>strong</strong> element</p>
</div>
```

<br />

Above, we're including some HTML to make make the word **strong** bold.
The browser will render this like:
<br />
<br />

this is a **strong** element
<br />
<br />

Now let's store our container **div** in a variable called **getResult**.

```js
const getResult = document.getElementById('container');
```

<br />
<br />

### How innerHTML Works

```js
getResult.innerHTML;
// -> <p>this is a      <strong>strong</strong>element</p>
```

<br />
<br />

In the above codeblock, you see that `getResult.innerHTML` returns the **p** tag
with the text content inside as well as a **strong** tag with it's own text content.
Also notice that the spaces are preserved, because **innerHTML** returns spacing and line breaks as well as the HTML markup.
<br/>
<br/>
You should use **innerHTML** when you want to see the HTML markup and what the parent element contains.
When using **innerHTML** as a setter, you'll want to use it when you need to change the HTML
markup of an element or when you need to append HTML to an element.
<br />
<br/>

### How innerText Works

```js
getResult.innerText;
// -> this is a strong element
```

<br />
<br />

**innerText** returns the **paragraph** string inside of our **div container**. It
will ignore all formatting, line breaks, spacing, and CSS. You should use **innerText**
when you only need to see what's in the element without the formatting.
When using **innerText** to read a value, it returns the content of the tag as plain text.
When setting the **innerText** of an element, it will replace the contents of the tag with the new plain text string.

<br/>
<br/>

### How textContent Works

```js
getResult.textContent;
// -> this is a      strong element
```

<br />
<br />

**textContent** returns every element or descendant of a specific node. This includes
spacing and **CSS** hidden text, but does not return HTML tags. Unlike **innerText** that only returns
visible text contained in a node, **textContent** returns the full text. **textContent** is also less performance-heavy than **innerText**
because it doesn't require layout information to return the result.
<br />
<br />

Although these three properties seem similar they all have different use cases. I hope this information
has helped demistify **innerHTML**, **innerText**, and **textContent**.
