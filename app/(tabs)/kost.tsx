// app/(tabs)/kost.tsx

import { Href, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { KostCard } from '../../components';
import { KostItem } from '../../types';

// PASTIKAN URL INI BENAR ke Mock API Anda
const API_URL = "https://691568f284e8bd126af9c21c.mockapi.io/api/v1/kost";

export default function KostScreen() {
  
  const [kostList, setKostList] = useState<KostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // 'data' SEKARANG BERISI ARRAY JSON ANDA
        // [ { "nama": "Muslimah", ... }, { ... } ]
        setKostList(data); 
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handlePress = (item: KostItem) => {
    router.push({
      pathname: '/kost-detail/[id]', 
      // 'item.id' akan mengambil "id": "1" dari JSON Anda
      params: { id: item.id } 
    } as unknown as Href);
  };
  
  // Tampilan loading
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2A4B3A" />
        <Text>Memuat data kost...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={kostList} // Menggunakan data dari API
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // 'item' di sini adalah { "nama": "Muslimah", ... }
          // Komponen KostCard Anda akan menerima 'item' ini
          <KostCard
            item={item} 
            onPress={() => handlePress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});