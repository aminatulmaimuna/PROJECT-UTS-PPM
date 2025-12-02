// app/(tabs)/kost.tsx

import { Href, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { KostCard } from '../../components';
import { KOST_DATA } from '../../constants/KostDataLocal';
import { KostItem } from '../../types';

// Using local data; API removed

export default function KostScreen() {
  
  const [kostList, setKostList] = useState<KostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use local data instead of fetching from API
    setKostList(KOST_DATA as unknown as KostItem[]);
    setLoading(false);
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