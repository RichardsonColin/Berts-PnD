import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// assets
import { ReactComponent as Star } from '@/public/images/star-full.svg';

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Reviews({ reviews }) {
  const Star = (
    <StyledStar width='100pt' height='100pt' fill='var(--primary)' />
  );
  return (
    <>
      {reviews.map((review, index) => (
        <Fragment key={index}>
          <StarWrapper>
            {Star}
            {Star}
            {Star}
            {Star}
            {Star}
          </StarWrapper>
          <StyledReview>{review.review}</StyledReview>
          <StyledAuthor>{review.author}</StyledAuthor>
        </Fragment>
      ))}
    </>
  );
}

// styles
const StyledReview = styled.p`
  && {
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
