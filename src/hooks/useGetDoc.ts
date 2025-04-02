import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../services";

export const useGetDocs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getDocsFromFirestore = async (dbName: string) => {
    try {
      const querySnapshot = await getDocs(collection(firestore, dbName));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Firestore fetching error", error);
    }
  };

  return {
    getDocsFromFirestore,
    loading,
    error,
    data,
  };
};
