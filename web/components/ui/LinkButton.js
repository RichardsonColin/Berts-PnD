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
  padding: 0.75rem 1rem;
  border-radius: 2px;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  color: var(--color-grey-10);
  box-shadow: 0 0 3px 0 var(--color-grey-950);
  transition: 0.2s ease;

  ${({ isPrimary }) => {
    if (isPrimary) {
      return css`
        && {
          background-color: var(--primary);
          text-shadow: 1px 1px var(--color-grey-700);

          &:hover {
            background-color: var(--primary-dark);
            color: var(--color-grey-50);
          }
        }
      `;
    } else {
      return css`
        && {
          background-color: var(--secondary);
          text-shadow: 1px 1px var(--color-grey-990);

          &:hover {
            background-color: var(--secondary-dark);
          }
        }
      `;
    }
  }}
`;
