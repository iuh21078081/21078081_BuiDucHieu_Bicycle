// AddBikeScreen.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addBike } from '../redux/sliceBike';

const AddBikeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    type: 'Road',
    image: '../assets/bike2.png', 
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.price) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
     dispatch(addBike(formData))
      Alert.alert('Success', 'Bike added successfully', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to add bike: ' + error.message);
    }
  };

  const images = [
    { key: '../assets/bikehome', preview: require('../assets/bikehome.png') },
    { key: '../assets/bike2.png', preview: require('../assets/bike2.png') },
    { key: '../assets/bike3.png', preview: require('../assets/bike3.png') },
    { key: '../assets/bike4.png', preview: require('../assets/bike4.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Bike</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bike Name *</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            placeholder="Enter bike name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price *</Text>
          <TextInput
            style={styles.input}
            value={formData.price}
            onChangeText={(text) => setFormData({ ...formData, price: text })}
            placeholder="Enter price"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formData.type}
              onValueChange={(itemValue) =>
                setFormData({ ...formData, type: itemValue })
              }
              style={styles.picker}
            >
              <Picker.Item label="Road Bike" value="Road" />
              <Picker.Item label="Mountain Bike" value="Mountain" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Image</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              {images.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.imageOption,
                    formData.image === img.key && styles.selectedImage,
                  ]}
                  onPress={() => setFormData({ ...formData, image: img.key })}
                >
                  <Image source={img.preview} style={styles.imagePreview} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Bike</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    marginBottom: 30,
    marginTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  form: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  imageOption: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 5,
  },
  selectedImage: {
    borderColor: '#FF4500',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddBikeScreen;