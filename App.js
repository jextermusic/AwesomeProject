import React from 'react';
import { StatusBar, View } from 'react-native';
import SenderScreen from './screens/SenderScreen';
import ReceiverScreen from './screens/ReceiverScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <SenderScreen />

      <ReceiverScreen />
    </View>
  );
};

export default App;
