// @flow Copyright ©2020 ChekMarc, Inc. All Rights Reserved.
import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../config/colors';

const DEVICE_WIDTH = Dimensions.get('screen').width;
const NUMBER_OF_COLUMN = 3;

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  mainConatiner:{
    flex:1,
    justifyContent:'space-between',
    alignContent:'center'
  },
  buttonContainer: {
    height: '45@ms',
    // width: (DEVICE_WIDTH - 100) / NUMBER_OF_COLUMN,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1@ms',
    marginVertical: '10@ms',
    borderRadius: '5@ms',
    marginHorizontal:'8@ms'
  },
  circle: {
    height: '20@ms',
    width: '20@ms',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-10@ms',
    right: '-5@ms',
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: '10@ms'
  },
  selectedButton:{
    borderColor: colors.COLOR_PRIMARY
  },
  unselectedButton:{
    borderColor: colors.BORDER_CIRCLE_GRAY
  },
  selectedButtonTitle:{
    color:colors.COLOR_PRIMARY
  },
  unselectedButtonTitle:{
    color:colors.COLOR_BLACK
  },
  otherContribution: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  }

});
