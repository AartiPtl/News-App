import { QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import queryClient from "../lib/react-query/queryClient";
//import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {   //code for bottom tab navigation
    return (
        <QueryClientProvider client={queryClient}>
            <Tabs>
                <Tabs.Screen name="index" 
                options={{
                    title:"Home",
                    headerShown: true,
                    tabBarIcon:({color}) => (
                    <MaterialIcons name="home" size={30} color="black" />
                    ),
                    tabBarLabelStyle: {fontSize:12 },
                 }}
                />
            </Tabs>
        </QueryClientProvider>

    );
}