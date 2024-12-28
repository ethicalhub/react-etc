export const actionTypes = {
 INCREMENT : "increment",
 DECREMENT : "decrement",
 MULTIPLY : "multiply",
 RESET : "reset",
} as const


export type ActionType ={
    type: typeof actionTypes[keyof typeof actionTypes]
}

export type StateType = {
    count: number;
  };
  


export const reducer = (state:StateType, action:ActionType) : StateType=>{
    switch(action.type){
      case actionTypes.INCREMENT:
        return {count: state.count + 1};
      case actionTypes.DECREMENT:
        return { count: Math.max(0, state.count - 1) };
      case actionTypes.MULTIPLY:
        return {count: state.count * 2};
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
}