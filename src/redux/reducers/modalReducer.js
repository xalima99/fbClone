const init = {
  modal: false,
  post: {}
};

export default (state = init, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        modal: true,
        post: Object.assign(state.post, action.payload)
      };

    case "HIDE":
      return {
        ...state,
        modal: false,
        post: {}
      };

      case "SHOW_SHARE":
      return {
        ...state,
        modal: true,
        post: Object.assign(state.post, action.payload)
      };

    case "HIDE_SHARE":
      return {
        ...state,
        modal: false,
        post: {}
      };

    default:
      return state;
  }
};
