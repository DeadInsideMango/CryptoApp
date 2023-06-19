import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ModalItem = ( props ) => {

  //Component renders layout for coin page

  return (
    <View style={styles.container}>
        { props.children }
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        margin: 15,
        width: '100%',
        height: '100%'
    }
});

export default ModalItem;

