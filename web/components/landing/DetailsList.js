import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/utils/constants';

DetailsList.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function DetailsList({ details }) {
  return (
    <StyledList>
      {details.map((detail) => (
        <StyledListItem key={detail.heading} icon={detail.icon}>
          <Heading level='3'>{detail.heading}</Heading>
          <p>{detail.description}</p>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

// styles
const StyledList = styled.ul`
  margin-top: 3.125rem;
  list-style: none;
`;
const StyledListItem = styled.li`
  ${StyledList} & {
    position: relative;
    margin-bottom: 3.125rem;

    h3 {
      margin-bottom: 0.75rem;

      &:before {
        content: '';
        position: absolute;
        top: -3px;
        left: -40px;
        display: block;
        width: 30px;
        height: 30px;
        background: ${({ icon }) => `url(${icon})`};
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1;

        @media (min-width: ${mediaQueries.tablet}) {
          left: -45px;
        }
      }
    }
  }
`;
