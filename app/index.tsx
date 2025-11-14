// app/index.tsx
import { Redirect } from 'expo-router';

export default function RootIndex() {
  // File ini adalah "pintu masuk" utama aplikasi.
  // Kita langsung arahkan (redirect) pengguna ke layar login.
  return <Redirect href="/login" />;
}