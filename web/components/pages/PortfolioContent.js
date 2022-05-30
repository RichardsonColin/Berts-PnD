import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledAboutSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import Gutter from '@/components/ui/Gutter';
import PortfolioImages from '@/components/PortfolioImages';
import ContentLoader from '@/components/ContentLoader';
import Heading from '@/components/ui/Heading';

PortfolioContent.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentParams: PropTypes.object.isRequired,
  companyData: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default function PortfolioContent({
  contentData,
  contentParams,
  companyData,
  id,
  heading,
  title,
  subtitle,
}) {
  const [portfolioImages, setPortfolioImages] = useState(contentData || []);
  const { companyName } = companyData;

  const handleContent = (content) => {
    setPortfolioImages(content);
  };
  return (
    <PagesContent heading={heading}>
      <StyledPortfolioSection id={id}>
        <Gutter>
          <HeadingWrapper>
            <span>{subtitle}</span>
            <Heading level='2'>{title}</Heading>
          </HeadingWrapper>
          <PortfolioImages
            portfolioImages={portfolioImages}
            altText={`${companyName} portfolio work`}
          />
          <ButtonWrapper>
            <ContentLoader
              content={portfolioImages}
              contentParams={contentParams}
              contentType='portfolioImages'
              handleContent={handleContent}
              pagesToLoad={1}
              initialPages={2}
            />
          </ButtonWrapper>
        </Gutter>
      </StyledPortfolioSection>
    </PagesContent>
  );
}

// styles
const StyledPortfolioSection = styled(StyledSection)`
  margin: auto;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  ${StyledPortfolioSection} & {
    width: 100%;
    margin-top: 2rem;
  }
`;
