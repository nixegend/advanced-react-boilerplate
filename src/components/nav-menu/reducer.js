import ActionTypes from '../../common/actions';

const navMenu = (state = { activeItem: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.NAVIGATION_MENU_ITEM_SELECTED:
      return Object.assign({}, state, { activeItem: action.index });
    default:
      return state;
  }
};

export default navMenu;
