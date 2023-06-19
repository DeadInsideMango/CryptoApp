import { Text, View } from 'react-native';
import React from 'react';

const ItemHeader = (props) => (

  //Component used to render list header element

    <View style={{height: '40%', width: '100%', flexDirection: 'row', backgroundColor: '#1A5276', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomWidth: .25, justifyContent: 'space-around'}}>
        <View 
            style={{height: '100%', width: 200, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 20}}>
          <View style={{ width: 120 }}>
            <Text style={{fontWeight: '400', fontSize: 18, color: '#ECF0F1'}}>{props.index}. {props.name}.</Text>
          </View>
        </View>
        <View style={{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: props.color}}/>
        </View>
    </View>
  );

export default ItemHeader;
