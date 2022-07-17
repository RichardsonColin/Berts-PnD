import PropTypes from 'prop-types';
// components
import Button from '@/components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
// style
import styled, { keyframes } from 'styled-components';

FormSubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default function FormSubmitButton({
  isSubmitting = false,
  disabled = false,
  text,
  handleClick,
  className,
}) {
  return (
    <StyledSubmit
      className={className}
      type='submit'
      disabled={disabled}
      handleClick={handleClick}
    >
      <StyledSpan>
        {text}
        {isSubmitting && (
          <FontAwesomeWrapper>
            <FontAwesomeIcon icon={faCircleNotch} />
          </FontAwesomeWrapper>
        )}
      </StyledSpan>
    </StyledSubmit>
  );
}

// styles
const StyledSubmit = styled(Button)`
  && {
    padding: 0.75rem 5rem;
    color: var(--color-grey-50);
    background-color: var(--secondary);

    &:hover {
      background-color: var(--secondary-dark);
    }
  }
`;
const StyledSpan = styled.span`
  ${StyledSubmit} & {
    position: relative;
  }
`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const FontAwesomeWrapper = styled.span`
  ${StyledSubmit} & {
    position: absolute;
    right: -50%;
    animation: ${spin} 1s ease-in-out infinite;
  }
`;
