import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer as BrowserRouter } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RootRouter from './src/routers/RootRouter';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </SafeAreaView>
  );
};

export default App;
