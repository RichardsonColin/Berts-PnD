import PropTypes from 'prop-types';
// style
import styled from 'styled-components';

ReCapthcaPolicy.propTypes = {
  className: PropTypes.string,
};

export default function ReCapthcaPolicy({ className }) {
  return (
    <StyledSmall className={className}>
      This site is protected by reCAPTCHA and the Google{' '}
      <Link href='https://policies.google.com/privacy'>Privacy Policy</Link> and{' '}
      <Link href='https://policies.google.com/terms'> Terms of Service</Link>{' '}
      apply.
    </StyledSmall>
  );
}

// stlyes
const StyledSmall = styled.small`
  color: var(--color-grey-600);
  line-height: 20px;
`;
const Link = styled.a`
  ${StyledSmall} & {
    text-decoration: underline;
  }
`;
