import { NativeRouter } from 'react-router-native';
import Main from '../components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../utils/apolloClient';
const apolloClient = createApolloClient();

export default function RootLayout() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
