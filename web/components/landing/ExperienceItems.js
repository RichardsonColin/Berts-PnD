import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { mediaQueries } from '@/utils/constants';

ExperienceItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ExperienceItems({ items }) {
  return (
    <ItemsWrapper>
      {items.map((item, index) => (
        <Item key={index}>
          <StyledImage
            src={item.icon}
            alt='Experience icon'
            width={60}
            height={60}
            quality={100}
          />
          <Value>{item.value}</Value>
          <Text>{item.text}</Text>
        </Item>
      ))}
    </ItemsWrapper>
  );
}

// styles
const ItemsWrapper = styled.div`
  @media (min-width: ${mediaQueries.tablet}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    width: 500px;
  }
`;
const Item = styled.div`
  ${ItemsWrapper} & {
    margin-top: 3rem;
    @media (min-width: ${mediaQueries.tablet}) {
      width: 250px;
    }
  }
`;
const StyledImage = styled(Image)`
  ${ItemsWrapper} & {
    transform: scale(0.95);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7));
  }
`;
const Value = styled.p`
  ${ItemsWrapper} & {
    margin: 1rem 0 0;
    font-size: 1.6em;
    font-weight: 600;
  }
`;
const Text = styled.p`
  ${ItemsWrapper} & {
    margin: 0.25rem 0 0;
    font-size: 1.5em;
    font-weight: 400;
  }
`;
