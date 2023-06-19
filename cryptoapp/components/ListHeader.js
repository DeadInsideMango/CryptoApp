import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { config } from '../logic/Config';

const ListHeader = (props) => {

  //Component renders header element of dat alist

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{config.date.toLocaleDateString('en-us', { weekday: 'long' })} </Text>
      <Text>{config.date.toLocaleDateString()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'baseline'
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#34495E'
    },
    smallHeader: {
        fontWeight: '150',
        fontSize: 25,
        color: '#34495E'
    }
});

export default ListHeader;