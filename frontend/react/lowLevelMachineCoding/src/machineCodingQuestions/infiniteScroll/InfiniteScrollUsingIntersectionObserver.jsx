import { useEffect, useRef, useState } from "react";
import "./style.css";

function InfiniteScrollUsingIntersectionObserver() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const containerRef = useRef(null);
  const sentinelRef = useRef(null);

  const fetchProducts = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10}`
    );
    const data = await res.json();

    setProducts((prev) => [...prev, ...data.products]);
    setHasMore(data.products.length > 0);
    setPage((prev) => prev + 1);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchProducts();
        }
      },
      {
        root: containerRef.current,
        rootMargin: "100px",
        threshold: 0,
      }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  return (
    <div className="infinite-container" ref={containerRef}>
      <h4>Infinite Scroll</h4>

      {products.map((item, index) => (
        <p key={item.id}>{`${index + 1}. ${item.title}`}</p>
      ))}

      {hasMore && (
        <div ref={sentinelRef} className="dummy-element">
          {isLoading ? "Loading..." : "Load more"}
        </div>
      )}

      {!hasMore && <div>No more products</div>}
    </div>
  );
}

export default InfiniteScrollUsingIntersectionObserver;
