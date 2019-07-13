import formatQuery from '@indlekofer/format_query';

export default (url, query, hash) => {
  if (typeof query == 'undefined' || query === null || query === false) query = '';
  if (typeof query != 'string') query = formatQuery(query);
  else query = query.trim();

  if (typeof hash == 'undefined' || hash === null || hash === false) hash = '';
  else hash = '#' + encodeURIComponent(hash);

  if (query.length == 0) return url + hash;
  if (url.indexOf('?') != -1) {
    return [ url, query ].join('&') + hash;
  } else {
    return [ url, query ].join('?') + hash;
  }
};
