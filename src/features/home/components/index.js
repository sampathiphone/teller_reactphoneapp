// @flow Copyright ©2020 ChekMarc, Inc. All Rights Reserved.
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { images } from '../../../config/images';

function CurrencyButton(props) {
  const [dollarArray, setDollerArray] = useState([
    { value: '1', currency: '$', isSelected: false },
    { value: '10', currency: '$', isSelected: true },
    { value: '20', currency: '$', isSelected: false },
    { value: '50', currency: '$', isSelected: false },
    { value: '100', currency: '$', isSelected: false },
    { value: 'Others', isSelected: false },
  ]);
  const [referesh, setReferesh] = useState(false);
  const [currencyValue, onChangeCurrencyValue] = useState('');
  const onSelect = (selectedIndex) => {
    const tempArray = dollarArray;
    tempArray.forEach((item, index) => {
      if (index === selectedIndex) {
        tempArray[selectedIndex].isSelected = !tempArray[selectedIndex].isSelected;
        props.onSelect(tempArray[selectedIndex].value);
      } else {
        tempArray[index].isSelected = false;
      }
    });
    setDollerArray(tempArray);
    setReferesh(!referesh);
  };

  return (
    <View style={[styles.container, props.style]}>
      <FlatList
        data={dollarArray}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.mainConatiner}
              onPress={() => onSelect(index)}>
              <View
                style={[
                  styles.buttonContainer,
                  item.isSelected ?
                    [styles.selectedButton, { backgroundColor: colors.COLOR_CURRENCY_BUTTON_BACKGROUND }]
                    : styles.unselectedButton,
                ]}>
                {item.value === 'Others' ?

                  <TextInput
                    placeholder={'$ Others'}
                    style={[styles.otherContribution, { color: colors.COLOR_SUB_TITLE_TEXT }]}
                    onTouchStart={() => onSelect(index)}
                    keyboardType="number-pad"
                    value={currencyValue}
                    onChangeText={(text) => {
                      onChangeCurrencyValue(text)
                      props.onSelect( text ?? 0);
                    }
                    } />
                  :
                  < Text
                    style={[
                      item.isSelected ? styles.selectedButtonTitle
                        : styles.unselectedButtonTitle
                    ]}>
                    {` ${item.currency}${item.value}`}
                  </Text>
                }

                {item.isSelected &&
                  <View style={styles.circle}>
                    <Image
                      source={images.icons.checkBoxTick} />
                  </View>}
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.value}
        extraData={referesh} />
    </View>
  );
}

export const CurrencyButtonComponent = CurrencyButton;
