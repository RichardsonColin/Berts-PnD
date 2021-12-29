import PropTypes from 'prop-types';

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Main(props) {
  return <main>{props.children}</main>;
}
