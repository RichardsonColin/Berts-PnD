import PropTypes from 'prop-types';
// components
import Form from '@/components/ui/Form';
import FormTitle from '@/components/ui/FormTitle';
import FormGroup from '@/components/ui/FormGroup';
import FormGroupFlex from '@/components/ui/FormGroupFlex';
import FormLabel from '@/components/ui/FormLabel';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
// constants
import { mediaQueries } from '@/utils/constants';
import { FORM_MAILER_PATH } from '@/utils/constants';
// style
import styled from 'styled-components';

QuoteRequestForm.propTypes = {
  className: PropTypes.string,
};

export default function QuoteRequestForm({ className }) {
  const staticFormValues = {
    type: 'quote',
    name: '',
    email: '',
    details: '',
    interior: false,
    exterior: false,
    decorating: false,
  };

  const handleValidations = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.details) {
      errors.details = 'Required';
    }
    return errors;
  };

  return (
    <StyledForm
      initialValues={staticFormValues}
      validations={handleValidations}
      requestUrl={FORM_MAILER_PATH}
      className={className}
    >
      <FormTitle>Tell us about the job</FormTitle>
      <FormGroupFlex>
        <FormGroup>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <FormInput
            id='name'
            name='name'
            type='text'
            placeholder='John Smith'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormInput
            id='email'
            name='email'
            type='email'
            placeholder='john@email.com'
          />
        </FormGroup>
      </FormGroupFlex>
      <StyledCheckboxGroup role='group' aria-labelledby='checkbox-group'>
        <StyledCheckboxLabel>
          Interior
          <FormInput id='interior' type='checkbox' name='interior' />
        </StyledCheckboxLabel>
        <StyledCheckboxLabel>
          Exterior
          <FormInput id='exterior' type='checkbox' name='exterior' />
        </StyledCheckboxLabel>
        <StyledCheckboxLabel>
          Decorating
          <FormInput id='decorating' type='checkbox' name='decorating' />
        </StyledCheckboxLabel>
      </StyledCheckboxGroup>
      <FormGroup>
        <FormLabel htmlFor='details'>Details</FormLabel>
        <FormTextArea
          id='details'
          name='details'
          placeholder='Describe the job in detail'
        />
      </FormGroup>
    </StyledForm>
  );
}

// styles
const StyledForm = styled(Form)`
  max-width: 1000px;
  margin: 0 auto;
`;
const StyledCheckboxGroup = styled(FormGroup)`
  ${StyledForm} & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;

    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
    }
  }
`;
const StyledCheckboxLabel = styled(FormLabel)`
  ${StyledForm} & {
    display: flex;
    align-items: center;
    min-width: 150px;
    margin: 0.2rem 0;

    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
    }
  }
`;
