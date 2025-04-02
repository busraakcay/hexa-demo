import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../services";

/**
 * Custom hook to fetch documents from a Firestore collection.
 *
 * @returns An object containing:
 * - `getDocsFromFirestore`: Function to fetch documents from a given collection.
 * - `loading`: Boolean indicating if the request is in progress.
 * - `error`: Boolean indicating if there was an error.
 * - `data`: The fetched documents as an array.
 */
export const useGetDocs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  /**
   * Fetches all documents from the specified Firestore collection.
   *
   * @param dbName - The name of the Firestore collection to fetch data from.
   */
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
      console.error("Firestore fetching error:", error);
    }
  };

  return {
    getDocsFromFirestore,
    loading,
    error,
    data,
  };
};
