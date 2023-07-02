import {React, useState}from "react";
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';


const VerifyScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return(
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1">
                <View
                    className="bg-white rounded-full shadow-2xl absolute top-16 left-3 z-10 border-black border-[1px]"
                    >
                    <Entypo name="chevron-left" size={50} color="black" onPress={() => navigation.goBack()}/>
                </View>
                <View className="flex-1 justify-center items-start px-3 bg-white">
                    
                    <View className="flex items-center justify-center w-full">
                        <TouchableOpacity
                            className="bg-black flex-row w-fit px-3 rounded-full items-center justify-center space-x-3 py-3 my-3"
                            onPress={() => navigation.navigate('verify')}
                            >
                            <Image
                                source={require('../assets/Google.png')}
                                className="h-5 w-5"
                                />
                            <Text className="text-white text-xl">
                                Continue With Google 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
};

export default VerifyScreen;
