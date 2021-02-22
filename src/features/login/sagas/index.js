// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import loginSaga from './loginSaga';

export const loginSagas = [takeLatest(types.LOGIN_REQUEST, loginSaga)];
