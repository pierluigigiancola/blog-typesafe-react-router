
const Routes = {
    RGB: '/rgb/:red/:green/:blue',
    HSL: '/hsl/:hue/:saturation/:lightness',
} as const;

export type RouteLabels = keyof typeof Routes;

export type RoutePaths = typeof Routes[RouteLabels];

export default Routes;