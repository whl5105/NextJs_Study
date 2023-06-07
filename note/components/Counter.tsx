"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        {count}
        <button onClick={() => setCount((num) => num + 1)}>숫자 증가</button>
      </p>
    </>
  );
}
