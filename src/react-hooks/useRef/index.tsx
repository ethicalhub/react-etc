import {useRef} from 'react'

const RefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "Initial Value";
    }
  };
  return (
    <div>
    <input
      type="text"
      ref={inputRef}
      placeholder="Enter a value"
    />
    <button onClick={onClick}>Set Value</button>
  </div>
  )
}

export default RefHook