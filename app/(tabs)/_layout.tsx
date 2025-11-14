// app/(tabs)/_layout.tsx

import { Tabs } from 'expo-router';
// Import icon (pastikan Anda sudah install @expo/vector-icons)
import { FontAwesome } from '@expo/vector-icons'; 

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2A4B3A', // Warna ikon aktif
      }}
    >
      <Tabs.Screen
        name="index" // merujuk ke app/(tabs)/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="kost" // merujuk ke app/(tabs)/kost.tsx
        options={{
          title: 'Daftar Kost',
          tabBarIcon: ({ color }) => <FontAwesome name="list-ul" size={22} color={color} />,
        }}
      />
      
      {/* INI ADALAH TAB BARU ANDA */}
      <Tabs.Screen
        name="profile" // merujuk ke app/(tabs)/profile.tsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
      
    </Tabs>
  );
}