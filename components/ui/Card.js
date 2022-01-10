import PropTypes from 'prop-types';
import styled from 'styled-components';

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function Card({ className = '', children }) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

const StyledCard = styled.div`
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 13px 2px hsl(0deg 0% 0% / 12%);
  border-radius: 3px;
`;
