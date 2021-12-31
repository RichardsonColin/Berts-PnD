import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { COMPANY_NAME } from '@/src/constants';
// images
import logoImage from '@/public/images/logo.webp';

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
};

export default function Logo({ width, height }) {
  return (
    <ImageWrapper width={width} height={height}>
      <StyledImage src={logoImage} alt={`${COMPANY_NAME} logo`} quality={100} />
    </ImageWrapper>
  );
}

// styles
const StyledImage = styled(Image)`
  width: 100%;
`;
const ImageWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
`;
