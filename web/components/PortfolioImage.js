import PropTypes from 'prop-types';
// components
import SanityImage from '@/components/SanityImage';

PortfolioImage.propTypes = {
  image: PropTypes.object.isRequired,
  altText: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  objectFit: PropTypes.string.isRequired,
  quality: PropTypes.number,
  blur: PropTypes.number,
  className: PropTypes.string,
};

export default function PortfolioImage({
  image,
  altText,
  layout,
  objectFit,
  quality = 80,
  blur = 20,
  className,
}) {
  return (
    <SanityImage
      image={image}
      layout={layout}
      objectFit={objectFit}
      quality={quality}
      blur={blur}
      altText={altText}
      className={className}
    />
  );
}
