import Image from 'next/image';
import styled from 'styled-components';
// components for styling
import { LogoWrapper as NavLogoWrapper } from '@/components/layout/Nav';
// constants
import { COMPANY_NAME, mediaQueries } from '@/src/constants';
// assets
import logoImage from '@/public/images/logo.webp';

export default function Logo() {
  return (
    <ImageWrapper mediaQueries={mediaQueries}>
      <StyledImage
        src={logoImage}
        alt={`${COMPANY_NAME} logo`}
        quality={100}
        priority
      />
    </ImageWrapper>
  );
}

// styles
const StyledImage = styled(Image)`
  width: 100%;
`;
const ImageWrapper = styled.div`
  ${NavLogoWrapper} & {
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileS}) {
      width: 150px;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      width: 200px;
    }
  }
`;
