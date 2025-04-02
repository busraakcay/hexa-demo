import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../services";
import { useState } from "react";
import { GeneratedDataElements } from "../types";

/**
 * Custom hook to generate and fetch a prompt from Firestore.
 *
 * @returns An object containing:
 * - `generatePrompt`: Function to generate a new logo.
 * - `data`: The generated data retrieved from Firestore.
 * - `loading`: Boolean indicating if the request is in progress.
 * - `error`: Boolean indicating if there was an error.
 */
export const useGeneratePrompt = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<GeneratedDataElements | null>(null);

  /**
   * Generates a prompt and stores it in Firestore.
   * Retrieves the stored prompt and updates the state.
   *
   * @param prompt - The user-provided prompt text.
   * @param style - The selected style for the generated content.
   */
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

      // Fetch the stored prompt
      const generatedPrompt = await getDoc(docRef);
      if (generatedPrompt.exists()) {
        setData(generatedPrompt.data() as GeneratedDataElements);
      }

      // Introduce a random delay (30-60 seconds) before marking as complete
      const delay = (Math.random() * 30 + 30) * 1000;
      setTimeout(() => {
        setLoading(false);
      }, delay);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error("Firestore error while generating prompt:", err);
    }
  };

  return {
    generatePrompt,
    data,
    loading,
    error,
  };
};
