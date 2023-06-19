import { FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import React from 'react';
import ListHeader from './ListHeader';
import Separator from './Separator';
import ListFooter from './ListFooter';
import Item from './Main/Item';
import NewsItem from './News/NewsItem';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const List = (props) => {

    //Component is used to render and locate data on users screen as a list

    const flatListRef = React.useRef();
    const navigation = useNavigation();
    const route = useRoute();

    //function that scrolls list from bottom to top
    const scrollToTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    };

    const [refreshing, setRefreshing] = React.useState(false);

    //timeout function
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    };
    
    //function that handles onrefresh gesture
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1500).then(() => [props.fun(), setRefreshing(false)]);
    }, []);

    //Component that renders correct list item depending on screens name
    const renderItem = ({item, index}) => {
        if(route.name === 'Home') {
            return(
                <TouchableOpacity onPress={() => navigation.getParent().navigate('Modal', {uuid: item.uuid})}>
                    <Item item={item} index={index}/>
                </TouchableOpacity>  
            )
        } else {
            return(
                <NewsItem item={item} index={index}/>
            )
        }
       
    }

    //return method renders a list of given items
return (
    <FlatList
        style={{ width: '90%' }}
        ref={flatListRef}
        ListEmptyComponent={<ActivityIndicator/>}
        data={props.data}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={<ListFooter scroll={scrollToTop}/>}
        ItemSeparatorComponent={Separator}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentInsetAdjustmentBehavior={"automatic"}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }
    />
    )
}

export default List;