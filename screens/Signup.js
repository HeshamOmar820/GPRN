import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, TextInput,Picker, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="h-full px-8">
                    <View className="items-center">
                        <Text className="text-4xl pt-6">Give us some basic indormation</Text>
                    </View>
                    <View className="mb-2">
                        <Text className="text-xl ">Name: </Text>
                        <TextInput placeholder="eg. Hesham" className="border-slate-300 border pl-1" keyboardType="default" />
                    </View>
                    <View className="mb-2">
                        <Text className="text-xl ">Age: </Text>
                        <TextInput placeholder="eg. 23" className="border-slate-300 border pl-1" keyboardType="phone-pad" />
                    </View>
                    <View className="mb-2">
                        <Text className="text-xl ">Email Adress: </Text>
                        <TextInput placeholder="eg. user@examle.com" className="border-slate-300 border pl-1" keyboardType="email-address" />
                    </View>
                    <View className="mb-2">
                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen
