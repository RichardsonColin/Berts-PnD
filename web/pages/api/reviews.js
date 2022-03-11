// models
import { fetchReviews } from '../../models/review';
/*
  Path:
    /api/reviews

  Accepted Methods:
    GET
*/
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // handle request
      const { page, perPage, order } = req.query;
      const { data, status } = await fetchReviews({
        page,
        perPage,
        order,
      });

      // send response
      if (status === 'success') {
        res.status(200).json(data);
      } else {
        console.error(`HTTP Method: ${req.method} --- ${status}`);
        res.status(400).json(data);
      }
    } else {
      console.log(`HTTP Method: ${req.method} --- Unsupported HTTP Method`);
      res.status(400).json([]);
    }
  } catch (error) {
    console.error(`HTTP Method: ${req.method} --- ${error}`);
    res.status(500).json([]);
  }
}
