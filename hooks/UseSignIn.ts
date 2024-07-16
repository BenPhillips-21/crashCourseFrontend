import { gql, useMutation } from '@apollo/client';
import { SIGN_IN } from "../graphql/mutations"
import UseAuthStorage from './UseAuthStorage';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

interface SignInProps {
    email: string,
    password: string
}

const useSignIn = () => {
    const apolloClient = useApolloClient()
    const navigate = useNavigate();
    const authStorage = UseAuthStorage();

  const [mutate, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.error("GraphQL error:", error.graphQLErrors[0]?.message || error.message);
    }
  });

  const signIn = async (props: SignInProps) => {
    const email = props.email
    const password = props.password
    try {
      const result = await mutate({
        variables: { email, password }
      });
        const token = result.data.login.value
        await authStorage.setAccessToken(token)
        apolloClient.resetStore();
        navigate("/")
    } catch (error) {
      // The error is already handled in onError
    }
  };

  return [signIn, result];
};

export default useSignIn;