import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colorPallet } from '../logic/ColorPallet';
import { Ionicons } from '@expo/vector-icons';
import Main from '../components/Main/Main';
import MainNews from '../components/News/MainNews';

const Index = () => {

    //Component that renders tab navigator for moving between screens easily

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colorPallet.color_1,
                display: 'flex',
            },
            }}>
            {/*renders home screen first*/}
            <Tab.Screen name='Home' component={Main} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name="ios-home-outline" size={24} color={colorPallet.color_6} />
                ),
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    color: colorPallet.color_6
                }
            }}/>
            {/*rendres news page secondly*/}
            <Tab.Screen name='News' component={MainNews} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons name="ios-newspaper-outline" size={24} color={colorPallet.color_6} />
                ),
                tabBarLabel: 'News',
                tabBarLabelStyle: {
                    color: colorPallet.color_6
                }
            }}/>
        </Tab.Navigator>
    )

};

export default Index;
