import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledAboutSection as StyledSection } from './styled/PagesSection';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import TextHighlight from '@/components/ui/TextHighlight';
// assets
// import personalImage from '@/public/images/hero-primary.webp';
import icon from '@/public/images/paint-roller.svg';
// constants
import { mediaQueries } from '@/src/constants';
// import { COMPANY_NAME, COMPANY_OWNER } from '@/src/constants';

AboutContent.propTypes = {
  aboutData: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default function AboutContent({ aboutData, id, heading }) {
  return (
    <PagesContent heading={heading}>
      <StyledAboutSection id={id}>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src={aboutData.image}
              alt={`${aboutData.companyOwner} from ${aboutData.companyName}`}
              layout='fill'
              objectFit='cover'
              quality={80}
              placeholder='blur'
            />
          </ImageWrapper>
          <StyledContainer position='left'>
            <span>Who We Are</span>
            <StyledHeading level='2'>
              About{' '}
              <StyledTitleHighlight color='var(--primary-dark)'>
                {aboutData.companyName}
              </StyledTitleHighlight>
            </StyledHeading>
            <IconWrapper>
              <Image
                src={icon}
                alt='Icon'
                width={30}
                height={30}
                quality={100}
              />
            </IconWrapper>
            <Description>{aboutData.description}</Description>
            <OwnerName>{aboutData.companyOwner}</OwnerName>
            <OwnerTitle>Owner</OwnerTitle>
            <StatsWrapper>
              {aboutData.stats.map((stat, index) => {
                return (
                  <StatsContent key={index}>
                    <h3>
                      <StyledNumberHighlight color='var(--secondary)'>
                        {stat.value}
                      </StyledNumberHighlight>
                    </h3>
                    <h4>{stat.text}</h4>
                  </StatsContent>
                );
              })}
            </StatsWrapper>
          </StyledContainer>
        </ContentWrapper>
      </StyledAboutSection>
    </PagesContent>
  );
}

// styles
const StyledAboutSection = styled(StyledSection)``;
const ContentWrapper = styled.div`
  ${StyledAboutSection} & {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;
const StyledContainer = styled(Container)`
  ${StyledAboutSection} & {
    @media (min-width: ${mediaQueries.tablet}) {
      flex: 0 1 75%;
      padding-left: 6rem;
    }
  }
`;
const ImageWrapper = styled.div`
  ${StyledAboutSection} & {
    position: relative;
    width: 250px;
    height: 250px;
    margin-bottom: 2rem;
    overflow: hidden;

    /* cut corners */
    &:before {
      content: '';
      position: absolute;
      top: -40px;
      right: -40px;
      width: 80px;
      height: 80px;
      background-color: var(--color-grey-10);
      transform: rotate(45deg);
      z-index: 1;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -40px;
      left: -40px;
      width: 80px;
      height: 80px;
      background-color: var(--color-grey-10);
      transform: rotate(45deg);
      z-index: 1;
    }
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledAboutSection} & {
    margin-bottom: 0.5rem;
  }
`;
const IconWrapper = styled.div`
  ${StyledAboutSection} & {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 15px;
      left: 40px;
      width: 60%;
      border-bottom: 1px solid var(--color-grey-100);

      @media (min-width: ${mediaQueries.mobileL}) {
        width: 300px;
      }
    }
  }
`;
const Description = styled.p``;
const OwnerName = styled.p`
  ${StyledAboutSection} & {
    margin: 0;
  }
`;
const OwnerTitle = styled.p`
  ${StyledAboutSection} & {
    margin: 0;
  }
`;
const StatsWrapper = styled.div`
  ${StyledAboutSection} & {
    margin-top: 3rem;

    /* custom breakpoint */
    @media (min-width: 500px) {
      display: flex;
    }
  }
`;
const StatsContent = styled.div`
  ${StyledAboutSection} & {
    width: 125px;

    /* custom breakpoint */
    @media (min-width: 500px) {
      flex: 0 1 100%;
      padding-right: 2rem;
    }
  }
`;
const StyledTitleHighlight = styled(TextHighlight)`
  ${StyledAboutSection} & {
    font-weight: 500;
  }
`;
const StyledNumberHighlight = styled(TextHighlight)`
  ${StyledAboutSection} & {
    font-size: 1.75em;
    font-weight: 800;
  }
`;
