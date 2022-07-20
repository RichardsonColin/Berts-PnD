import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledServicesSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import Gutter from '@/components/ui/Gutter';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/src/constants';

ServicesContent.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default function ServicesContent({
  contentData,
  id,
  heading,
  title,
  subtitle,
}) {
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
        <StyledContentHeading level='3'>{heading}</StyledContentHeading>
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
        <Gutter>
          <HeadingWrapper>
            <span>{subtitle}</span>
            <Heading level='2'>{title}</Heading>
          </HeadingWrapper>
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
        </Gutter>
      </StyledServicesSection>
    </PagesContent>
  );
}

// styles
const StyledServicesSection = styled(StyledSection)`
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
  }
`;
const StyledContentContainer = styled(Container)`
  ${StyledServicesSection} & {
    margin-top: 0;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      :nth-child(even) {
        padding-left: 2rem;
      }
      :nth-child(odd) {
        padding-right: 2rem;
      }
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      width: 1300px;
    }
  }
`;
const StyledContentHeading = styled(Heading)`
  ${StyledServicesSection} & {
    margin-bottom: 0.5rem;
    color: var(--secondary);
    font-size: 1.5em;
  }
`;
const ImageWrapper = styled.div`
  ${StyledServicesSection} & {
    position: relative;
    flex: 1 0 250px;
    align-self: center;
    width: 250px;
    height: 250px;
    margin: 1rem 0;
    overflow: hidden;

    /* cut corner left */
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
    /* cut corner right */
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
      align-self: flex-start;
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
