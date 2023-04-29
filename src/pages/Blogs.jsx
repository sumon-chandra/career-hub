import React from "react";

const Blogs = () => {
  return (
    <>
      <header className="pt-20 bg-no-repeat bg-center bg-cover lg:bg-[url('https://i.ibb.co/h2nX2DB/5570863.jpg')] border-b-2 border-gray-200 shadow-md rounded-b-lg">
        <h2 className="lg:text-5xl text-3xl font-bold text-gray-700 text-center lg:py-20 py-10">
          My Blogs
        </h2>
      </header>
      <section className="py-8 lg:w-3/4 mx-auto">
        <article className="pt-8 text-sm lg:text-xl">
          <h3 className="font-bold">Q 01: When should you use context API?</h3>
          <p>
            Context API is a method which is used for avoiding prop drilling.
            React Context API is useful when you need to share data between
            multiple component that are nested deeply in your component tree.
            Without it when you want to share data to the nested component you
            need to pass by using pros down the chain of components. <br />
            Context API allow us to create a global state object that can be
            accessed by any component within the tree. So you can avoid prop
            drilling into the nested components. For example, you need to share
            some data between multiple components and that are not in same
            directory, in this case you can store that data (which you want to
            share) in a separate place so you can give it to multiple components
            by using a special hook called{" "}
            <i className="font-semibold">useContext</i>.
          </p>
        </article>
        <article className="pt-8 text-sm lg:text-xl">
          <h3 className="font-bold">Q 02: What is a custom hook?</h3>
          <p>
            Custom Hooks are reusable functions that allow us to share logic
            between different components. Basically Custom Hook create for the
            encapsulated functionality that may involve state management, side
            effects, or more advanced features. <br />
            Custom hooks ate named with the prefix{" "}
            <i className="font-bold">use</i> and then your own custom text for
            example, <i className="font-bold">useAuth</i>. They are allow
            extract logic within a separate function that can be reusable into
            multiple components without need to any duplicate code. <br />
            You might create a custom hook that handles authentication or one
            that fetched data from an API and update state. Once you created the
            Custom Hook, you can use it in amy component that needed that
            functionality, without having to write the same code multiple times.
          </p>
        </article>
        <article className="pt-8 text-sm lg:text-xl">
          <h3 className="font-bold">Q 03: What is useRef?</h3>
          <p>
            useRef is a built-in React hook that provides a way to store mutable
            values that persist across re-renders of a component. It returns a
            single, mutable value that can be updated without causing the
            component to re-render. useRef is typically used to access DOM
            elements or to store any value that needs to persist across
            re-renders, but doesn't need to trigger a re-render when it changes.
            It can also be used to store values that need to be accessed by
            child components, or to store the previous value of a prop or state
            variable.
          </p>
        </article>
        <article className="pt-8 text-sm lg:text-xl">
          <h3 className="font-bold">Q 01: When should you use context API?</h3>
          <p>
            useMemo is a built-in React hook that allows you to memoize a value
            and only recompute it when one of its dependencies changes. It is
            used to optimize performance by avoiding unnecessary re-computations
            of expensive values. useMemo takes two arguments: a function that
            computes the value, and an array of dependencies. The function is
            only re-run if one or more of the dependencies have changed since
            the last render.
          </p>
        </article>
      </section>
    </>
  );
};

export default Blogs;
