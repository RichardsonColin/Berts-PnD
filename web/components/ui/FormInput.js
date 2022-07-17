import PropTypes from 'prop-types';
// components
import { StyledFormikInput } from '@/components/ui/styled/FormInputs';
// style
import styled, { css } from 'styled-components';

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default function FormInput({ id, name, type, placeholder, className }) {
  return (
    <StyledInput
      className={className}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}

// styles
const StyledInput = styled(StyledFormikInput)`
  && {
    ${({ type }) => {
      if (type === 'text' || type === 'email' || type === 'password') {
        return css`
          width: 100%;
          height: 40px;
          margin: 0.5rem 0 0.1rem;
        `;
      }

      if (type === 'checkbox') {
        return css`
          width: 17px;
          height: 17px;
          accent-color: var(--secondary-light);
        `;
      }
    }}
  }
`;
