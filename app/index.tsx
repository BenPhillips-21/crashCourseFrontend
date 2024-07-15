// app/index.tsx
import { Text, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('about')}
      />
    </View>
  );
}
