// components
import FormikInput from '@/components/ui/Formik/FormikInput';
import FormikTextArea from '@/components/ui/Formik/FormikTextArea';
// styled
import styled, { css } from 'styled-components';

// input stylings to ensure uniformity across all forms

const InputStylings = css`
  color: var(--color-grey-700);
  font-size: 1em;
  outline: none;
  transition: box-shadow 0.1s ease-in-out, outline 0.1s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px var(--primary);
    outline: 2px solid var(--primary);
  }
`;

export const StyledFormikInput = styled(FormikInput)`
  ${InputStylings}
  border: none;
  border-bottom: 1px solid var(--color-grey-200);
  padding-left: 1rem;
`;
export const StyledFormikTextArea = styled(FormikTextArea)`
  ${InputStylings}
  padding: 1rem;
  border: 1px solid var(--color-grey-200);
  font-family: inherit;
  resize: none;
`;
