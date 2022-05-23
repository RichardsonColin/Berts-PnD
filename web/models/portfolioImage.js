// helpers
import { query, parseParams } from './helpers';

const TYPE = 'portfolioImage';

export const fetchPortfolioImages = async (params) => {
  const result = { data: [], status: '' };
  try {
    const statementParams = parseParams(params);

    // build result object
    result.data = await query(TYPE, statementParams);
    result.status = 'success';

    return result;
  } catch (error) {
    console.log(`${TYPE} Model Issue --- ${error}`);
    result.status = 'fail';
    return result;
  }
};
