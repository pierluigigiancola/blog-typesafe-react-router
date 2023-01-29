import { Link as ReactRouterLink } from "react-router-dom";
import Routes, { RouteLabels } from "./Routes";

function replaceParams(path: string, params: Record<string, string>) {
  return Object.keys(params).reduce(
    (acc, key) => acc.replace(`:${key}`, params[key]),
    path
  );
}

const Link = ({
  to,
  params = {},
  ...props
}: {
  to: RouteLabels;
  params?: Record<string, string>;
} & Omit<React.ComponentProps<typeof ReactRouterLink>, "to">) => {
  return <ReactRouterLink to={replaceParams(Routes[to], params)} {...props} />;
};

export default Link;
