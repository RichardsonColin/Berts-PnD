import PropTypes from 'prop-types';

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Footer(props) {
  return <footer>{props.children}</footer>;
}
