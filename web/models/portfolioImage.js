// helpers
import { sanityQuery, sanityParseParams } from '@/lib/sanity/helpers';

const TYPE = 'portfolioImage';

export const fetchPortfolioImages = async (params) => {
  const result = { data: [], status: '' };
  try {
    const statementParams = sanityParseParams(params);

    // build result object
    result.data = await sanityQuery(TYPE, statementParams);
    result.status = 'success';

    return result;
  } catch (error) {
    console.log(`${TYPE} Model Issue --- ${error}`);
    result.status = 'fail';
    return result;
  }
};
