import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Screen2 from './components/ListBikeScreen';
import Screen3 from './components/DetailBike';
import AddBikeScreen from './components/AddBikeScreen'
import { Provider } from 'react-redux';
import store from './redux/storeBike';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{ headerShown:false}} />
          <Stack.Screen name="ListBike" component={Screen2} options={{title:"", headerShown:false}}/>
          <Stack.Screen name="Detail" component={Screen3} options={{title:""}}/>
          <Stack.Screen name="AddBike" component={AddBikeScreen} options={{title:""}}/>
        </Stack.Navigator>
     </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
