// Screen2.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { fetchBikes } from '../redux/sliceBike';

const Screen2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.items);
  const status = useSelector((state) => state.bikes.status);
  const error = useSelector((state) => state.bikes.error);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  const mappingImage = {
    "../assets/bione-removebg-preview.png": require("../assets/bikehome.png"),
    "../assets/bike2.png": require("../assets/bike2.png"),
    "../assets/bike3.png": require("../assets/bike3.png"),
    "../assets/bike4.png": require("../assets/bike4.png"),
  };

  const filteredBikes = bikes.filter(bike => 
    selectedType === 'All' ? true : bike.type === selectedType
  );

  const BikeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detail', { item })}
    >
      <TouchableOpacity style={styles.heartIcon}>
        <AntDesign name="hearto" size={18} color="black" />
      </TouchableOpacity>
      <Image style={styles.itemImage} source={mappingImage[item.image]} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>$ {item.price}</Text>
    </TouchableOpacity>
  );

  const MenuButton = ({ title, type }) => (
    <TouchableOpacity 
      style={[
        styles.MenuItemCover,
        selectedType === type && styles.selectedMenuItem
      ]}
      onPress={() => setSelectedType(type)}
    >
      <Text style={[
        styles.MenuItem,
        selectedType === type && styles.selectedMenuText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  if (status === 'loading') {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF4500" />
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => dispatch(fetchBikes())}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The World's Best Bikes</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddBike')}
        >
          <AntDesign name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.menu}>
          <MenuButton title="All" type="All" />
          <MenuButton title="Road Bike" type="Road" />
          <MenuButton title="Mountain" type="Mountain" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredBikes}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({ item }) => <BikeItem item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  headerText: {
    fontSize: 24,
    color: '#FF4500',
    fontWeight: 'bold',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#FF4500',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  MenuItemCover: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedMenuItem: {
    backgroundColor: '#FFA500',
  },
  MenuItem: {
    color: '#666666',
    fontSize: 15,
    fontWeight: '600',
  },
  selectedMenuText: {
    color: '#FFFFFF',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    height: 180,
    width: '45%',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#F7BA8326',
    position: 'relative',
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 15,
  },
  itemImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  itemName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  itemPrice: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Screen2;