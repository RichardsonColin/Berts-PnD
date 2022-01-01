import PropTypes from 'prop-types';
// components
import LinkButton from '@/components/ui/LinkButton';

QuoteLinkButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  isPrimary: PropTypes.bool,
};

export default function QuoteLinkButton({ text, href, isPrimary }) {
  return (
    <LinkButton
      text={text || 'Request Quote'}
      href={href || '/quote'}
      isPrimary={isPrimary}
    />
  );
}
