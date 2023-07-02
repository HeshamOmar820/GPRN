
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import VerifyScreen from './screens/VerifyScreen';
import HomeScreen from './screens/HomeScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';
import * as React from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import {auth} from "./firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const Stack = createNativeStackNavigator();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: 
      "280832508927-vt6b7r2btqld4lef6upabekah1kj2afg.apps.googleusercontent.com",
    androidClientId:
      "280832508927-q7bvvr9f79rduis9r6n2h4s47a2mcpil.apps.googleusercontent.com",
  });

  const checkLocalUser = async () => {
    try {
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);

    } catch(e) {
      alert(e.message)
    }
  }

  React.useEffect(() => {
    if (response?.type == "success"){
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response] )
  
  React.useEffect(() => {
    checkLocalUser();
    const unseb = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserInfo(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        console.log("else")
      }
    });
    return () => unseb ();
  }, [])

  return userInfo ? <HomeScreen/> : <LoginScreen promptAsync={promptAsync} />
  /*
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='welcome' component={WelcomeScreen}/>
        <Stack.Screen name='verify' component={VerifyScreen}/>
        <Stack.Screen name='home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );*/
}

