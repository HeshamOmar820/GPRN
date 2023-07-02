import React from "react";
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { TouchableOpacity, Text, View, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
export const LoginScreen = ({promptAsync}) => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return(
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1">
                <View className="h-full">
                    <View className="bg-slate-200 flex-1 justify-center items-center pb-4">
                        <Image
                            source={ require('../assets/HomeHeaderImage.png')}
                            className="w-auto h-auto flex content-center justify-center"
                        />
                    </View>
                    <View className="flex-1 justify-center items-center relative">
                        <Text className="text-5xl w-4/5 text-justify absolute left-10 top-24">Welcome to your personal health care app</Text>
                        <TouchableOpacity onPress={()=> promptAsync()} className="absolute right-10 bottom-20 flex-row space-x-1 justify-center items-center">
                            <Text className="text-2xl">
                                Sign Up
                            </Text>
                                <AntDesign name="rightcircle" size={35} color="navy"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
};

