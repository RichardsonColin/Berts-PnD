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
// models
import { fetchReviews } from '@/models/review';
import { fetchPortfolioImages } from '@/models/portfolioImage';
// constants
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { productsData } from '@/data/products';
import { renovationsData } from '@/data/renovations';
import { experienceData } from '@/data/experience';
import { processData } from '@/data/process';

Home.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  renovations: PropTypes.arrayOf(PropTypes.object).isRequired,
  experience: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  process: PropTypes.arrayOf(PropTypes.object).isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Home({
  services,
  renovations,
  experience,
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
      <ExperienceSection experience={experience} />
      <ProductsSection products={products} />
      <PortfolioSection portfolio={portfolio} companyData={companyData} />
      <ProcessSection process={process} />
      <ReviewsSection reviews={reviews} />
    </>
  );
}

// SSG
export async function getStaticProps() {
  // Local resources
  const services = servicesData;
  const products = productsData;
  const renovations = renovationsData;
  const experience = experienceData;
  const process = processData;
  // Sanity resources
  const portfolio = await fetchPortfolioImages({
    page: 1,
    perPage: 4,
    filter: 'onLanding == true',
  });
  const reviews = await fetchReviews({
    page: 1,
    perPage: 3,
    order: 'date desc',
    filter: 'onLanding == true',
  });

  return {
    props: {
      services,
      products,
      renovations,
      experience,
      process,
      portfolio: portfolio?.data || [],
      reviews: reviews?.data || [],
    },
    revalidate: 60,
  };
}
