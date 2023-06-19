import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Container = (props) => {
  //Component is used to locate and set up data in the screen (reused component)
  return (
    <SafeAreaView style={styles.constainer}>
        <StatusBar style='light'/>
        { props.children }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 constainer: {
    flex: 1,
    backgroundColor: '#CACFD2',
    alignItems: 'center',
    justifyContent: 'center',    
 }
});

export default Container;