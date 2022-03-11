import sanityClient from '../sanityClient';

// general sanity query
export const query = async (type, params) => {
  try {
    const { filterFor, orderBy, rangeWithin } = params;

    return await sanityClient.fetch(`
      *[_type == "${type}"${filterFor}]
      ${orderBy}
      ${rangeWithin}
    `);
  } catch (error) {
    console.error(`Sanity Query Error on ${type} --- ${error}`);
  }
};

// common params used to filter GROQ query statements
export const parseParams = ({ page, perPage = 10, filter, order }) => {
  // check for params
  const hasPage = page !== undefined;
  const hasFilter = filter !== undefined;
  const hasOrder = order !== undefined;
  // sanity ranges begin at 0
  const rangeFrom = hasPage ? (Number.parseInt(page) - 1) * perPage : -1;
  const rangeTo = hasPage ? Number.parseInt(page) * perPage : -1;
  // query statements
  const rangeWithin = hasPage ? `[${rangeFrom}...${rangeTo}]` : '';
  const filterFor = hasFilter ? ` && ${filter}` : '';
  const orderBy = hasOrder ? ` | order(${order})` : '';

  return {
    rangeWithin,
    filterFor,
    orderBy,
  };
};
