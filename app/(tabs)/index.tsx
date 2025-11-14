// app/(tabs)/index.tsx

import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Pastikan Anda memiliki gambar ini di folder assets
const backgroundImage = require('../../assets/images/Home.jpg'); 
// Ganti 'home_bg.jpg' dengan nama file gambar latar Anda

export default function HomeScreen() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <View style={styles.contentContainer}>
        {/* Overlay transparan di belakang teks */}
        <View style={styles.textOverlay}>
          <Text style={styles.title}>Selamat Datang di Kost Yuhu</Text>
          <Text style={styles.subtitle}>Tenang, Aman dan Nyaman</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Pusatkan secara vertikal
    alignItems: 'center',     // Pusatkan secara horizontal
    backgroundColor: 'rgba(0,0,0,0.2)', // Lapisan agak gelap di seluruh layar
  },
  textOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Overlay putih transparan
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2A4B3A',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
  },
});