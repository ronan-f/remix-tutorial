import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });

  return {
    joke: randomJoke.content,
  };
};

export default function JokesIndexRoute() {
  const data = useLoaderData();
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.joke}</p>
    </div>
  );
}
