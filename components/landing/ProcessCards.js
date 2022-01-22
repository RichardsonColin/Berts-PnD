import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
// components
import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/src/constants';

ProcessCards.propTypes = {
  process: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ProcessCards({ process }) {
  return (
    <>
      {process.map((item, index) => (
        <StyledCard key={index}>
          <StyledNumber>{index + 1}</StyledNumber>
          <StyledHeading level='3'>{item.heading}</StyledHeading>
          <StyledDescription>{item.description}</StyledDescription>
        </StyledCard>
      ))}
    </>
  );
}

// styles
const StyledCard = styled(Card)`
  position: relative;
  padding: 4rem 1.875rem 1.875rem;
  margin-bottom: 5rem;
  text-align: center;
  background: #fff;

  &:nth-of-type(1) {
    margin-top: 5rem;

    @media (min-width: ${mediaQueries.tablet}) {
      margin-top: 8.75rem;
    }
  }

  &:nth-of-type(odd) {
    @media (min-width: ${mediaQueries.laptop}) {
      transform: translateX(-120px);
    }
  }
  &:nth-of-type(even) {
    @media (min-width: ${mediaQueries.laptop}) {
      transform: translateX(120px);
    }
  }

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    max-width: 500px;
    margin: auto;
    margin-bottom: 6.25rem;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    position: relative;
    padding-top: 1.5rem;
    padding-left: 3rem;
    text-align: left;
    background: #fff;
    z-index: 1;
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledCard} & {
    font-size: 1.5em;
  }
`;
const StyledDescription = styled.p`
  ${StyledCard} & {
    margin-bottom: 0;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      text-align: center;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      text-align: left;
    }
  }
`;
// animation used for StyledNumber
const tilt = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-5deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(5deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-5deg);
  }
`;
const Tilt = css`
  animation-duration: 1.5s;
  animation-delay: 0s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;
const TiltAnimation = css`
  animation-name: ${tilt};
  ${Tilt}
`;
const StyledNumber = styled.span`
  ${StyledCard} && {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    color: var(--color-grey-10);
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    text-shadow: 2px 2px 1px var(--color-grey-800);
    z-index: 1;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 70px;
      width: 70px;
      background-color: var(--secondary-accent);
      box-shadow: 0px 0px 2px var(--color-grey-950);
      opacity: 1;
      z-index: -1;
      ${TiltAnimation}
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      height: 70px;
      width: 70px;
      background-color: var(--primary);
      box-shadow: 0px 0px 2px var(--color-grey-950);
      opacity: 1;
      z-index: -1;
    }
  }

  ${StyledCard}:nth-of-type(odd) & {
    @media (min-width: ${mediaQueries.laptop}) {
      left: auto;
      top: -12px;
      left: -1px;
    }
  }
  ${StyledCard}:nth-of-type(even) & {
    @media (min-width: ${mediaQueries.laptop}) {
      left: unset;
      right: -12px;
      transform: none;
    }
  }
`;
