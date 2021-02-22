// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  return Api(
    `${ApiConstants.LOGIN  }?username=${  username  }&password=${  password}`,
    null,
    'post',
    null,
  );
}
