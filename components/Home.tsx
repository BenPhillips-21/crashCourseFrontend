import { StyleSheet, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useQuery } from '@apollo/client';
import { GET_ALL_ACCIDENTS } from '../graphql/queries';

export default function Home() {
  const { data, error, loading } = useQuery(GET_ALL_ACCIDENTS);
  console.log(data)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>xDDDD </Text>
    </View>
  );
}