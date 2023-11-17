function Reducer(state = { result: 0 }, action) {
  switch (action.type) {
    case "ACTION1":
      return {
        result: state.result + action.payload,
      };
    case "ACTION2":
      return {
        result: state.result - action.payload,
      };
    case "ACTION3":
      return {
        result: state.result * action.payload,
      };
    case "ACTION4":
      return {
        result: state.result / action.payload,
      };
    default:
      return state;
  }
}
export default Reducer;
