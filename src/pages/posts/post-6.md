---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'ArrayList and LinkedList in Java'
pubDate: 2024-12-24
description: 'Two commonly used classes for storing lists of objects are ArrayList and LinkedList.'
author: 'Ian Hart'
image:
  url: 'https://res.cloudinary.com/dap5r6vfu/image/upload/v1735057599/blog-post-05_qqrkj0.jpg'
  alt: 'Black and white photo of people standing in a line'
---

When working with collections in Java, two commonly used classes for storing lists of objects
are **ArrayList** and **LinkedList**. Both implement the **List** interface, providing similar
methods for list manipulation, but they differ in their underlying data structures, performance, and use cases.

<br>

I'm mainly writing this blog post as a source of reference on these two classes because I always
forget when to use one or the other. So in this blog post, we'll explore the differences between
**ArrayList** and **LinkedList**, their strengths, and when to use each one.

<br>

## What is an **ArrayList**?

<br>

The **ArrayList** is a resizable array implementation of the **List** interface.
Internally, it uses a **dynamic array** to store elements. When the array's capacity is exceeded,
it is resized, and elements are copied to a new, larger array.

<br>

What makes up an **ArrayList** is its fast random access to elements in the list. Accessing
elements by index is quick, in fact it is a **(O(1))** time complexity. On the downside, adding
or removing elements from the middle of the list requires shifting all elements by 1 resulting in a **(O(n))** time complexity.

<br>

So use cases for when you would reach for an **ArrayList** is when you need to access elements frequently by index and where
additions and deletions occur primarily at the end of the list.

<br>

```java
import java.util.ArrayList;

public class ArrayListExample {
public static void main(String[] args) {
ArrayList<String> fruits = new ArrayList<>();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        // Accessing elements
        System.out.println("First fruit: " + fruits.get(0));

        // Updating elements
        fruits.set(1, "Blueberry");

        // Removing an element
        fruits.remove(2);

        // Iterating over elements
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }

}

```

<br>

## What is a **LinkedList**?

<br>

A **LinkedList** is made up of nodes, where each node contains the data and references
to the previous and next nodes. It is a doubly linked list implementation of the **List** and **Deque** interfaces.

<br>

Adding or removing elements from the beginning or middle of the list is significantly more efficent **(O(1))**. Unlike **ArrayList**,
a **LinkedList** has a slow random access time complexity **(O(n))** because accessing elements by index requires traversing the nodes from start to end.

<br>

You would want to use a **LinkedList** when you have frequent additions or deletions that occur at the beginning or middle of the list.
It is also usefeul when you need to queue or deque.

<br>

```java
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> cities = new LinkedList<>();

        // Adding elements
        cities.add("New York");
        cities.add("Los Angeles");
        cities.add("Chicago");

        // Adding at the beginning
        cities.addFirst("San Francisco");

        // Adding at the end
        cities.addLast("Houston");

        // Removing elements
        cities.removeFirst();
        cities.removeLast();

        // Iterating over elements
        for (String city : cities) {
            System.out.println(city);
        }
    }
}

```

<br>

## Key Differences Between **ArrayList** and **LinkedList**

| Feature                   | ArrayList                              | LinkedList                           |
| ------------------------- | -------------------------------------- | ------------------------------------ |
| **Data Structure**        | Dynamic Array                          | Doubly Linked List                   |
| **Access Time**           | Fast (O(1)) for index-based access     | Slow (O(n)) for index-based access   |
| **Insertion/Deletion**    | Slow (O(n)) in the middle              | Fast (O(1)) at the ends              |
| **Memory Usage**          | Less memory overhead                   | More memory overhead (node pointers) |
| **Iterating Performance** | Faster due to contiguous memory layout | Slower due to scattered nodes        |
| **Best Use Case**         | Frequent reads and occasional writes   | Frequent writes and occasional reads |

<br>

## Combining **ArrayList** and **LinkedList**

<br>

You might encounter situations where both **ArrayList** and **LinkedList** can be used
effectively together. For example, you could use an **ArrayList** for caching data for fast
access and a **LinkedList** for implementing a queue that handles dynamic insertions and deletions.

<br>

## Conclusion

<br>

Understanding the differences between **ArrayList** and **LinkedList** helps you choose
the right tool for your specific use case. While **ArrayList** excels in scenarios requiring fast random access, **LinkedList** shines
when your program involves frequent insertions and deletions.

<br>

Now that you know the strengths and weaknesses of each, you can optimize your application's performance and memory usage effectively.

Happy Coding 🚀
