import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import HeroAlternate from '@/components/HeroAlternate';
import { StyledCallToActionSection as CallToAction } from './styled/PagesSection';
// constants
import { mediaQueries } from '@/src/constants';

PagesContent.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function PagesContent({ heading, children }) {
  return (
    <>
      <HeroAlternate heading={heading} />
      {children}
      <StyledCallToAction />
    </>
  );
}

// styles
const StyledCallToAction = styled(CallToAction)`
  && {
    margin-top: -4rem;
    margin-bottom: 2rem;
    padding-top: 7.5rem;
    color: var(--color-grey-10);
    text-shadow: 1px 1px 1px var(--color-grey-800);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileL}) {
      margin-top: -2rem;
      margin-bottom: 3rem;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      margin-top: 1rem;
      margin-bottom: 6rem;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      margin-top: 14rem;
      padding-top: 0;
      padding-bottom: 4rem;
    }
  }
`;
