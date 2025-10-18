import React from "react";
import UseFetch from "./CustomHook";

const UseFetchHookTest = () => {
  const { data, error, loading } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, loading)
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h2>Loading...</h2> : null}
      {data && data.products && data.products.length ? data.products.map(item => <p key={item.id}>{item.title}</p>) : null}
    </div>
  );
};

export default UseFetchHookTest;
