import { ImageSourcePropType } from 'react-native';

export interface KostItem {
  id: string;
  // English-style (optional)
  name?: string;
  price?: string;
  imageUrl?: ImageSourcePropType | string;
  description?: string;
  whatsapp?: string;

  // Indonesian-style (optional)
  nama?: string;
  harga?: string;
  satuan_harga?: string;
  deskripsi?: string;
  gambar_url?: string;
  kontak_whatsapp?: string;

  // Local image source when bundling images with the app
  imageSource?: ImageSourcePropType;
}

