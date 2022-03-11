// models
import { fetch } from '../../models/review';
/*
  Path:
    /api/reviews

  Methods:
    GET
*/
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // handle request
      const { page, perPage, order } = req.query;
      const { data, status } = await fetch({
        page,
        perPage,
        order,
      });

      // send response
      if (status === 'success') {
        res.status(200).json(data);
      } else {
        res.status(500).json({ data: [], status });
      }
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    console.error(`HTTP Method: ${req.method} --- ${error}`);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
}
