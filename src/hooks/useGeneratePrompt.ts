import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../services";
import { useState } from "react";
import { GeneratedDataElements } from "../types";

export const useGeneratePrompt = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<GeneratedDataElements | null>(null);

  const generatePrompt = async (prompt: string, style: string) => {
    setLoading(true);
    setError(false);
    try {
      const docRef = doc(firestore, "generatedPrompts", "userPrompt");
      await setDoc(
        docRef,
        { prompt, style, updatedAt: new Date() },
        { merge: true }
      );

      const generatedPrompt = await getDoc(docRef);
      if (generatedPrompt.exists()) {
        setData(generatedPrompt.data() as GeneratedDataElements);
      }
      // 30-60 sec. delay
      const delay = (Math.random() * 30 + 30) * 1000;
      setTimeout(() => {
        setLoading(false);
      }, delay);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error("Firestore error while prompt generated:", err);
    }
  };

  return {
    generatePrompt,
    data,
    loading,
    error,
  };
};
