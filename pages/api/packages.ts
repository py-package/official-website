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
  const filePath = path.join(process.cwd(), "data/packages.json");
  return new Promise<void>(async (resolve) => {
    fsPromises
      .readFile(filePath)
      .then((value) => {
        res.send(JSON.parse(value as any));
        return resolve();
      })
      .catch((_) => {
        res.status(422).end();
        return resolve();
      });
  });
}
