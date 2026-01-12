// not able to solve it in time limit and in first attempt

// approach  --- using sentinal element, calculating its position relative to the container

// this approach has one problem of skipping multiple element sometimes 20 and sometime 10, this is because react's way of updating the state. Fix this using ref during revision

import { useEffect, useRef, useState } from "react";
import "./style.css";

function InfiniteScroll() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const containerRef = useRef();

  const fetchProducts = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10}`
    );
    const data = await res.json();
    setProducts((prev) => [...prev, ...data.products]);
    setPage((prev) => prev + 1);
    setHasMore(data.products.length > 0);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const container = containerRef?.current;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = container;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        fetchProducts();
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, hasMore]);

  return (
    <div className="infinite-container" ref={containerRef}>
      <h4>Infinite Scroll Using Sentinal Element</h4>
      <>
        {products?.map((item, index) => (
          <div key={`${item?.id} + ${index}`}>
            <p>{`${index + 1}. ${item?.title}`}</p>
          </div>
        ))}
        {isLoading && <div className="dummy-element">Loading...</div>}
        {!hasMore && <div>No more products</div>}
      </>
    </div>
  );
}

export default InfiniteScroll;
