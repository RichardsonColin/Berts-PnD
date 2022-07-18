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
import { FORM_MAILER_PATH } from '@/src/constants';
// style
import styled from 'styled-components';

ContactForm.propTypes = {};

export default function ContactForm() {
  const staticFormValues = {
    type: 'contact',
    name: '',
    email: '',
    details: '',
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
        <FormTitle>We're here for all your questions</FormTitle>
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
