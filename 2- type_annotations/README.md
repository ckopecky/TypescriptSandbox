## Type Annotations

What are they?

- Type annotations are tiny bits of code we add to tell TS what type of value a variable will refer to. 
- Devs do this.

## Type Inference

What is it?

- Type inference is where TS tries to figure out what type of value a variable refers to
- TS does this

| Variable Declaration | Variable Initialization |
|---|---|
| const **color** = | `"red"`; |

*if variable initialization and declaration are on the same line, TypeScript will figure out the type of **color** for us -- that's **type inference***