function categoryReducer(state = { all: [] }, action) {
    switch (action.type) {
      case "GET_CATEGORIES":
        return { ...state, all: action.categories };
      case "ADD_CATEGORY":
        return { ...state, all: state.all.concat(action.category) };
      case "REMOVE_CATEGORY":
        return state.filter((category)=>category.id !== action.id);
      default:
        return state;
    }
  }