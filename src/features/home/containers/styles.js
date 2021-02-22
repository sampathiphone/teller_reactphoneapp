// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: { flex: 1,
    marginHorizontal: '22@ms'
  },
  titleText: {
    fontSize: 22,
    marginVertical: '18@ms',
  },
  bannerImage: {
    height: '109@ms',
    width: '100%',
    borderRadius: '8@ms',
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: '20@ms',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'left',
    lineHeight: '22@ms',
  },
  paymentButtonContainer: {
    marginVertical: '10@ms',
    marginHorizontal: '20@ms'
  },
  currencyButtonContainer: {
    height: '120@ms',
    marginVertical: '40@ms',
    marginHorizontal: '5@ms',
  },
});

export default styles;
