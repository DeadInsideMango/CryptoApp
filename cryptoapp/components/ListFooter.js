import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colorPallet } from '../logic/ColorPallet';

const ListFooter = (props) => {
  //Component renders footer for a list of data on a home screen or on a news sceer
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.scroll} style={styles.button}>
          <View style={styles.text}>
            <Text style={{color: colorPallet.color_6}}>Scroll to top</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
    }, 
    button: {
      height: '80%',
      width: '60%', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorPallet.color_1, 
      borderRadius: 20
    }
})

export default ListFooter;