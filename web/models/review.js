import sanityClient from '../sanityClient';

// common params used to filter GROQ query statements
const parseParams = ({ page, perPage = 10, order }) => {
  // check for params
  const hasPage = page !== undefined;
  const hasOrder = order !== undefined;
  // sanity ranges begin at 0
  const rangeFrom = hasPage ? (Number.parseInt(page) - 1) * perPage : -1;
  const rangeTo = hasPage ? Number.parseInt(page) * perPage : -1;
  // query statements
  const rangeWithin = hasPage ? `[${rangeFrom}...${rangeTo}]` : '';
  const orderBy = hasOrder ? ` | order(${order})` : '';

  return {
    rangeWithin,
    orderBy,
  };
};

export const fetchReviews = async (params) => {
  const result = { data: [], status: '' };
  try {
    const { orderBy, rangeWithin } = parseParams(params);
    // build result object
    result.data = await sanityClient.fetch(`
      *[_type == "review"]
      ${orderBy}
      ${rangeWithin}
    `);
    result.status = 'success';

    return result;
  } catch (error) {
    console.error(`Sanity Error --- ${error}`);
    result.status = error;
    return result;
  }
};
