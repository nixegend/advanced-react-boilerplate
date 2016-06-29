import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import selectItem from './actionCreators';

const MENU_ITEMS = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' }
];

const mapStateToProps = (state) => ({
  menuItems: MENU_ITEMS,
  activeItem: state.navMenu.activeItem
});

const mapDispatchToProps = (dispatch) => ({
  onItemClick: (index) => dispatch(selectItem(index))
});

const NavMenuBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);

export default NavMenuBox;
