export const getQueryParam = param => {
  let match = window.location.search.match(param + '=([^&]*)');
  return match ? match[1] : undefined;
};

export const updateURL = (param, value) => {
  let search = window.location.search.replace('?', '').split('&');
  
  let params = search.map((item) => {
    let keys = item.split('=');
    let obj = {};
    obj[keys[0]] = keys[1];
    return obj;
  }).reduce((obj, item) => {
    obj[Object.keys(item)] = item[Object.keys(item)];
    return obj;
  }, {});

  params[param] = value;

  let paramsURI = Object.entries(params).map(item => {
    return item.join('=');
  }).join('&');

  let newUrl = `${window.location.origin}${window.location.pathname}?${paramsURI}`;
  
  if (window.history.pushState) {
    window.history.pushState({ path: newUrl }, '', newUrl);
  }
};
