import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {Image} from '@rneui/themed';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from './assets/images/gaming.svg';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Main}
            name="Main"
            options={{headerShown: false}}
          />
          <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>LME!!!</Text>
      </View>
      <View>
        <Image
          source={require('./assets/images/dolphin.png')}
          style={{width: 300, height: 200, marginBottom: 20}}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonLabel}>Let's Begin!!!</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.gamingImageContainer}>
        <GamingImg style={styles.gamingImage} width={300} height={300} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  labelContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
  },
  button: {
    backgroundColor: '#ad40af',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    // fontFamily: 'Trispace-VariableFont',
  },
  gamingImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamingImage: {
    transform: [{rotate: '-15deg'}],
  },
});

export default App;
