import PropTypes from 'prop-types';
// components
import Button from '@/components/ui/Button';
import { ReactComponent as CircleNotch } from '@/public/images/circle-notch-solid.svg';
// constants
import { mediaQueries } from '@/utils/constants';
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
            <StyledCircleNotch />
          </FontAwesomeWrapper>
        )}
      </StyledSpan>
    </StyledSubmit>
  );
}

// styles
const StyledSubmit = styled(Button)`
  && {
    padding: 0.75rem 3.5rem;
    color: var(--color-grey-50);
    background-color: var(--secondary);

    &:hover {
      background-color: var(--secondary-dark);
    }

    @media (min-width: ${mediaQueries.mobileS}) {
      padding: 0.75rem 4rem;
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
const StyledCircleNotch = styled(CircleNotch)`
  ${StyledSubmit} & {
    width: 22px;
    height: 22px;
    fill: #fff;
  }
`;
const FontAwesomeWrapper = styled.span`
  ${StyledSubmit} & {
    display: flex;
    position: absolute;
    top: -1px;
    right: -45px;
    font-size: 1.3em;
    animation: ${spin} 1s ease-in-out infinite;
  }
`;
