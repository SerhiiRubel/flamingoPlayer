import TOGGLE_MODAL from "../types/searchModal";

export default function toggleSearchModal( state = false, action ) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return action.payload;
    default: return state;
  }
}