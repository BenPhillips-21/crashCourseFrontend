import { StyleSheet, View, Text } from 'react-native';
import AppBar from './AppBar'
import { Route, Routes, Navigate } from 'react-router-native';
import Home from './Home';
import CreateUser from './CreateUser'
import SignIn from './SignIn';

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
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;