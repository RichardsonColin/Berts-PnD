import Image from 'next/image';
import styled from 'styled-components';
// components
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
// helpers
import { searchString } from '@/src/helpers';
// constants
import { servicesData } from '@/src/data/services';
import { mediaQueries } from '@/src/constants';

export default function ServicesCards() {
  const lastSlashReg = '[^/]+$';
  const firstPeriodReg = '[^.]*';
  return (
    <CardsWrapper position='center'>
      {servicesData.map((serviceData) => (
        <StyledCard key={serviceData.heading}>
          <ImageWrapper>
            <StyledImage
              src={serviceData.image}
              alt={serviceData.heading}
              layout='fill'
              objectFit='cover'
              quality={80}
              placeholder='blur'
            />
          </ImageWrapper>
          <IconWrapper>
            <StyledIcon
              src={serviceData.icon}
              alt={`${searchString(
                searchString(serviceData.icon.src, lastSlashReg),
                firstPeriodReg
              )} icon`}
              width={34}
              height={34}
              quality={100}
            />
          </IconWrapper>
          <StyledHeading level='3'>{serviceData.heading}</StyledHeading>
          <StyledDescription>{serviceData.description}</StyledDescription>
        </StyledCard>
      ))}
    </CardsWrapper>
  );
}

// styles
const CardsWrapper = styled(Container)`
  max-width: 900px;
  margin-top: 6rem;

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 6.125rem;
    margin-bottom: 2rem;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    max-width: 690px;
  }
  /* custom breakpoint */
  @media (min-width: 1300px) {
    max-width: 1310px;
  }
`;
const StyledCard = styled(Card)`
  ${CardsWrapper} & {
    position: relative;
    width: 285px;
    margin-bottom: 3.125rem;
    padding: 0;
    padding-bottom: 1.5rem;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      bottom: -60px;
      left: -70px;
      width: 100px;
      height: 100px;
      margin: 10px 20px;
      background-color: var(--color-grey-10);
      transform: rotateZ(135deg);
      z-index: 1;
    }
  }
`;
const ImageWrapper = styled.div`
  ${StyledCard} & {
    position: relative;
    width: 100%;
    height: 132px;
    margin-bottom: 3.125rem;
    border-radius: 3px 3px 0 0;
  }
`;
const StyledImage = styled(Image)`
  ${StyledCard} & {
    border-radius: 3px 3px 0 0;
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
    border-radius: 10px 10px 0 10px;
    box-shadow: 0px 3px 8px 0px hsl(300deg 5% 10% / 20%);
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
      width: 25%;
      height: 1px;
      background-color: hsl(0deg 0% 85%);
    }
  }
`;
const StyledDescription = styled.p`
  ${StyledCard} & {
    padding: 0 1.5rem;
  }
`;
