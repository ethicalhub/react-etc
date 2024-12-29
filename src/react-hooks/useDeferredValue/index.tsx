import React, { useState, useDeferredValue } from 'react';

const UseDeferredValueExample = () => {
  const [query, setQuery] = useState('');
  const [items] = useState(
    Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)
  );

  // Use the deferred value to delay the filter operation
  const deferredQuery = useDeferredValue(query);

  // Filter the items based on the deferred query value
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseDeferredValueExample;
