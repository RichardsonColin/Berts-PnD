import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
// components
import HeroPrimary from '@/components/HeroPrimary';
import ServicesSection from '@/components/landing/LandingServicesSection';
// import RenovationsSection from '@/components/landing/LandingRenovationsSection';
// import ExperienceSection from '@/components/landing/LandingExperienceSection';
// import ProductsSection from '@/components/landing/LandingProductsSection';
// import ProcessSection from '@/components/landing/LandingProcessSection';
// import PortfolioSection from '@/components/landing/LandingPortfolioSection';
// import ReviewsSection from '@/components/landing/LandingReviewsSection';
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

// dynamic imports
const DynamicPortfolioSection = dynamic(
  () => import('../components/landing/LandingPortfolioSection'),
  { suspense: true }
);
const DynamicRenovationsSection = dynamic(
  () => import('../components/landing/LandingRenovationsSection'),
  { suspense: true }
);
const DynamicExperienceSection = dynamic(
  () => import('../components/landing/LandingExperienceSection'),
  { suspense: true }
);
const DynamicProductsSection = dynamic(
  () => import('../components/landing/LandingProductsSection'),
  { suspense: true }
);
const DynamicProcessSection = dynamic(
  () => import('../components/landing/LandingProcessSection'),
  { suspense: true }
);
const DynamicReviewsSection = dynamic(
  () => import('../components/landing/LandingReviewsSection'),
  { suspense: true }
);

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
      <Suspense fallback={`Loading...`}>
        {/* <RenovationsSection renovations={renovations} />
        <ExperienceSection experience={experience} />
        <ProductsSection products={products} />
        <PortfolioSection portfolio={portfolio} companyData={companyData} />
        <ProcessSection process={process} />
        <ReviewsSection reviews={reviews} /> */}
        <DynamicRenovationsSection renovations={renovations} />
        <DynamicExperienceSection experience={experience} />
        <DynamicProductsSection products={products} />
        <DynamicPortfolioSection
          portfolio={portfolio}
          companyData={companyData}
        />
        <DynamicProcessSection process={process} />
        <DynamicReviewsSection reviews={reviews} />
      </Suspense>
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
