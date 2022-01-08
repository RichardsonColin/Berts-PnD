import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import LinkButton from '@/components/ui/LinkButton';

QuoteLinkButton.propTypes = {
  href: PropTypes.string,
  isPrimary: PropTypes.bool,
  children: PropTypes.node,
};

export default function QuoteLinkButton({ href, isPrimary, children }) {
  return (
    <StyledQuoteLinkButton href={href || '/quote'} isPrimary={isPrimary}>
      {children || 'Request Quote'}
    </StyledQuoteLinkButton>
  );
}

const StyledQuoteLinkButton = styled(LinkButton)`
  border: 1px solid var(--primary-dark);

  &:hover {
    border: 1px solid var(--primary);
  }
`;
