import { StyleSheet, View, Text } from 'react-native';
import AppBar from './AppBar'
import { Route, Routes, Navigate } from 'react-router-native';
import Home from './Home';
import OtherPage from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar />
      <Routes>        
        <Route path="/" element={<Home />} />   
        <Route path="/signin" element={<OtherPage />} />
      </Routes>
    </View>
  );
};

export default Main;