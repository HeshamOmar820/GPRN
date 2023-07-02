// web: 280832508927-6p36e2n88hp1fflr3gbaf9351o0db99c.apps.googleusercontent.com
// ios: 280832508927-vt6b7r2btqld4lef6upabekah1kj2afg.apps.googleusercontent.com
// android: 280832508927-q7bvvr9f79rduis9r6n2h4s47a2mcpil.apps.googleusercontent.com


import {React,useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
    Ionicons,
    FontAwesome5,
    MaterialIcons,
    AntDesign,
    SimpleLineIcons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import CustomDrawer from './Drawer';
import LoginScreen from './LoginScreen';
import VerifyScreen from './VerifyScreen';


const Drawer = createDrawerNavigator();

export default function App() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawer {...props}/>}
            screenOptions={{
                headerShown:false, 
                drawerActiveBackgroundColor: '#EFA8A4',
                drawerActiveTintColor: '#000',

                drawerLabelStyle: {
                    marginLeft: -20, 
                    fontSize: 15,
                    color: '#000'
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({black}) => (
                    <AntDesign name="home" size={24} color="black" />
                )
            }}/>
            <Drawer.Screen name="Stats" component={HomeScreen} options={{
                drawerIcon: ({black}) => (
                    <Ionicons name="stats-chart-outline" size={24} color="black" />
                )
            }}/>
            <Drawer.Screen name="History" component={HomeScreen} options={{
                drawerIcon: ({black}) => (
                    <Ionicons name="ios-time-outline" size={24} color="black" />
                )
            }}/>
            <Drawer.Screen name="How it works?" component={HomeScreen} options={{
                drawerIcon: ({black}) => (
                    <MaterialCommunityIcons name="information-outline" size={24} color="black" />
                )
            }}/>
            <Drawer.Screen name="Help" component={HomeScreen} options={{
                drawerIcon: ({black}) => (
                    <Ionicons name="ios-help-circle-outline" size={24} color="black" />
                )
            }}/>
            <Drawer.Screen name="Settings" component={HomeScreen} options={{
                drawerIcon: ({black}) => (
                    <Ionicons name="settings-outline" size={24} color="black" />
                )
            }}/>
        </Drawer.Navigator>
    );
    
}

function HomeScreen (){
    
    const navigation = useNavigation();
    const { width, height } = Dimensions.get("window");

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="absolute top-12 left-5 bg-slate-100 rounded-full p-1" onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={28} color="black"  onPress={() => navigation.openDrawer()}/>
                
            </View>
            <View className="w-full px-5 mt-14">
                <Text className="text-2xl">
                    Hello,
                </Text>
                <Text className="text-6xl font-bold mt-2">
                    Hesham
                </Text>
                <View className="flex mt-10">
                    <View className="flex flex-row justify-between">
                        <Text>
                            Just now
                        </Text>
                        <Ionicons name="sync-outline" size={20} color="black"/>
                    </View>
                    <View className="grid grid-cols-2 gap-4 mt-3">
                        <View className="bg-[#FDEAF0] text-red-600 flex flex-row justify-between rounded-lg p-6">
                            <View className="flex flex-row justify-between">
                                <View className="flex justify-center items-center">
                                    <Ionicons name="heart-outline" size={26} color="#E10E73"/>
                                    <Text className="text-[#E10E73] text-lg">
                                        Heart Rate
                                    </Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center space-x-2">
                                    <Text className="text-5xl font-bold text-[#E10E73]">
                                        78
                                    </Text>
                                    <Text className="text-lg text-[#E10E73]">
                                        bpm
                                    </Text>
                            </View>
                        </View>
                        <View className="bg-[#F3E9FB] text-red-600 flex flex-row justify-between rounded-lg p-6">
                            <View className="flex flex-row justify-between">
                                <View className="flex justify-center items-center">
                                    <Ionicons name="bicycle-outline" size={26} color="#8500CD"/>
                                    <Text className="text-[#8500CD] text-lg">
                                        Exercise
                                    </Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center space-x-2">
                                    <Text className="text-5xl font-bold text-[#8500CD]">
                                        24
                                    </Text>
                                    <Text className="text-lg text-[#8500CD]">
                                        min
                                    </Text>
                            </View>
                        </View>
                        <View className="bg-[#E5F8F7] flex flex-row justify-between rounded-lg p-6">
                            <View className="flex flex-row justify-between ">
                                <View className="flex justify-center items-center ml-4">
                                    <Ionicons name="walk-outline" size={26} color="#00B8AE"/>
                                    <Text className="text-[#00B8AE] text-lg">
                                        Walk
                                    </Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center space-x-2">
                                    <Text className="text-5xl font-bold text-[#00B8AE]">
                                        2.1
                                    </Text>
                                    <Text className="text-lg text-[#00B8AE]">
                                        km
                                    </Text>
                            </View>
                        </View>
                        <View className="bg-[#E8F1FC] flex flex-row justify-between rounded-lg p-6">
                            <View className="flex flex-row justify-between ">
                                <View className="flex justify-center items-center ml-4">
                                    <Ionicons name="bed-outline" size={26} color="#3466D6"/>
                                    <Text className="text-[#3466D6] text-lg">
                                        Sleep
                                    </Text>
                                </View>
                            </View>
                            <View className="flex flex-row items-center space-x-2">
                                    <Text className="text-5xl font-bold text-[#3466D6]">
                                        8
                                    </Text>
                                    <Text className="text-lg text-[#3466D6]">
                                        hrs
                                    </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
}
