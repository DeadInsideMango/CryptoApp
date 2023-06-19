import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import React from 'react';

const URLItem = ({ websiteUrl }) => {

    //Component renders coin website element on modal page and allows to open given url in webbrowser 

  return (   
    <View style={styles.container}>
        <Text style={styles.text}>{'Coin website:'}</Text>
        <Button title={websiteUrl} onPress={() => {
            Linking.canOpenURL(websiteUrl)
            .then(supported => {
                if (!supported) {
                    alert('Cannot open url' + websiteUrl)
                } else {
                    return Linking.openURL(websiteUrl)
                }
            })
            .catch(err => console.log(err));
        }}/>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    text:{
        color: '#34495E',
        fontSize: 17,
        fontWeight: '400'
    }
})

export default URLItem;