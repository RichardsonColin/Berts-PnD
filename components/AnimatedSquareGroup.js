import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { default as SquareOne } from '@/components/ui/AnimatedSquare';
import { default as SquareTwo } from '@/components/ui/AnimatedSquare';
import { default as SquareThree } from '@/components/ui/AnimatedSquare';

AnimatedSquareGroup.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  angles: PropTypes.arrayOf(PropTypes.number).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AnimatedSquareGroup({ sizes, angles, colors }) {
  return (
    <SquaresWrapper>
      <StyledSquareOne
        size={sizes[0]}
        thickness={51}
        angle={angles[0]}
        shift={16}
        color={colors[0]}
        opacity={1}
      />
      <StyledSquareTwo
        size={sizes[1]}
        thickness={51}
        angle={angles[1]}
        shift={14}
        color={colors[1]}
        opacity={1}
      />
      <StyledSquareThree
        size={sizes[2]}
        thickness={51}
        angle={angles[2]}
        shift={12}
        color={colors[2]}
        opacity={1}
      />
    </SquaresWrapper>
  );
}

// styles
const SquaresWrapper = styled.div`
  width: 400px;
  z-index: 1;
`;
const StyledSquareOne = styled(SquareOne)`
  ${SquaresWrapper} & {
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 0px 0px 5px var(--color-grey-500);
  }
`;
const StyledSquareTwo = styled(SquareTwo)`
  ${SquaresWrapper} & {
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 0px 0px 3px var(--color-grey-800);
  }
`;
const StyledSquareThree = styled(SquareThree)`
  ${SquaresWrapper} & {
    z-index: 3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 0px 0px 3px var(--color-grey-800);
  }
`;
