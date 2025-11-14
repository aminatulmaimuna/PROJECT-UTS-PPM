// app/(tabs)/about.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Bagian About */}
      <View style={styles.section}>
        <Text style={styles.title}>Tentang Kami</Text>
        <Text style={styles.text}>
          Sistem Informasi Indekost ini dirancang untuk memudahkan pencari kost dalam
          menemukan tempat tinggal yang sesuai berdasarkan lokasi, fasilitas, dan harga, serta
          membantu pemilik kost dalam mengelola data kamar dan penyewa.
        </Text>
      </View>

      {/* Bagian Kontak Info */}
      <View style={styles.section}>
        <Text style={styles.title}>Kontak Info</Text>
        <Text style={styles.text}>📞 +62897543890</Text>
        <Text style={styles.text}>✉️ yuhu.kost@gmail.com</Text>
      </View>

      {/* Bagian Tim Pengembang */}
      <View style={styles.section}>
        <Text style={styles.title}>Tim Pengembang</Text>
        <Text style={styles.teamMember}>Aminatul Maimunah</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    margin: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2A4B3A',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  teamMember: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});