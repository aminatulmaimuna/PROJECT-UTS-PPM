// app/kost-detail/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { KostItem } from '../../types';

// PASTIKAN URL DASAR INI BENAR
const API_BASE_URL = "https://691568f284e8bd126af9c21c.mockapi.io/api/v1/kost";

export default function KostDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>(); // --> Mengambil "1"
  
  const [kostDetail, setKostDetail] = useState<KostItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      async function loadDetail() {
        setLoading(true);
        try {
          // Memanggil API khusus untuk ID "1"
          // cth: .../api/v1/kost/1
          const response = await fetch(`${API_BASE_URL}/${id}`); 
          const data = await response.json();
          
          // 'data' SEKARANG BERISI SATU OBJEK JSON ANDA
          // { "nama": "Muslimah", "harga": 700000, ... }
          setKostDetail(data); 
        } catch (error) {
          console.error("Gagal ambil detail:", error);
          setKostDetail(null);
        } finally {
          setLoading(false);
        }
      }
      loadDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2A4B3A" />
        <Text>Memuat detail kost...</Text>
      </View>
    );
  }

  // ... (Tampilan loading dan error)

  if (!kostDetail) {
     return (
       <View style={styles.loadingContainer}>
         <Text>Kost tidak ditemukan</Text>
       </View>
     );
  }

  // --- Di bawah ini adalah BUKTI kode sudah membaca JSON Anda ---

  const sanitizePhone = (raw?: string) => {
    if (!raw) return '';
    // Hapus semua karakter kecuali digit
    const digits = raw.replace(/\D+/g, '');
    // Jika mulai dengan 0, ganti dengan kode negara 62 (Indonesia)
    if (digits.startsWith('0')) return '62' + digits.slice(1);
    return digits;
  };

  const openWhatsApp = async () => {
    const raw = kostDetail.kontak_whatsapp;
    const phone = sanitizePhone(raw);
    const message = `Halo, saya tertarik dengan ${kostDetail.nama}. Apakah kost ini masih tersedia?`;

    if (!phone) {
      alert('Nomor WhatsApp pemilik kost tidak tersedia atau tidak valid.');
      return;
    }

    const encoded = encodeURIComponent(message);
    // coba buka aplikasi WhatsApp langsung terlebih dahulu
    const appUrl = `whatsapp://send?phone=${phone}&text=${encoded}`;
    const webUrl = `https://wa.me/${phone}?text=${encoded}`;

    console.log('openWhatsApp -> phone:', phone);
    console.log('openWhatsApp -> appUrl:', appUrl);
    console.log('openWhatsApp -> webUrl:', webUrl);

    try {
      const canOpen = await Linking.canOpenURL(appUrl);
      if (canOpen) {
        await Linking.openURL(appUrl);
        return;
      }
    } catch (e) {
      console.warn('canOpenURL failed for appUrl', e);
    }

    // fallback ke wa.me (web) jika app scheme tidak tersedia
    try {
      await Linking.openURL(webUrl);
    } catch (err) {
      console.error('Failed to open WhatsApp URL', err);
      alert('Gagal membuka WhatsApp. Periksa apakah WhatsApp terpasang, atau coba salin nomor: ' + phone);
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      {/* Mengambil "gambar_url": "https://i.pinimg.com/..." */}
      <Image source={{ uri: kostDetail.gambar_url }} style={styles.image} />
      
      <View style={styles.infoContainer}>
        {/* Mengambil "nama": "Muslimah" */}
        <Text style={styles.title}>{kostDetail.nama}</Text>
        
        {/* Mengambil "harga": 700000 dan "satuan_harga": "bulan" */}
        <Text style={styles.price}>
          Rp. {kostDetail.harga} / {kostDetail.satuan_harga}
        </Text>

        <Text style={styles.descriptionTitle}>Deskripsi</Text>
        {/* Mengambil "deskripsi": "Kost khusus muslimah..." */}
        <Text style={styles.description}>{kostDetail.deskripsi}</Text>
        
        <TouchableOpacity style={styles.waButton} onPress={openWhatsApp}>
          <Text style={styles.waButtonText}>💬 Hubungi via WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#eee',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2A4B3A',
  },
  price: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#222',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
  },
  waButton: {
    backgroundColor: '#25D366',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  waButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});