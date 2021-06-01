function reducer(prevState, action) {
  if(action.type === "INCREMENT") {
    return {
      ...prevState,
      number: prevState.number + 1
    };
  } else if(action.type === "DECREMENT") {
    return {number: prevState.number - 1};
  } else {
    return prevState;
  }
};

export default reducer;