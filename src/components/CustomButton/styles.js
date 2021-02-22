// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../config/colors';

export const styles = ScaledSheet.create({
  container: {
    borderRadius: '5@ms',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50@ms',
    flexDirection:'row'
  },
  primaryButtonStyle: {
    backgroundColor: colors.COLOR_PRIMARY
  },
  secondaryButtonStyle: {
    backgroundColor: colors.COLOR_SECONDARY
  },
  borderBlueButtonStyle: {
    backgroundColor: colors.COLOR_WHITE,
    borderWidth: '1@ms',
    borderColor: colors.COLOR_BORDER_BLUE
  },
  borderRedButtonStyle: {
    backgroundColor: colors.COLOR_WHITE,
    borderWidth: '1@ms',
    borderColor: colors.COLOR_RED
  },
  borderBlackButtonStyle: {
    backgroundColor: colors.COLOR_WHITE,
    borderWidth: '1@ms',
    borderColor: colors.COLOR_BLACK
  },
  titleRegular: {
    fontSize: 16,
  },
  titleMedium: {
    fontSize: 16,
  },
  borderGrayButtonStyle:{
    borderWidth: '1@ms',
    borderColor: colors.COLOR_BORDER_GREY
  },
  buttonIcon:{
    height:'18@ms',
    width:'13@ms',
    marginHorizontal:'10@ms'
  },
  greenTitleRegular: {
    fontSize: 20,
  },
});
