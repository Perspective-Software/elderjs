import get from 'lodash.get';

/**
 * Helper function to allow permalinks to be referenced by obj.routeName.
 * It also handles adding of the /dev prefix when settings.server is true.
 *
 * @param {Object} { routes, settings = {} }
 * @returns {Object} This object allows for referencing permalinks as obj.routeName()
 */
const permalinks = ({ routes, settings }) =>
  Object.keys(routes).reduce((out, cv) => {
    const prefix = settings.prefix || get(settings, 'server.prefix', '');

    // eslint-disable-next-line no-param-reassign
    out[cv] = (data) => `${prefix}${routes[cv].permalink({ request: data, settings })}`;
    return out;
  }, {});

export default permalinks;
