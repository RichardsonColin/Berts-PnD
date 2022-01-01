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
    <ButtonWrapper>
      <Link href={href} passHref>
        <StyledLinkButton isPrimary={isPrimary}>{text}</StyledLinkButton>
      </Link>
    </ButtonWrapper>
  );
}

// styles
const StyledLinkButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 3px;
  font-size: 1em;
  font-weight: 500;
  box-shadow: 1px 1px 2px 0px var(--color-grey-800);
  background-color: var(--secondary);

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
const ButtonWrapper = styled.div``;
