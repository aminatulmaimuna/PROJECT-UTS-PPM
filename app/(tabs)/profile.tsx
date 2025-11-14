// app/(tabs)/profile.tsx

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Alert, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { router, Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; // Pastikan sudah install

export default function ProfileScreen() {

  const handleLogout = () => {
    Alert.alert(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar?",
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Ya, Logout", 
          style: "destructive",
          onPress: () => {
            // Arahkan ke layar login
            router.replace('/login'); 
          }
        }
      ]
    );
  };
  
  // Fungsi placeholder untuk menu lain
  const goToEditProfile = () => {};
  const goToSettings = () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Memberi judul di header */}
        <Stack.Screen options={{ 
          title: 'Profile Saya', 
          headerShadowVisible: false, // Hilangkan bayangan header
          headerStyle: { backgroundColor: '#F9F9F9' }
        }} /> 
        
        {/* Bagian Info Pengguna */}
        <View style={styles.profileHeader}>
          <FontAwesome name="user-circle" size={80} color="#2A4B3A" />
          <Text style={styles.profileName}>amiw</Text>
          <Text style={styles.profileEmail}>amiw2505@gmail.com</Text>
        </View>

        {/* Bagian Menu */}
        <View style={styles.menuContainer}>
          <MenuItem 
            icon="user-o" 
            text="Edit Profile" 
            onPress={goToEditProfile} 
          />
          <MenuItem 
            icon="cog" 
            text="Pengaturan" 
            onPress={goToSettings} 
          />
          <MenuItem 
            icon="question-circle-o" 
            text="Pusat Bantuan" 
            onPress={() => {}} 
          />
        </View>

        {/* Tombol Logout dibuat terpisah dan di bawah */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={22} color="#D32F2F" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Komponen helper untuk item menu
const MenuItem = ({ icon, text, onPress }: { icon: any, text: string, onPress: () => void }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <FontAwesome name={icon} size={22} color="#2A4B3A" />
    <Text style={styles.menuItemText}>{text}</Text>
    <FontAwesome name="angle-right" size={22} color="#CCC" />
  </TouchableOpacity>
);

// Styles
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F9F9F9' },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  menuContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  logoutButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#D32F2F', // Warna merah untuk logout
    fontWeight: '500',
  },
});