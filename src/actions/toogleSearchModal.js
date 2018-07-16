import TOGGLE_MODAL from "../types/searchModal";

export default function toggleSearchModal(isOpen) {
  return {
    type: TOGGLE_MODAL,
    payload: isOpen
  }
}