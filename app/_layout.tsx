// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* 1. DAFTARKAN index.tsx DI SINI (INI YANG BARU) */}
      <Stack.Screen name="index" /> 
      
      {/* 2. Layar login Anda */}
      <Stack.Screen name="login" /> 
      
      {/* 3. Grup (tabs) utama Anda */}
      <Stack.Screen name="(tabs)" />
      
      {/* 4. Layar detail kost */}
      <Stack.Screen 
        name="kost-detail/[id]" 
        options={{ 
          headerShown: true, 
          title: 'Detail Kost',
          headerBackTitle: 'Kembali',
          headerStyle: { backgroundColor: '#2A4B3A' },
          headerTintColor: '#fff',
        }} 
      />
    </Stack>
  );
}