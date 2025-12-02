// components/KostCard.tsx
import React from 'react';
// 1. Ganti 'Image' dengan 'ImageBackground'
import {
    ImageBackground,
    StyleSheet,
    Text, // <-- Ganti ini
    TouchableOpacity,
    View
} from 'react-native';
import { KostItem } from '../types'; // Pastikan tipe ini sesuai dengan API

interface KostCardProps {
  item: KostItem;
  onPress: () => void;
}

export default function KostCard({ item, onPress }: KostCardProps) {
  
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {/* 2. Gunakan ImageBackground, bukan Image */}
      <ImageBackground
        // Use bundled local image if provided, otherwise fallback to remote URL
        source={item.imageSource ? item.imageSource : { uri: item.gambar_url }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* 4. Buat View 'overlay' agar teks terbaca */}
        <View style={styles.overlay}>
          
          {/* 5. Sesuaikan dengan nama field API: 'nama' */}
          <Text style={styles.name}>{item.nama}</Text>

          {/* 6. Sesuaikan dengan nama field API: 'harga' dan 'satuan_harga' */}
          <Text style={styles.price}>
            Rp. {item.harga} / {item.satuan_harga}
          </Text>

          <Text style={styles.details}>Selengkapnya {'>>'}{'>'}</Text> 
        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
}

// 7. Ganti total 'styles' agar sesuai dengan desain ImageBackground
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2A4B3A', // Warna fallback jika gambar gagal dimuat
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 15,
    overflow: 'hidden', // Penting agar background terpotong rapi
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageBackground: { // Style untuk ImageBackground
    width: '100%',
    height: 200, // Atur tinggi kartu
    justifyContent: 'flex-end', // Dorong teks ke bagian bawah
  },
  overlay: { // Style untuk lapisan gelap
    backgroundColor: 'rgba(0, 0, 0, 0.45)', // Hitam transparan
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Teks jadi putih
  },
  price: {
    fontSize: 16,
    color: '#eee', // Teks jadi putih
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: '#ccc', // Teks jadi putih
    marginTop: 5,
  },
});