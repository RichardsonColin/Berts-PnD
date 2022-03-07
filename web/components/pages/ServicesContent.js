import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledServicesSection as StyledSection } from './styled/PagesSection';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/src/constants';

ServicesContent.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default function ServicesContent({ contentData, id, heading }) {
  const ContentImage = (content) => {
    const { image, heading } = content;
    return (
      <ImageWrapper>
        <Image
          src={image}
          alt={`${heading} image`}
          layout='fill'
          objectFit='cover'
          quality={80}
          placeholder='blur'
        />
      </ImageWrapper>
    );
  };
  const ContentText = (content) => {
    const { icon, heading, body } = content;
    return (
      <StyledContentContainer position='left'>
        <StyledHeading level='2'>{heading}</StyledHeading>
        <IconWrapper>
          <Image
            src={icon}
            alt={`${heading} icon`}
            width={30}
            height={30}
            quality={100}
          />
        </IconWrapper>
        {body.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </StyledContentContainer>
    );
  };
  return (
    <PagesContent heading={heading}>
      <StyledServicesSection id={id}>
        {contentData.map((content, index) => (
          <StyledWrapperContainer
            key={content.heading}
            position={index % 2 === 0 ? 'right' : 'left'}
          >
            {index % 2 === 0 ? (
              <>
                <ContentImage {...content} />
                <ContentText {...content} />
              </>
            ) : (
              <>
                <ContentText {...content} />
                <ContentImage {...content} />
              </>
            )}
          </StyledWrapperContainer>
        ))}
      </StyledServicesSection>
    </PagesContent>
  );
}

// styles
const StyledServicesSection = styled(StyledSection)`
  max-width: 1550px;
  margin: 0 auto;
`;
const StyledWrapperContainer = styled(Container)`
  ${StyledServicesSection} & {
    display: flex;
    flex-direction: column;
    align-items: center;

    :nth-child(even) {
      flex-direction: column-reverse;
    }
    :not(:last-child) {
      margin-bottom: 5rem;
    }

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
      align-items: flex-start;

      :nth-child(even) {
        flex-direction: row;
      }
    }
    @media (min-width: ${mediaQueries.laptop}) {
      width: 975px;
    }
    /* custom breakpoints */
    @media (min-width: 1300px) {
      width: 1100px;
    }
    @media (min-width: 1500px) {
      width: 1375px;
    }
  }
`;
const StyledContentContainer = styled(Container)`
  ${StyledServicesSection} & {
    margin-top: 0;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      padding: 0 2rem;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      width: 1300px;
    }
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledServicesSection} & {
    margin-bottom: 0.5rem;
    color: var(--secondary);
  }
`;
const ImageWrapper = styled.div`
  ${StyledServicesSection} & {
    position: relative;
    flex: 1 0 250px;
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

    @media (min-width: ${mediaQueries.laptop}) {
      flex: 1 0 400px;
      width: 400px;
      height: 400px;
    }
  }
`;
const IconWrapper = styled.div`
  ${StyledServicesSection} & {
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
