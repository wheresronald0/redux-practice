const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state, //use the spread opperator to make copy of original state, while only updting the counter, and not results, i.e. what you designate to be overridden
      //could also do: const newState = Object.assign({}, state) to make a copy, but spread is better
      counter: state.counter + 1
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1
    };
  } else if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...state,
      counter: state.counter - action.value
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter }) //concat instead of push as an immutable way (push will update the original state- no bueno!)
    }; //(state.counter) worked but I needed a key for the <li> in Counter.js
  } else if (action.type === "DELETE_RESULT") {
    const updatedArray = state.results.filter(
      result => result.id !== action.listId //id passed as payload from action
    );
    return {
      ...state,
      results: updatedArray
    };
  }
  return state;
};

export default reducer;

//can also use a switch statement with cases, instead of mulitple if statements:
//switch (action.type) {
//   case "INCREMENT":
//   return {
//     counter:statecounter + 1
//   }
// }
// and so on...
