import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import LinkButton from '@/components/ui/LinkButton';

QuoteLinkButton.propTypes = {
  href: PropTypes.string,
  isPrimary: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default function QuoteLinkButton({
  href,
  isPrimary,
  children,
  className,
}) {
  return (
    <StyledQuoteLinkButton
      className={className}
      href={href || '/quote'}
      isPrimary={isPrimary}
    >
      {children || 'Request Quote'}
    </StyledQuoteLinkButton>
  );
}

const StyledQuoteLinkButton = styled(LinkButton)`
  && {
    min-width: 150px;
  }
`;
