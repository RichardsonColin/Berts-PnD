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

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default function ContactForm({ className }) {
  const staticFormValues = {
    type: 'contact',
    name: '',
    email: '',
    comments: '',
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
    if (!values.comments) {
      errors.comments = 'Required';
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
      <FormTitle>We're here for all your questions</FormTitle>
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
        <FormLabel htmlFor='comments'>Comments</FormLabel>
        <FormTextArea
          id='comments'
          name='comments'
          placeholder='Describe your questions or comments'
        />
      </FormGroup>
    </StyledForm>
  );
}

// styles
const StyledForm = styled(Form)`
  max-width: 800px;
`;
