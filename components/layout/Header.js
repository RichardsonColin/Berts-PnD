import PropTypes from 'prop-types';

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Header(props) {
  return <header>{props.children}</header>;
}
