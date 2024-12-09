import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          A premium online store for 
        </Text>
        <Text style={styles.headerText}>
         sporter and their stylish choice
        </Text>
      </View>

      {/* "https://res.cloudinary.com/dyj2mpgxi/image/upload/f_auto,q_auto/v1/KTTH/kg5xoj9mi4ki59u5wpck" */}
      <View style={styles.imageContainer}>
        <Image
          source={{uri:"https://ibb.co/9scXyRf"}} // You'll need to add your bike image to assets folder
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>

      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>POWER BIKE</Text>
        <Text style={styles.subtitle}>SHOP</Text>
      </View>

     
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ListBike")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5', // Light pink background
    padding: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    padding: 12,
    marginTop: 20,
    borderRadius: 4,
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 40,
    backgroundColor:"#E941411A",
    padding: 20,
    borderRadius: 10
  },
  bikeImage: {
    width: 292,
    height: 270,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    fontSize: 20,
    color: '#333333',
  },
  button: {
    backgroundColor: '#EF4444', // Red button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;