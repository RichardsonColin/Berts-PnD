import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

EmailAddress.propTypes = {
  email: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function EmailAddress({ email, className }) {
  const [displayed, setDisplayed] = useState(false);

  const handleClick = (event) => {
    setDisplayed(true);
  };

  return (
    <>
      {displayed ? (
        <StyledEmail className={className} href={`mailto:${email}`}>
          {email}
        </StyledEmail>
      ) : (
        <StyledText className={className} onClick={handleClick}>
          Click to get email
        </StyledText>
      )}
    </>
  );
}

// styles
const StyledEmail = styled.a`
  color: var(--secondary);
  text-decoration: underline;
`;
const StyledText = styled.p`
  margin: 0;
  font-style: italic;
  cursor: pointer;
`;
