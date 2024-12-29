import ReducerHook from "./react-hooks/useReducer"
import RefHook from "./react-hooks/useRef"
const App = () => {
  return (
    <section>
      <div style={{margin: "2rem"}}>
      <ReducerHook />
      </div>
      <div style={{margin: "2rem"}}>
      <RefHook />
      </div>
    </section>
  )
}

export default App