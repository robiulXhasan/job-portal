import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto space-y-10 my-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">1. When should you use context API?</h2>
        <p className="text-lg">
          <p className="text-indigo-400 font-semibold">Answer: </p>
          We should use context API for some scenario that are given in below: <br />
          <span className="text-indigo-400 font-extrabold">**</span> When multiple components need
          to access the same data: If you have multiple components that need to access the same
          data, using the Context API can help you avoid "prop drilling", which is the process of
          passing down data through multiple layers of components. <br />
          <span className="text-indigo-400 font-extrabold">**</span> When state needs to be shared
          across different parts of your application: If you have state that needs to be shared
          across different parts of your application, using the Context API can help you keep your
          code organized and reduce the amount of code you need to write. <br />
          <span className="text-indigo-400 font-extrabold">**</span> When you want to avoid using
          Redux: Redux is a popular state management library for React, but it can add unnecessary
          complexity to your application. If your state management needs are relatively simple,
          using the Context API may be a more lightweight and simpler solution.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">2. What is custom hook?</h2>
        <p className="text-lg">
          <p className="text-indigo-400 font-semibold">Answer: </p>
          In React, a custom hook is a JavaScript function that allows you to reuse stateful logic
          across multiple components. Custom hooks follow a specific naming convention - their names
          always start with the word "use" and they may call other hooks or perform side effects.
          <br />
          Custom hooks can be used to abstract away complex logic, making your code more readable
          and easier to maintain. By encapsulating stateful logic in a custom hook, you can easily
          reuse that logic across multiple components without having to duplicate code.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">3. What useRef?</h2>
        <p className="text-lg">
          <p className="text-indigo-400 font-semibold">Answer: </p>
          In React, useRef is a hook that allows you to create a mutable variable that persists
          across renders. This variable can be used to store a reference to a DOM element or any
          other value that needs to persist between renders.
          <br />
          useRef can also be used to store any other mutable value that needs to persist across
          renders, such as a timer ID or a flag that determines whether a component should update.
          It's important to note that changing the value of a useRef variable doesn't trigger a
          re-render of the component, so it's useful for storing values that don't affect the UI. If
          you need to store a value that does affect the UI, you should use state instead.
        </p>
      </div>
      <div className="space-y-4 ">
        <h2 className="text-2xl font-bold">4. What is useMemo?</h2>
        <p className="text-lg">
          <p className="text-indigo-400 font-semibold">Answer: </p>
          In React, useMemo is a hook that allows you to memoize the result of a function call and
          only recompute the result when one of its dependencies has changed. Memoization is a
          technique where you cache the result of a function so that you don't need to compute it
          again if the input parameters haven't changed.
          <br />
          By using useMemo, we can optimize our component by avoiding unnecessary re-calculations of
          the factorial when the input value hasn't changed. This can be especially useful when
          dealing with expensive computations or when working with large datasets. It's important to
          note that useMemo should be used sparingly and only when necessary, as it can add
          complexity to your code and may not always result in a significant performance
          improvement. You should always measure the performance of your components before and after
          using useMemo to ensure that it's actually providing a benefit.
        </p>
      </div>
    </div>
  );
};

export default Blog;
