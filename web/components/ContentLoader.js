import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import Button from '@/components/ui/Button';
// hooks
import useContentLoader from '@/hooks/useContentLoader';

ContentLoader.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentParams: PropTypes.object,
  contentType: PropTypes.string.isRequired,
  pagesToLoad: PropTypes.number,
  initialPages: PropTypes.number,
  handleContent: PropTypes.func.isRequired,
  options: PropTypes.object,
};

export default function ContentLoader({
  content,
  contentParams = {},
  contentType,
  handleContent,
  pagesToLoad = 1,
  initialPages = 1,
}) {
  const { size, setSize, isLoadingMore, isReachingEnd } = useContentLoader(
    content,
    contentParams,
    contentType,
    handleContent,
    pagesToLoad,
    initialPages
  );

  return (
    <StyledLoaderButton
      isPrimary={false}
      type='button'
      disabled={isLoadingMore || isReachingEnd}
      handleClick={() => setSize(size + 1)}
    >
      {isLoadingMore ? 'loading...' : isReachingEnd ? '' : 'View More'}
    </StyledLoaderButton>
  );
}

// styles
const StyledLoaderButton = styled(Button)`
  ${({ disabled }) =>
    disabled
      ? css`
          display: none;
        `
      : ''};
`;
