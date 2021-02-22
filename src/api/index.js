// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import ApiConstants from './ApiConstants';

export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { token }),
    },
    method,
    ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then((resp) => resp.json())
    .then((json) => json)
    .catch((error) => error);
}
