import Image from 'next/image';
import sanityClient from '../sanityClient';
import { useNextSanityImage } from 'next-sanity-image';
import PropTypes from 'prop-types';

SanityImage.propTypes = {
  image: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  objectFit: PropTypes.string.isRequired,
  quality: PropTypes.number,
  blur: PropTypes.number,
  altText: PropTypes.string.isRequired,
};

/*
  For more available image manipulation options visit:
  https://github.com/bundlesandbatches/next-sanity-image
*/

export default function SanityImage({
  image,
  layout,
  objectFit,
  quality = 80,
  blur = 20,
  altText,
}) {
  const customImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width(
        options.width || Math.min(options.originalImageDimensions.width, 1920)
      )
      .blur(blur)
      .quality(quality);
  };
  const imageProps = useNextSanityImage(sanityClient, image, {
    imageBuilder: customImageBuilder,
  });

  // unrequired props if image layout is set to 'fill'
  if (layout === 'fill') {
    delete imageProps['width'];
    delete imageProps['height'];
  }

  return (
    <Image
      {...imageProps}
      layout={layout}
      objectFit={objectFit}
      quality={quality}
      alt={altText}
    />
  );
}
