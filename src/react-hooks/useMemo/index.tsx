import { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  return (
    <div>
      <h1>useMemo</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;