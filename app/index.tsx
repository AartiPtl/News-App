import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//import Categories from './news/categories';
import { useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: "https://images.pexels.com/photos/2130166/pexels-photo-2130166.jpeg?auto=compress&cs=tinysrgb&w=400" }}
                style={styles.backgroundImage}
                resizeMode="cover"
            >

                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <Text style={styles.title}>My sync News App</Text>
                        <View style={styles.content}>
                            <Text style={styles.subtitle}>Welcome to My sync App. your daily dose of news,
                                curated just for you.
                            </Text>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    router.push("/news/categories");
                                }}
                                >
                                <Text style={styles.buttonText}>Browse By Categories</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    router.push("/news/categories/countryCategories");
                                }}
                                >
                                <Text style={styles.buttonText}>Browse By Country</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a dark overlay to enhance text readability
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    header: {
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#fff",
    },
    content: {
        width: "100%",
        alignItems: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#ddd",
        textAlign: "center",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#1e90ff",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
    },
    //

});