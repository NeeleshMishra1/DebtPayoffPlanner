import React, { useRef } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { CurrencyPickerComponent } from '@youssefprodev/rn-currency-picker';

const CountryCurrencyPicker = ({
  initialCurrency = 'USD',
  darkMode = false,
  onSelectCurrency,
  onOpen,
  onClose,
}) => {
  const currencyPickerRef = useRef(null);

  return (
    <View style={styles.container}>
      <Button
        title="Open Currency Picker"
        onPress={() => currencyPickerRef.current?.open()}
      />
      <Button
        title="Close Currency Picker"
        onPress={() => currencyPickerRef.current?.close()}
      />
      <CurrencyPickerComponent
        currencyPickerRef={(ref) => (currencyPickerRef.current = ref)}
        enable={true}
        darkMode={darkMode}
        currencyCode={initialCurrency}
        showFlag={true}
        showCurrencyName={true}
        showCurrencyCode={true}
        onSelectCurrency={(data) => {
          console.log('Selected Currency:', data);
          if (onSelectCurrency) onSelectCurrency(data);
        }}
        onOpen={() => {
          console.log('Picker opened');
          if (onOpen) onOpen();
        }}
        onClose={() => {
          console.log('Picker closed');
          if (onClose) onClose();
        }}
        showNativeSymbol={true}
        showSymbol={false}
        containerStyle={{
          container: {},
          flagWidth: 25,
          currencyCodeStyle: {},
          currencyNameStyle: {},
          symbolStyle: {},
          symbolNativeStyle: {},
        }}
        modalStyle={{
          container: {},
          searchStyle: {},
          tileStyle: {},
          itemStyle: {
            itemContainer: {},
            flagWidth: 25,
            currencyCodeStyle: {},
            currencyNameStyle: {},
            symbolStyle: {},
            symbolNativeStyle: {},
          },
        }}
        title="Select a Currency"
        searchPlaceholder="Search for a currency"
        showCloseButton={true}
        showModalTitle={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default CountryCurrencyPicker;
