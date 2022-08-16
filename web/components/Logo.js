import Image from 'next/image';
import styled from 'styled-components';
// constants
import { COMPANY_NAME } from '@/utils/constants';
// assets
import logoImage from '@/public/images/logo.webp';

export default function Logo() {
  return <StyledImage src={logoImage} alt={`${COMPANY_NAME} logo`} />;
}

// styles
const StyledImage = styled(Image)`
  width: 100%;
  transition: 0.2s ease;
`;
