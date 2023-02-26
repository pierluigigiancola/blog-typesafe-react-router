const Routes = {
  RGB: "/rgb/:red/:green/:blue",
  HSL: "/hsl/:hue/:saturation/:lightness",
} as const;

export type TRoutes = typeof Routes;

export type RouteLabels = keyof TRoutes;

export type RoutePaths = typeof Routes[RouteLabels];

type ParseRouteParams<T extends string> =
  T extends `${infer _}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ParseRouteParams<Rest>]: string }
    : T extends `${infer _}:${infer Param}`
    ? { [K in Param]: string }
    : {};

export type RoutesProperty = {
  [K in RouteLabels]: {
    path: K;
    params: ParseRouteParams<typeof Routes[K]>;
  };
};

export default Routes;
