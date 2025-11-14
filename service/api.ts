/// BENAR ✅
const BASE_URL = "https://691568f284e8bd126af9c21c.mockapi.io/api/v1";

// Fungsi untuk mengambil SEMUA kost
export async function getDaftarKost() {
  try {
    // Sekarang URL-nya benar: .../api/v1/kost
    const response = await fetch(`${BASE_URL}/kost`); 
    if (!response.ok) {
      throw new Error("Gagal mengambil daftar kost");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; 
  }
}

// Fungsi untuk mengambil SATU kost berdasarkan ID
export async function getDetailKost(id: string) {
  try {
    // Sekarang URL-nya benar: .../api/v1/kost/1
    const response = await fetch(`${BASE_URL}/kost/${id}`); 
    if (!response.ok) {
      throw new Error("Gagal mengambil detail kost");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null; 
  }
}