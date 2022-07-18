import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Button({
  type,
  disabled,
  isPrimary = true,
  handleClick,
  children,
  className,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      isPrimary={isPrimary}
      onClick={handleClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

// styles
const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 2px;
  background-color: var(--color-grey-10);
  font-size: 1em;
  color: var(--secondary);
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  ${({ isPrimary }) => {
    if (isPrimary) {
      return css`
        && {
          border: 2px solid var(--secondary);

          &:hover {
            background-color: var(--secondary);
            color: var(--color-grey-10);
          }
        }
      `;
    } else {
      return css`
        && {
          border: 2px solid var(--secondary-light);
          color: var(--secondary-light);
          background-color: var(--color-grey-10);

          &:hover {
            background-color: var(--secondary-light);
            color: var(--color-grey-10);
          }
        }
      `;
    }
  }}
`;
