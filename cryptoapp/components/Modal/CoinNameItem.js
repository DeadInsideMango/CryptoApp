import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const CoinNameItem = ({ coinName, symbol }) => {
    
    //Component renders coin name on coin page

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{coinName}</Text>
      <Text style={styles.symbol}>{symbol}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'baseline'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#34495E'
    },
    symbol: {
        fontWeight: '150',
        fontSize: 25,
        color: '#34495E'
    }
});

export default CoinNameItem;