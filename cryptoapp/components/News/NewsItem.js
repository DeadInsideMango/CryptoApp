import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { colorPallet } from '../../logic/ColorPallet';
import SmallText from '../SmallText';

const NewsItem = ({ item, index }) => {

    const toUpperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

  return (
    <View style={styles.container}>
        {/* Header */}
        <View style={{ width: '100%', height: '40%',  backgroundColor: colorPallet.color_1, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
            <View style={{ width: '90%', height: '100%', padding: 10, alignSelf: 'center', flexDirection: 'column'}}>
                <Text style={{ fontWeight: 'bold', color: colorPallet.color_6 }}>{item.name}</Text>
            </View>
        </View>
        {/* End of the Header */}

        {/*content*/}
        <View style={{ flexDirection: 'row', width: '100%', height: '60%'}}>

            <View style={{ width: '50%', height: '100%'}}>
                <ScrollView 
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ 
                        width: '80%',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        alignSelf: 'center', 
                        borderRightWidth: .25
                    }}>
                    <Text>
                        {item.description}
                    </Text>
                </ScrollView>
            </View>

            <View style={{ justifyContent: 'space-evenly', width: '70%', flexDirection: 'column', height: '60%', alignSelf: 'center', right: 10}}>
                <SmallText text={'Publis date:'} num={new Date(item.datePublished).toLocaleDateString()}/>
                <SmallText text={'Provider:'} num={toUpperCase(item.provider[0].name)}/>
            </View>

        </View>
        {/*end of content*/}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: colorPallet.color_6,
        borderRadius: 20
    }
});

export default NewsItem;