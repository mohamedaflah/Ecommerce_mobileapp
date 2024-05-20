import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { HomeIcon, User } from "lucide-react-native";
import CustomHeader from "./component/Header";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  const Icons = {
                    Home: HomeIcon,
                    Signup: User,
                    Login: User,
                  };
                  const IconComponent = Icons[route.name];
                  return (
                    <View>
                      <IconComponent color={color} size={size} />
                    </View>
                  );
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: false,
                headerShown: true,
                header: () => <CustomHeader title={route.name} />,
                tabBarStyle: styles.tabBarStyle,
              })}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Signup" component={Signup} />
              <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  tabBarStyle: {
    height: 55,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
