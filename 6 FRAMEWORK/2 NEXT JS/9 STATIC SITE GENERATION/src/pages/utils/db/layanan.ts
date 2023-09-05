import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

export async function retrieveData(namaKoleksi: string) {
  const snapshot = await getDocs(collection(firestore, namaKoleksi));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
