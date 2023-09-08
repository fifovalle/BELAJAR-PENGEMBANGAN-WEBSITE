// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidate: boolean;
  pesan?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.data !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidate: false, pesan: "Token Salah" });
  }
  if (req.query.data === "produk") {
    try {
      await res.revalidate("/produk/static");
      return res.json({ revalidate: true });
    } catch (error) {
      return res.status(500).send({ revalidate: false });
    }
  }
  return res.json({
    revalidate: false,
    pesan: "Pilih data mana yang mau revalidate",
  });
}
