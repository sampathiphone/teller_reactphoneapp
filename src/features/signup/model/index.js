// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
export default class UserModel {

    username: string;

    email: string;

    phoneNumber: string;

    dob: string;

    password: string;

    constructor(
      username = '',
      email = '',
      phoneNumber = '',
      dob = '',
      password = ''
    ) {
      this.username = username;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.dob = dob;
      this.password = password;
    }
}
