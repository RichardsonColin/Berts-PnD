import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};

export default function LinkButton({ text, href, isPrimary }) {
  return (
    <Link href={href} passHref>
      <StyledLinkButton isPrimary={isPrimary}>{text}</StyledLinkButton>
    </Link>
  );
}

// styles
const StyledLinkButton = styled.a`
  padding: 15px 25px;
  border-radius: 3px;
  font-size: 1.1em;

  ${({ isPrimary }) => {
    if (isPrimary) {
      return css`
        background-color: var(--primary);
        color: var(--color-grey-900);
      `;
    } else {
      return css`
        background-color: var(--secondary);
        color: var(--color-grey-10);
      `;
    }
  }}
`;
