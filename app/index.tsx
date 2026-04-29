import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-green-500">
        Welcome to Nativewind.
      </Text>
      <Link href="/(auth)/sign-up">Signup</Link>
      <Text>Tabs</Text>
      <Link href="/(tabs)/home">Home</Link>
      <Link href="/(tabs)/play">Play</Link>
      <Link href="/(tabs)/library">Library</Link>
      <Link href="/(tabs)/profile">Profile</Link>
    </View>
  );
}
