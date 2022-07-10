import PropTypes from 'prop-types';
// components
import { StyledFormikTextArea } from '@/components/ui/styled/FormInputs';
// style
import styled from 'styled-components';

FormTextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function FormTextArea({ id, name, className }) {
  return <StyledTextArea className={className} id={id} name={name} />;
}

// styles
const StyledTextArea = styled(StyledFormikTextArea)`
  width: 100%;
  height: 200px;
  margin: 0.5rem 0 0;
`;
