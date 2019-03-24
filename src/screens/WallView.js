import React from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import DStyles from '../configs/styles'

const WallView = () => {

    loading = true

    return (
        <View style={styles.container}>
            <ActivityIndicator animating={loading} style={styles.spinner} size="large" color={DStyles.colors.subText} />

            <Image onLoad={() => { loading = false }} style={styles.image} source={{ uri: "https://images.unsplash.com/photo-1553217420-f4d50f93ec6e" }} />

            <View style={styles.bottomContainer}>

                <View style={styles.infoContainer}>
                    <Text style={styles.info}>person standing between concrete building</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DStyles.colors.secondary,
    },
    bottomContainer: {
        margin: 19,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    infoContainer: {
        backgroundColor: DStyles.colors.transparent1,
        borderRadius: 6,
    },
    info: {
        color: DStyles.colors.text,
        fontSize: 12,
        fontFamily: DStyles.fonts.medium,
        padding: 6,
        textAlign: 'center',
    },
    spinner: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});

WallView.navigationOptions = {
    title: 'View',
}

export default WallView