import { useState } from 'react';
import Modal from 'styled-react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { mediaQueries } from '@/utils/constants';

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
  className: PropTypes.string,
};

export default function CustomModal({ children, content, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  }
  return (
    <>
      <span onClick={toggleModal} role='button' aria-pressed={isOpen}>
        {children}
      </span>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
        className={className}
      >
        {content}
        <StyledButton onClick={toggleModal}>&#10005;</StyledButton>
      </StyledModal>
    </>
  );
}

const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const StyledButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;
  border: 3px solid var(--secondary);
  background-color: var(--color-grey-50);
  color: var(--secondary);
  font-size: 1.2em;
  text-shadow: 0px 0px 2px var(--color-grey-950);
  box-shadow: 0px 0px 2px var(--color-grey-900);
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: var(--secondary);
    color: var(--color-grey-50);
    border: 3px solid var(--color-grey-50);
    transform: rotate(180deg);
  }

  @media (min-width: ${mediaQueries.tablet}) {
    width: 45px;
    height: 45px;
    font-size: 1.5em;
  }
`;
