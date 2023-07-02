import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}>
        <View
          className="p-5 text-black"
        >
          <Image
            source={require('../assets/heart.png')}
            className="h-14 w-14 mb-4"
          />
          <Text
            className="font-bold text-2xl"
            >
            Hi Hesham
          </Text>
        </View>
        <View 
          className="flex-1 pt-2 bg-white"
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View 
        className="p-5 border-t-[1px] border-t-[#ccc]"
      >
        <TouchableOpacity onPress={() => {}} className="py-4">
          <View className="flex-row items-center">
            <Ionicons name="share-social-outline" size={22} />
            <Text className="text-xl ml-1">
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} className="py-4">
          <View className="flex-row items-center">
            <Ionicons name="exit-outline" size={22}/>
            <Text className="text-xl ml-1">
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;