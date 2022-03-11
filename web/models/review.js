import sanityClient from '../sanityClient';

export const fetch = async ({ page, perPage = 10, order }) => {
  const result = { data: [], status: '' };
  try {
    // params
    const hasPage = page !== undefined;
    const hasOrder = order !== undefined;
    // sanity ranges begin at 0
    const rangeFrom = hasPage ? (Number.parseInt(page) - 1) * perPage : -1;
    const rangeTo = hasPage ? Number.parseInt(page) * perPage : -1;
    // optional query statements
    const range = hasPage ? `[${rangeFrom}...${rangeTo}]` : '';
    const orderBy = hasOrder ? ` | order(${order})` : '';

    // build result object
    result.data = await sanityClient.fetch(`
      *[_type == "review"]
      ${orderBy}
      ${range}
    `);
    result.status = 'success';

    return result;
  } catch (error) {
    console.error(error);
    result.status = 'error';

    return result;
  }
};
