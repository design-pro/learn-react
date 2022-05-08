import { useState, useEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("component mount Test");

    return () => {
      console.log("component  unmount Test");
    };
  }, []);

  return (
    <div>
      <span>test load component</span>
    </div>
  );
}

function Main() {
  // js
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(true);

  // [] component mount
  // empty every change component
  // [dep => watch]

  useEffect(() => {
    console.log(`update component`);
  });

  useEffect(() => {
    console.log("component mount Main");

    return () => {
      console.log("component  unmount Main");
    };
  }, []);

  useEffect(() => {
    console.log(`update count: ${count}`);
  }, [count]);

  /**
   *
   * function setter(...data) {
   *  set(data)
   * return getter
   * }
   * (prv)
   *
   */
  return (
    //jsx
    <>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount((prv) => prv + 1); // 0
            setCount((prv) => prv + 1); // 0
            setCount((prv) => prv + 1); // 0
          }}
        >
          Click +3
        </button>
        <button
          onClick={() => {
            setMount((prv) => !prv);
          }}
        >
          {!!mount ? "UnMount" : "Mount"}
        </button>
      </div>
      <div>{!!mount && <Test />}</div>
    </>
  );
}

export default Main;
