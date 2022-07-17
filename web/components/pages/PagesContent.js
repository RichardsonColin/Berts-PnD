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
    margin-top: 5rem;
    margin-bottom: 10rem;
    color: var(--color-grey-10);
    text-shadow: 1px 1px 1px var(--color-grey-900);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileL}) {
      margin-top: 8rem;
      margin-bottom: 12rem;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      margin-bottom: 15rem;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      margin-bottom: 20rem;
    }
  }
`;
