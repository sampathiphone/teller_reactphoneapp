// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { all } from 'redux-saga/effects';
import { loginSagas } from '../features/login/sagas';

// export default [loginSaga];

export default function *rootSaga() {
  yield all([...loginSagas]);
}
