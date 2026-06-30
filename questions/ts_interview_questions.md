I searched recent TypeScript interview-prep sources and cross-checked the topics with official TypeScript docs. These are not “exact company frequency stats,” but the **most repeated interview themes**: generics, narrowing, utility types, strictness, async typing, React/Node typing, and real-world type design. ([DataCamp][1])

## Top 30 TypeScript Interview Questions

1. What is TypeScript, and how is it different from JavaScript?

2. What are the benefits of using TypeScript in a large-scale application?

3. Explain the difference between `type` and `interface`.

4. When would you use `interface` instead of `type`, and vice versa?

5. What is type inference in TypeScript?

6. What is the difference between `any`, `unknown`, and `never`?

7. Why is `unknown` safer than `any`?

8. What is the difference between `void` and `never`?

9. Explain union types and intersection types.

10. What is type narrowing? Give examples using `typeof`, `in`, and `instanceof`.

11. What are custom type guards?

12. What is a discriminated union, and why is it useful?

13. What are generics in TypeScript?

14. How do generic constraints work using `extends`?

15. What is the difference between this:

```ts
function identity<T>(value: T): T;
```

and using `any`?

16. Explain `keyof`, `typeof`, and indexed access types.

17. What are mapped types in TypeScript?

18. What are conditional types?

19. What does the `infer` keyword do in conditional types?

20. Explain common utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`, `ReturnType`, and `Parameters`.

21. What is the difference between optional properties and properties that can be `undefined`?

22. What does `strictNullChecks` do?

23. What is the purpose of `tsconfig.json`?

24. What are important compiler options you use in real projects?

25. How do you type an async function?

26. How do you type API responses safely in TypeScript?

27. How would you avoid overusing `any` in a legacy JavaScript migration?

28. How do you type React component props in TypeScript?

29. How do you type event handlers, refs, and children in React with TypeScript?

30. Design question: How would you model loading, success, and error states using TypeScript so invalid UI states are impossible?

If I were interviewing you, I’d start from **Q6, Q10, Q12, Q13, Q20, and Q30**. Those quickly show whether someone only knows syntax or can actually use TypeScript in production.

[1]: https://www.datacamp.com/blog/typescript-interview-questions?utm_source=chatgpt.com "Top 40 TypeScript Interview Questions and Answers for 2026"
