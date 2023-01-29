import { Link as ReactRouterLink } from 'react-router-dom';
import { RouteLabels } from './Routes';

const Link = <To extends RouteLabels>(props:
    { to: To } & Omit<React.ComponentProps<typeof ReactRouterLink>, 'to'>
) => {
    return (
        <ReactRouterLink {...props} />
    );
};

export default Link;