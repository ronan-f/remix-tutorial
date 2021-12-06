import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const { jokeId } = params || {};

  let joke = { content: "No joke found :(" };
  if (jokeId) {
    joke = await db.joke.findUnique({
      where: { id: jokeId },
    });
  }

  return {
    joke: joke.content,
  };
};

export default function JokeRoute() {
  const data = useLoaderData();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke}</p>
    </div>
  );
}
