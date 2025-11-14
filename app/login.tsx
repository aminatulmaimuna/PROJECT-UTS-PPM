// app/login.tsx

import { Stack, router } from 'expo-router';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Ganti dengan gambar selamat datang Anda (pakai gambar yang ada di folder assets/images)
const welcomeImage = require('../assets/images/Home.jpg');

export default function LoginScreen() {

  const handleLogin = () => {
    // Di sini logika autentikasi (cek email/pass) Anda
    // ...

    // Jika berhasil, ganti navigasi ke dalam aplikasi (tabs)
    router.replace('/(tabs)'); 
  };
  
  const goToRegister = () => {
    // Arahkan ke layar registrasi (jika Anda punya)
    // router.push('/register');
  };
  
  const forgotPassword = () => {
    // Arahkan ke layar lupa password
    // router.push('/forgot-password');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Sembunyikan header default */}
          <Stack.Screen options={{ headerShown: false }} />
          
          <Image source={welcomeImage} style={styles.headerImage} />
          
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.subtitle}>Login untuk menemukan kost impian Anda.</Text>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email atau Username"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry // <-- Menyembunyikan password
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
            
            <TouchableOpacity onPress={forgotPassword} style={styles.forgotPassButton}>
              <Text style={styles.forgotPassText}>Lupa Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Belum punya akun?</Text>
            <TouchableOpacity onPress={goToRegister}>
              <Text style={styles.registerLink}>Daftar di sini</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2A4B3A', // Warna tema Anda
    textAlign: 'center',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  input: {
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    color: '#333',
  },
  forgotPassButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPassText: {
    fontSize: 14,
    color: '#2A4B3A',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#2A4B3A', // Warna tema Anda
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  registerText: {
    fontSize: 14,
    color: '#555',
  },
  registerLink: {
    fontSize: 14,
    color: '#2A4B3A',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});