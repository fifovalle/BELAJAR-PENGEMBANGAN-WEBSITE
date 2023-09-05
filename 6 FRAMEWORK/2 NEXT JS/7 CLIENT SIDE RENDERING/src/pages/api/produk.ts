// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveData } from "../utils/db/layanan";

type Data = {
  status: boolean;
  statuscode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("produk");
  res.status(200).json({ status: true, statuscode: 200, data });
}
