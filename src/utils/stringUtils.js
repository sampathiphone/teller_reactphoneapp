// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import moment from 'moment';

export const getInitials = (name) => {
  const initials = Array.prototype.map
    .call(name.split(' '), (x) => {
      return x.substring(0, 1).toUpperCase();
    })
    .join('');

  return initials.substring(0, 2);
};

export const dobMaximumDateRequired = () => {
  return moment().subtract(18, 'years').toDate();
};

export function validatePassword(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);
}

export function validateEmailAddress(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
