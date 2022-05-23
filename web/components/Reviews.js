import PropTypes from 'prop-types';
// components
import Review from '@/components/Review';

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </>
  );
}
