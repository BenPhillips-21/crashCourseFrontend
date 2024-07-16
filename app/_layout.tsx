import { NativeRouter } from 'react-router-native';
import Main from '../components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../utils/apolloClient';
import AuthStorage from '../utils/authStorage';
import AuthStorageContext from '../contexts/AuthStorageContext';
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);


export default function RootLayout() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
