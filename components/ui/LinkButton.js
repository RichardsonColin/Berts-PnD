import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  className: PropTypes.string,
};

export default function LinkButton({ text, href, isPrimary, className }) {
  return (
    <LinkButtonWrapper>
      <Link href={href} passHref>
        <StyledLinkButton className={className} isPrimary={isPrimary}>
          {text}
        </StyledLinkButton>
      </Link>
    </LinkButtonWrapper>
  );
}

// styles
const StyledLinkButton = styled.a``;
const LinkButtonWrapper = styled.div`
  display: inline-block;

  & ${StyledLinkButton} {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 3px;
    font-size: 1em;
    font-weight: 500;
    box-shadow: 1px 1px 2px 0px var(--color-grey-800);
    background-color: var(--secondary);
    transition: 0.2s ease;
    text-shadow: 1px 1px var(--color-grey-990);

    ${({ isPrimary }) => {
      if (isPrimary) {
        return css`
          background-color: var(--primary);
          color: var(--color-grey-900);

          &:hover {
            background-color: var(--primary-dark);
            color: var(--color-grey-50);
          }
        `;
      } else {
        return css`
          background-color: var(--secondary);
          color: var(--color-grey-10);

          &:hover {
            background-color: var(--secondary-dark);
          }
        `;
      }
    }}
  }
`;
