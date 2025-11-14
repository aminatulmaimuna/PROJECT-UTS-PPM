import { ImageSourcePropType } from 'react-native';

export interface KostItem {
  id: string;
  name: string;
  price: string;
  imageUrl: ImageSourcePropType;
  description: string;
  whatsapp?: string;
  nama: string;
  harga: string;
  satuan_harga: string;
  deskripsi: string;
  gambar_url: string;
  kontak_whatsapp?: string;
}

