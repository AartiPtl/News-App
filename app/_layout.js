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
                <Tabs.Screen
          name="news/categories/countryCategories/index"
          options={{
            title: "All Countries",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="flag" size={30} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />

        <Tabs.Screen
          name="news/categories/index"
          options={{
            title: "All Categories",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="category" size={30} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />

        {/* Hide tabs */}
        <Tabs.Screen
          name="news/categories/[newsByCategory]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="news/details/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="news/countries/index"
          options={{
            href: null,
          }}
        />
            </Tabs>
        </QueryClientProvider>

    );
}