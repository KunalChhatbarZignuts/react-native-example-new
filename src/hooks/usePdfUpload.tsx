import { useState } from 'react';
import { pick, types } from '@react-native-documents/picker';

export type PickedPdf = {
  uri: string;
  name: string;
  copyUri: string | null; // Added to capture the local cached path specifically
};

export const usePdfPicker = () => {
  const [pdf, setPdf] = useState<PickedPdf | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pickPdf = async () => {
    try {
      setError(null);

      const res = await pick({
        type: [types.pdf],
        allowMultiSelection: false,
        copyTo: 'cachesDirectory',
      });

      const file = res[0];
      if (!file) return;

      // 1. Get the URI (iOS usually uses file.copyError or file.uri)
      // On iOS, 'copyTo' populates 'file.uri' with the local cache path
      let uri = file.uri;

      if (!uri) {
        throw new Error('Invalid file URI');
      }

      // 2. iOS Fix: Decode the URI
      // Sometimes spaces are returned as %20 which causes "File not found" errors
      const decodedUri = decodeURI(uri);

      // 3. Ensure the URI has the file:// prefix for React Native compatibility
      const finalUri = decodedUri.startsWith('file://')
        ? decodedUri
        : `file://${decodedUri}`;

      console.log('Processed File Uri:', finalUri);

      setPdf({
        uri: finalUri,
        name: file.name ?? 'document.pdf',
        copyUri: file.uri, // Original raw URI for reference
      });
    } catch (e: any) {
      // Using the library's built-in isCancel check is safer

      console.error('Picker Error: ', e);
      setError('Failed to pick PDF');
    }
  };

  const reset = () => {
    setPdf(null);
    setError(null);
  };

  return {
    pickPdf,
    pdf,
    error,
    reset,
  };
};
