import React, { useState } from 'react';
import { View, Button } from 'react-native';
import PDFViewer from './components/PDFViewer';
 // You'll need to implement this component

const ReceiverScreen = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const receivePDF = () => {
    // Implement receiving logic here
    // Once received, set the URI of the PDF file
    const receivedPdfUri = 'file://example.pdf'; // Example URI, replace with actual received file URI
    setPdfUri(receivedPdfUri);
  };

  return (
    <View>
      <Button title="Receive PDF" onPress={receivePDF} />
      {pdfUri && <PDFViewer uri={pdfUri} />}
    </View>
  );
};

export default ReceiverScreen;
