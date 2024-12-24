---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Using Regular Expressions To Match A Hexadecimal Value'
pubDate: 2024-04-20
description: 'Have you ever wondered how Regular Expressions (Regex) work?'
author: 'Ian Hart'
image:
  url: 'https://res.cloudinary.com/dap5r6vfu/image/upload/v1713638164/regex-tutorial_jg27gy.jpg'
  alt: 'Javascript'
---

Have you ever wondered how Regular Expressions (Regex) work? Well in this tutorial we'll be covering the regex used to match a hexadecimal value. A hexadecimal value is often referred to as a hex value. It is a six-character alphanumeric code used to specify colors in web design and web development. They are mainly used in HTML and CSS. Now that we have an understanding of what a hex value is, let's dive into the tutorial and digest the hex value regex and all it's individual parts.

## Summary

The text with the oddly arranged characters below is an example of a regex that is used to match a hex value.

```
/^#?([a-f0-9]{6}|[a-f0-9]{3})$/
```

Regular Expressions (Regex) is a sequence of characters that specifies a pattern in any given piece of text (string).
Regex can be used to extract, search, validate, or transform strings of text based on specified patterns. This pattern can be as simple as searching for a period(.) in a text string or as complex as validating an email address. In web design and web development, hex values are used to signify colors. Hex values are strings that are 3-6 characters long. The characters are made up of values from numbers that are `0-9` and letters `a-f` that when put together create a unique color. This regex rigorously checks for valid hex values in various formats, allowing for both shorthand and full-length codes.

## Table of Contents

- [Summary](#summary)
- [Table of Contents](#table-of-contents)
- [Regex Components](#regex-components)
  - [Anchors](#anchors)
  - [Quantifiers](#quantifiers)
  - [Grouping Constructs](#grouping-constructs)
  - [Bracket Expressions](#bracket-expressions)
  - [Character Classes](#character-classes)
  - [The OR Operator](#the-or-operator)
  - [References](#references)
- [Author](#author)

## Regex Components

### Anchors

The `^` character asserts the start of a string. It ensures that the hex value starts from the very beginning of the string,
preventing any characters before it. The `$` character at the end of the regex asserts the end of a string. These two characters at the start and end of the regex are important, they certify that the entire string matches the pattern of the regex.

### Quantifiers

Quantifiers in regex are used to specify the number of times a character or group of characters should be matched. In this case we are using curly brackets `{}` to match the exact number of characters the test string should contain. Hex values can be `3-6` characters in length. In the hex value regex we use `{3}` and `{6}` that corresponds to the number of characters in this bracket expression `[a-f0-9]` (we'll cover bracket expressions later). The regex will calculate if the string under testing is a hex value that contains 3 or 6 of the characters `a-f` and `0-9`.

### Grouping Constructs

Our hex value regex uses a capturing group construct. it is denoted by parentheses `()`. Inside the parentheses is the subexpression. If we didn't have our subexpression Inside the capturing group the alternation would only apply to characters directly surrounding it. In our hex value capturing group there are two subexpressions separated by the `|` OR operator. `[a-f0-9]{3}` matches the shorthand hex value and `[a-f0-9]{6}` matches the full-length hex value. The capturing group's purpose is to capture and remember the text that was matched by its subexpression. It ensures that the OR operator applies to the entire subpattern.

### Bracket Expressions

Bracket expressions declare a specific range of characters that the regular expression should match. In the hex value regex that we are disecting, the bracket expression `[a-f0-9]` is used to declare the range of characters allowed. `[a-f0-9]` includes lowercase letters from `a-f` and numbers `0-9`.

### Character Classes

Character classes, also known as character sets or character ranges, are a fundemental concept in regex. They allow you to specify a range of characters that you want to match within a certain part of the regex pattern. In our case we are using `[a-f0-9]`. This set specifies that it will only accept or match lowercase letters from `a-f` and digits `0-9`.

### The OR Operator

The OR operator does exactly what you think it does. The OR operator is denoted by a `|` pipe character. In our case in the hex value regex it is saying to look for a pattern that matches `[a-f0-9]{3}` or `{a-f0-9}{6}`. So it needs to match a string that consists of a character range of `a-f`, `0-9`, and the length of must be `3` OR `6` characters in length.

### References

- [Regex Learn](https://regexlearn.com/learn/regex101)
- [Regex101](https://regex101.com/)
- [PHPrex](https://phphub.net/regex/)

## Author

I am an aspiring web developer and am located in New Hampshire. If you want to check out some of my projects you can visit my [Github](https://github.com/ianahart)
