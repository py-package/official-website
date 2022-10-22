// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";
import path from "path";

type Data = {
  name?: string;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.join(process.cwd(), "data/tutorials.json");
  fsPromises
    .readFile(filePath)
    .then((value) => {
      res.status(200).json(JSON.parse(value as any));
    })
    .catch((_) => {
      res.status(422).json({
        message: "Unable to process data",
      });
    });
}
