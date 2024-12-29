import  { useRef, useImperativeHandle, forwardRef } from "react";

const ImperativeHandleRef = () => {
  const inputRef = useRef<CustomInputHandle>(null); // Use correct type for ref

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current?.clearInput()}>Clear Input</button>
    </div>
  );
}

export default ImperativeHandleRef;

type CustomInputHandle = {
  focusInput: () => void;
  clearInput: () => void;
};

const CustomInput = forwardRef<CustomInputHandle, {}>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});
