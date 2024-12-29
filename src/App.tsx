import UseIdExample from "./react-hooks/useId"
import ImperativeHandleRef from "./react-hooks/useImperativeHandle"
import InsertionEffectHook from "./react-hooks/useInsertionEffect"
import LayoutEffectExample from "./react-hooks/useLayoutEffect"
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
      <div style={{margin: "2rem"}}>
      <ImperativeHandleRef />
      </div>
      <div style={{margin: "2rem"}}>
      <LayoutEffectExample />
      </div>
      <div style={{margin: "2rem"}}>
      <InsertionEffectHook />
      </div>
      <div style={{margin: "2rem"}}>
      <UseIdExample />
      </div>

    </section>
  )
}

export default App