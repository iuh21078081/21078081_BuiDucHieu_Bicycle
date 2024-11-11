import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Screen3 = ({ route }) => {
  const { item } = route?.params;
  
  const mappingImage = {
    "../assets/bione-removebg-preview.png": require("../assets/bikehome.png"),
    "../assets/bike2.png": require("../assets/bike2.png"),
    "../assets/bike3.png": require("../assets/bike3.png"),
    "../assets/bike4.png": require("../assets/bike4.png"),
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:"#E941411A" }}>
        <Image
          source={mappingImage[item.image]}
          style={{ flex: 1, resizeMode: 'contain'}}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>15% OFF 1350$</Text>
          <Text style={{ textDecorationLine: 'line-through' }}>449$</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>Description</Text>
        <Text>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.{' '}
        </Text>
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e94141',
              padding: 10,
              borderRadius: 30,
              width: '80%',
            }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>
              Add to card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 44,
    padding: 20
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    color: 'red',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  MenuItemCover: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'orange',
  },
  MenuItem: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1, 
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    height: 150,
    width: 150,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#F7BA8326',
    position: 'relative',
    margin: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  itemImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Screen3;
