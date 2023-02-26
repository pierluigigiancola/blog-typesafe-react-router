import { Link as ReactRouterLink } from "react-router-dom";
import Routes, { RouteLabels, RoutesProperty } from "./Routes";

function replaceParams(path: string, params: Record<string, string>) {
  return Object.keys(params).reduce(
    (acc, key) => acc.replace(`:${key}`, params[key]),
    path
  );
}

type LinkProps<T extends RouteLabels> = {
  to: T;
  params: RoutesProperty[T]["params"];
} & Omit<React.ComponentProps<typeof ReactRouterLink>, "to">;

const Link = <To extends RouteLabels>({
  to,
  params,
  ...props
}: LinkProps<To>) => {
  return <ReactRouterLink to={replaceParams(Routes[to], params)} {...props} />;
};

export default Link;
