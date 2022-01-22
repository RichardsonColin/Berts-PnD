import PropTypes from 'prop-types';
// components
import HeroPrimary from '@/components/HeroPrimary';
import ServicesSection from '@/components/landing/LandingServicesSection';
import RenovationsSection from '@/components/landing/LandingRenovationsSection';
import ExperienceSection from '@/components/landing/LandingExperienceSection';
import ProductsSection from '@/components/landing/LandingProductsSection';
import ProcessSection from '@/components/landing/LandingProcessSection';
import PortfolioSection from '@/components/landing/LandingPortfolioSection';
import ReviewsSection from '@/components/landing/LandingReviewsSection';
// constants
import { servicesData } from '@/src/data/services';
import { productsData } from '@/src/data/products';
import { renovationsData } from '@/src/data/renovations';
import { processData } from '@/src/data/process';
import { portfolioData } from '@/src/data/portfolio';
import { reviewsData } from '@/src/data/reviews';

Home.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  renovations: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  process: PropTypes.arrayOf(PropTypes.object).isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Home({
  services,
  renovations,
  products,
  process,
  portfolio,
  reviews,
}) {
  // TODO: App wide - modify all PropTypes classNames to 'isRequired' and fix subsequent linting warnings
  return (
    <>
      <HeroPrimary />
      <ServicesSection services={services} />
      <RenovationsSection renovations={renovations} />
      <ExperienceSection />
      <ProductsSection products={products} />
      <PortfolioSection portfolio={portfolio} />
      <ProcessSection process={process} />
      <ReviewsSection reviews={reviews} />
    </>
  );
}

// SSG
export async function getStaticProps() {
  const services = servicesData;
  const products = productsData;
  const renovations = renovationsData;
  const process = processData;
  const portfolio = portfolioData;
  const reviews = reviewsData;
  return {
    props: { services, products, renovations, process, portfolio, reviews },
  };
}

// styles
