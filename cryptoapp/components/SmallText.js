import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SmallText = (props) => {
  //Renders small text elemts on the screen
  return (
    <View style={styles.smallText}>
        <Text style={{ fontWeight: '500' }}>{props.text} </Text>
        <Text>{props.num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    smallText: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%',
        flexDirection: 'row', 
        paddingLeft: 20
      }
});

export default SmallText;