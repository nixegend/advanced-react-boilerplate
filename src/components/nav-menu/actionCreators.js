import ActionTypes from '../../common/actions';

const selectItem = (index) => ({
  index,
  type: ActionTypes.NAVIGATION_MENU_ITEM_SELECTED
});

export default selectItem;
