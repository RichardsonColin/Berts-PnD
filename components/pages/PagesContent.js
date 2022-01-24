import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import HeroAlternate from '@/components/HeroAlternate';
import CallToAction from '@/components/CallToAction';

PagesContent.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function PagesContent({ heading, children }) {
  return (
    <>
      <HeroAlternate heading={heading} />
      {children}
      <CallToAction />
    </>
  );
}
