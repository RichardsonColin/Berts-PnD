import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import LinkButton from '@/components/ui/LinkButton';

QuoteLinkButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  isPrimary: PropTypes.bool,
};

export default function QuoteLinkButton({ text, href, isPrimary }) {
  return (
    <StyledQuoteLinkButton
      text={text || 'Request Quote'}
      href={href || '/quote'}
      isPrimary={isPrimary}
    />
  );
}

const StyledQuoteLinkButton = styled(LinkButton)`
  border: 1px solid var(--primary-dark);

  &:hover {
    border: 1px solid var(--primary);
  }
`;
