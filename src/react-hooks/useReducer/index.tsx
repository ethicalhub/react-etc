import {useReducer} from 'react'
import { actionTypes, reducer, StateType } from './reducer';


const ReducerHook = () => {

  const initialState: StateType = { count: 0 };
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <section>
       <h2 className='mb-4'>Count: {state.count}</h2>
       <button onClick={()=>dispatch({type: actionTypes.INCREMENT})}>+ 1</button>
       <button onClick={()=>dispatch({type: actionTypes.DECREMENT})}>- 1</button>
       <button onClick={()=>dispatch({type: actionTypes.MULTIPLY})}>* 2</button>
       <button onClick={()=>dispatch({type: actionTypes.RESET})}>Reset</button>
    </section>
  )
}

export default ReducerHook