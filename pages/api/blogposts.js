import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const posts = await db
    .collection("blogposts")
    .find()
    .sort({date: 1})
    .toArray();

  res.json(posts);
};