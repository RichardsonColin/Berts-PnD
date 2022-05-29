import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledReviewsSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import Reviews from '@/components/Reviews';
import ContentLoader from '@/components/ContentLoader';
import Heading from '@/components/ui/Heading';

ReviewsContent.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentParams: PropTypes.object,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default function ReviewsContent({
  contentData,
  contentParams,
  id,
  heading,
  title,
  subtitle,
}) {
  const [reviews, setReviews] = useState(contentData || []);

  const handleContent = (content) => {
    setReviews(content);
  };

  return (
    <PagesContent heading={heading}>
      <StyledReviewsSection id={id}>
        <HeadingWrapper>
          <span>{subtitle}</span>
          <Heading level='2'>{title}</Heading>
        </HeadingWrapper>
        <Reviews reviews={reviews} />
        <ContentLoader
          content={reviews}
          contentParams={contentParams}
          contentType='reviews'
          handleContent={handleContent}
          pagesToLoad={1}
          initialPages={2}
        />
      </StyledReviewsSection>
    </PagesContent>
  );
}

// styles
const StyledReviewsSection = styled(StyledSection)`
  text-align: center;
  max-width: 1100px;
  margin: auto;
`;
