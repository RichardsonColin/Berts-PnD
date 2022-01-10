import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Heading({ level = 1, className = '', children }) {
  return (
    <StyledHeading as={`h${level}`} level={level} className={className}>
      {children}
    </StyledHeading>
  );
}

// styles
const HeadingOne = css``;
const HeadingTwo = css``;
const HeadingThree = css``;
const HeadingFour = css``;
const HeadingFive = css``;
const HeadingSix = css``;
// use of 'as' attr will convert into dynamic heading elm
const StyledHeading = styled.div`
  ${({ level }) => {
    if (level === '1') {
      return css`
        ${HeadingOne}
      `;
    }
    if (level === '2') {
      return css`
        ${HeadingTwo}
      `;
    }
    if (level === '3') {
      return css`
        ${HeadingThree}
      `;
    }
    if (level === '4') {
      return css`
        ${HeadingFour}
      `;
    }
    if (level === '5') {
      return css`
        ${HeadingFive}
      `;
    }
    if (level === '6') {
      return css`
        ${HeadingSix}
      `;
    }
  }}
`;
