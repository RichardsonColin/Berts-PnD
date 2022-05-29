import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default function Burger({ open, setOpen }) {
  const isExpanded = open ? true : false;
  return (
    <StyledBurger
      aria-label='Toggle mobile navigation'
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

// styles
const StyledBurger = styled.button`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;

  :focus {
    outline: none;
  }

  span {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? css`var(--secondary)` : css`var(--primary)`};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
