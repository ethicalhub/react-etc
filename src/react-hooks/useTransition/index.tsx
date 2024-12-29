import { useTransition, useState, useMemo } from 'react';

const UseTransitionHook = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [items] = useState(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));

  // Use useMemo to memoize the filtered items and avoid recalculating them on every render
  const filteredItems = useMemo(
    () => items.filter(item => item.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Use startTransition to update the query state without blocking UI updates
    startTransition(() => {
      setQuery(value);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UseTransitionHook;
