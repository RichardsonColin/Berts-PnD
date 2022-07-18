import PropTypes from 'prop-types';
// components
import Form from '@/components/ui/Form';
import FormGroup from '@/components/ui/FormGroup';
import FormGroupFlex from '@/components/ui/FormGroupFlex';
import FormLabel from '@/components/ui/FormLabel';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
// constants
import { mediaQueries } from '@/src/constants';
import { FORM_MAILER_PATH } from '@/src/constants';
// style
import styled from 'styled-components';

QuoteRequestForm.propTypes = {};

export default function QuoteRequestForm() {
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
    >
      <FormGroup>
        <StyledTitle>Tell us about the job</StyledTitle>
      </FormGroup>
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
const StyledForm = styled(Form)``;
const StyledCheckboxGroup = styled(FormGroup)`
  ${StyledForm} & {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
    }
  }
`;
const StyledCheckboxLabel = styled(FormLabel)`
  ${StyledForm} & {
    display: flex;
    min-width: 150px;
    align-items: center;
    margin: 0.2rem 0;

    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
    }
  }
`;
const StyledTitle = styled.h3`
  ${StyledForm} & {
    font-size: 1.3em;
    font-weight: 500;
    text-transform: capitalize;

    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 1.5em;
    }
  }
`;
