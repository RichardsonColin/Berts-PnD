import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

ExperienceItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ExperienceItems({ items }) {
  return (
    <ItemsWrapper>
      {items.map((item, index) => (
        <Item key={index}>
          <Image
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
const Value = styled.p`
  ${ItemsWrapper} & {
    margin: 1rem 0 0;
    font-size: 2em;
    font-weight: 700;
  }
`;
const Text = styled.p`
  ${ItemsWrapper} & {
    margin: 0.5rem 0 0;
    font-size: 1.8em;
    font-weight: 400;
  }
`;
