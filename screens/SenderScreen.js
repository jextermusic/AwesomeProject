import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
// You can use expo-file-system to manage file operations

const SenderScreen = () => {
  const [file, setFile] = useState(null);

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
      if (res.type === 'success') {
        setFile(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendPDF = () => {
    if (file) {
      // Implement sending logic here
      console.log('Sending PDF:', file.uri);
    } else {
      Alert.alert('Error', 'Please select a PDF file to send.');
    }
  };

  return (
    <View>
      <Button title="Select PDF" onPress={pickFile} />
      <Button title="Send PDF" onPress={sendPDF} />
    </View>
  );
};

export default SenderScreen;
