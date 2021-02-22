// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../config/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '20@ms'
  },
  headerView: {
    justifyContent: 'center',
    backgroundColor:colors.COLOR_WHITE,
  },
  headerTitle: {
    padding: '25@ms',
    color: colors.COLOR_SECONDARY,
    fontSize: 24,
  },
  login: {
    padding: 8,
  },
  loginButtonContainer: {
    marginVertical: '10@ms',
    marginHorizontal: '20@ms'
  },
  noAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60@ms',
  },
  noAccountLabel: {
    fontSize: 14,
    color: colors.COLOR_GREY,
    textAlign: 'center',
    marginHorizontal: '10@ms',
  },
  divider: {
    backgroundColor: colors.COLOR_DIVIDER,
    height: '0.5@ms',
    flex: 1,
  },
  signupButtonContainer: {
    marginVertical: '25@ms'
  },
  buttontTitleStyle:{
    fontSize:16
  },
});

export default styles;
