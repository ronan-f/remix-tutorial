import stylesUrl from "../styles/index.css";

export default function IndexRoute() {
  return <div>Hello from the index</div>;
}

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}
