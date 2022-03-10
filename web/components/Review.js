import PropTypes from 'prop-types';
import styled from 'styled-components';
// assets
import { ReactComponent as Star } from '@/public/images/star-full.svg';

Review.propTypes = {
  review: PropTypes.PropTypes.object.isRequired,
};

export default function Review({ review }) {
  const { author, body } = review;
  const numStars = 5;
  return (
    <>
      <StarWrapper>
        {[...Array(numStars)].map((elm, index) => (
          <StyledStar
            key={index}
            width='100pt'
            height='100pt'
            fill='var(--primary)'
          />
        ))}
      </StarWrapper>
      <StyledReview>{body}</StyledReview>
      <StyledAuthor>{author}</StyledAuthor>
    </>
  );
}

// styles
const StyledReview = styled.p`
  && {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;
const StyledAuthor = styled.p`
  && {
    position: relative;
    margin-bottom: 4rem;
    font-weight: 700;
    z-index: 1;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 35px;
      height: 35px;
      background-color: var(--primary-light);
      opacity: 0.8;
      z-index: -1;
    }
  }
`;
const StarWrapper = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledStar = styled(Star)`
  ${StarWrapper} & {
    width: 30px;
    height: 30px;
    margin-bottom: 2.5rem;
  }
`;
