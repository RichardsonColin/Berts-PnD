import PropTypes from 'prop-types';
// style
import styled, { css } from 'styled-components';

FormikStatusMessage.propTypes = {
  msg: PropTypes.string.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default function FormikStatusMessage({ msg, isDisplayed, className }) {
  return (
    <FormMessage className={className} isDisplayed={isDisplayed}>
      {msg}
    </FormMessage>
  );
}

const FormMessage = styled.p`
  width: 100%;
  height: 0px;
  margin: 0 auto;
  padding: 0;
  background-color: var(--secondary-light);
  color: var(--color-grey-10);
  font-size: 1.3em;
  font-weight: 500;
  text-transform: capitalize;
  box-shadow: 0px 0px 2px var(--color-grey-950);
  opacity: 0;
  transition: all 0.2s linear;

  ${({ isDisplayed }) =>
    isDisplayed &&
    css`
      height: auto;
      margin: 2rem auto 0;
      padding: 0.75rem;
      opacity: 1;
    `}
`;
