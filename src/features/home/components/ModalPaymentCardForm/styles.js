// @flow Copyright ©2020 ChekMarc, Inc. All Rights Reserved.
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../../config/colors';

const styles = ScaledSheet.create({
  baseContainer: {
    flex: 1,
  },
  headerView: {
    height: '60@ms',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.COLOR_DIVIDER
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
  },
  cardInput: {
    marginTop: '50@ms'
  },
  buttonConfirm: {
    marginHorizontal: '50@ms',
    marginVertical: '30@ms'
  },
  buttonCancel: {
    marginHorizontal: '50@ms'
  }
});

export default styles;
