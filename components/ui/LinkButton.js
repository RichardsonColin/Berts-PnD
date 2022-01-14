import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function LinkButton({
  href,
  isPrimary,
  children,
  className = '',
}) {
  return (
    <Link href={href} passHref>
      <StyledLinkButton className={className} isPrimary={isPrimary}>
        {children}
      </StyledLinkButton>
    </Link>
  );
}

// styles
const StyledLinkButton = styled.a`
  display: inline-block;
  width: 175px;
  padding: 1rem 0;
  border-radius: 2px;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
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
          background-color: var(--secondary-accent);
        }
      `;
    }
  }}
`;
