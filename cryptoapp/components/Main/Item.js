import React from 'react';
import { StyleSheet, View } from 'react-native';
import SmallText from '../SmallText';
import ItemHeader from './ItemHeader';

const Item = ({ item, index }) => {

  //Component that is used for representation coin data from the server on a home screen
    
  // function used to format the numbers to be more readable
    const nFormatter = (num) => {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        if (num < 1000) {
          return num.toFixed(3).replace(/\.0$/, '');
        }
        return num;
    };

  return (
    <View style={[styles.itemStyle, { backgroundColor: '#ECF0F1'}]}>
      <ItemHeader index={++index} name={item.name} color={item.color}/>
       <View style={{ justifyContent: 'space-evenly', width: '70%', flexDirection: 'column', height: '60%' }}>
        <SmallText text={'Price:'} num={nFormatter(JSON.parse(item.price))}/> 
        <SmallText text={'Market Cap:'} num={nFormatter(JSON.parse(item.marketCap))}/>
        <SmallText text={'Daily Change:'} num={`${item.change}%`}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    itemStyle: {
        width: '100%', 
        height: 150, 
        flexDirection: 'column', 
        justifyContent: 'space-center', 
        borderRadius: 20,
      },
});

export default Item;
