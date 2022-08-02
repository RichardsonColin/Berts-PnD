import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
// helpers
import { searchString } from '@/utils/helpers';
// constants
import { mediaQueries } from '@/utils/constants';

ServicesCards.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ServicesCards({ services }) {
  const getFileName = (path) => {
    const lastSlashReg = '[^/]+$';
    const firstPeriodReg = '[^.]*';
    return searchString(searchString(path, lastSlashReg), firstPeriodReg);
  };
  return (
    <CardsWrapper position='center'>
      {services.map((service) => (
        <StyledCard key={service.heading}>
          <ImageWrapper>
            <StyledImage
              src={service.image}
              alt={service.heading}
              layout='fill'
              objectFit='cover'
              quality={80}
              placeholder='blur'
            />
          </ImageWrapper>
          <IconWrapper>
            <StyledIcon
              src={service.icon}
              alt={`${getFileName(service.icon.src)} icon`}
              width={34}
              height={34}
              quality={100}
            />
          </IconWrapper>
          <StyledHeading level='3'>{service.heading}</StyledHeading>
          <StyledDescription>{service.description}</StyledDescription>
        </StyledCard>
      ))}
    </CardsWrapper>
  );
}

// styles
const CardsWrapper = styled(Container)`
  max-width: 700px;
  margin-top: 6rem;
  justify-content: center;

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 6.125rem;
    margin-bottom: 2rem;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    max-width: 800px;
  }
  /* custom breakpoint */
  @media (min-width: 1300px) {
    max-width: 100%;
  }
`;
const StyledCard = styled(Card)`
  ${CardsWrapper} & {
    position: relative;
    width: 285px;
    margin-bottom: 3.125rem;
    padding: 0;
    padding-bottom: 1.5rem;
    border-radius: 2px 2px 0 0;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 285px;
    }

    @media (min-width: ${mediaQueries.laptop}) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
const ImageWrapper = styled.div`
  ${StyledCard} & {
    position: relative;
    width: 100%;
    height: 132px;
    margin-bottom: 3.125rem;
  }
`;
const StyledImage = styled(Image)`
  ${StyledCard} & {
    border-radius: 2px 2px 0 0;
  }
`;
const IconWrapper = styled.div`
  ${StyledCard} & {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-radius: 10px 10px 1px 1px;
    box-shadow: 0px 3px 8px 0px hsl(300deg 5% 10% / 20%);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 70px;
    }
  }
`;
const StyledIcon = styled(Image)`
  ${StyledCard} & {
    width: 50px;
    height: 50px;
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledCard} & {
    position: relative;
    margin-bottom: 0.75rem;
    padding: 0 1.5rem;
    font-size: 1.25em;

    &:before {
      content: '';
      position: absolute;
      top: 31px;
      left: 50%;
      transform: translateX(-50%);
      width: 33%;
      height: 1px;
      background-color: var(--color-grey-100);
    }
  }
`;
const StyledDescription = styled.p`
  ${StyledCard} & {
    padding: 0 1.5rem;
  }
`;
