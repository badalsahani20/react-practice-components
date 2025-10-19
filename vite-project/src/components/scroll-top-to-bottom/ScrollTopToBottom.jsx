import useFetch from "../custom-fetch/CustomHook";
import './style.css'
const ScrollTopToBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  function handleToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1 style={{color: 'red'}}>{error}</h1>
  }
  return (
    <div className="item-container">
      <h1 className="heading">Scroll Top To Bottom</h1>
      <h3 className="section-top">This is the top section</h3>
      <button className="to-bottom" onClick={handleToBottom}>Scroll to Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li className="list-items" key={item.id}>{item.title}</li>)
          : <p>No products found 💤</p>}
      </ul>
      <button className="to-top" onClick={handleToTop}>Scroll to Top</button>
      <h3 className="section-bottom">This is the bottom section</h3>
    </div>
  );
};

export default ScrollTopToBottom;
