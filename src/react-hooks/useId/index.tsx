import { useId } from "react";

const UseIdExample = () => {
  const checkboxId = useId();

  return (
    <div>
      <input type="checkbox" id={checkboxId} />
      <label htmlFor={checkboxId}>Agree to terms and conditions</label>
    </div>
  );
};

export default UseIdExample;
