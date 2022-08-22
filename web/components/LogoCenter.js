import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { COMPANY_NAME } from '@/utils/constants';
// assets
import logoCenterImage from '@/public/images/logo-center.webp';

LogoCenter.propTypes = {
  priority: PropTypes.bool,
};

export default function LogoCenter({ priority = false }) {
  return (
    <StyledLogo
      priority={priority}
      width={400}
      height={93}
      src={logoCenterImage}
      alt={`${COMPANY_NAME} logo`}
      quality={80}
    />
  );
}

// styles
const StyledLogo = styled(Image)`
  width: 100%;
  transition: 0.2s ease;
`;
