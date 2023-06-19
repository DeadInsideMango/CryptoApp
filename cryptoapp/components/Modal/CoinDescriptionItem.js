import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const CoinDescriptionItem = ({ coinDescriptoin }) => {

    //Components renders coin description on the page

  return (
    <View style={styles.container}>
        <Text style={styles.header}>{'Coin Description'}</Text>
        <Text style={styles.text}>{ coinDescriptoin }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    },
    text: {
        fontSize: 15,
        fontWeight: '200',
        color: '#34495E',
        top: 5
    },
    header: {
        fontSize: 17,
        fontWeight: '400',
        color: '#34495E',
    }
});

export default CoinDescriptionItem;