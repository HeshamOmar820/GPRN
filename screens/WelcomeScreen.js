import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView>
            <View className="h-full">
                <View className="bg-slate-200 flex-1 justify-center items-center pb-4">
                    <Image
                        source={ require('../assets/HomeHeaderImage.png')}
                        className="w-auto h-auto flex content-center justify-center"
                    />
                </View>
                <View className="flex-1 justify-center items-center relative">
                    <Text className="text-5xl w-4/5 text-justify absolute left-10 top-24">Welcome to your personal health care app</Text>
                    <View onPress={()=>{navigation.navigate('verify')}} className="absolute right-10 bottom-20 flex-row space-x-1 justify-center items-center">
                        <Text className="text-2xl">
                            Sign Up
                        </Text>
                            <AntDesign name="rightcircle" size={35} color="navy"/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default WelcomeScreen
