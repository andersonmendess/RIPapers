import React from 'react';
import { StyleSheet, View } from 'react-native';
import DStyles from '../configs/styles'
import FeedWallpapers from '../renders/FeedWallpapers'

const Home = () => {

    return (
        <View style={styles.container}>
            <FeedWallpapers type='latest' api='pixabay' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DStyles.colors.main,
    }
});

export default Home