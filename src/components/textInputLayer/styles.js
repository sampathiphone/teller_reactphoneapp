// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../config/colors';

const styles = ScaledSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.COLOR_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    height: '40@ms',
    justifyContent: 'space-between',
  },
  textInputContainer: {
    marginTop: '15@ms',
    height: '100@ms',
  },
  textInputWithDescriptionContainer: {
    marginTop: '15@ms',
    height: '135@ms'
  },
  textInputHeadingLabel: {
    fontSize: 15,
    alignSelf: 'center',
    flex: 1,
    // textAlign: 'right'
  },
  textInputLayer: {
    height: '50@ms',
    borderColor: colors.COLOR_DIVIDER,
    borderWidth: 0.75,
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: colors.COLOR_WHITE,
  },
  iconArrowDown: {
    width: '14@ms',
    height: '8@ms',
    marginLeft: '15@ms',
  },
  iconLeft: {
    marginVertical: '15@ms',
    marginLeft: '15@ms',
  },
  iconInfo: {
    width: '20@ms',
    height: '20@ms',
    marginVertical: '10@ms',
    marginRight: '7@ms'
  },
  iconRight: {
    marginVertical: '15@ms',
    marginRight: '15@ms',
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '15@ms',
    marginVertical: '5@ms',
    fontSize: 14,
    color: colors.COLOR_BLACK,
    // textAlign: 'right',
  },
  textInputPhoneNumberLayer: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: '50@ms',
  },
  countryCodeLayer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.COLOR_DIVIDER,
    borderWidth: 0.75,
    borderRadius: 7,
    flexDirection: 'row',
    backgroundColor: colors.COLOR_WHITE,
  },
  countryCodeText: {
    fontSize: 14,
  },
  mobileNumberLayer: {
    height: '50@ms',
    borderColor: colors.COLOR_DIVIDER,
    borderWidth: 0.75,
    borderRadius: 7,
    width: '59%',
    marginLeft: '15@ms',
    backgroundColor: colors.COLOR_WHITE,
  },
  descContainer: {
    height: '35@ms',
    marginVertical: '10@ms'
  },
  descContainerRight: {
    height: '35@ms',
    marginVertical: '10@ms',
    alignItems: 'flex-end'
  },
  descText: {
    fontSize: 12,
  },
  onTouch: {
    flex: 1
  }
});

export default styles;
