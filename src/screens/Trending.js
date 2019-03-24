import React from 'react';
import { StyleSheet, View } from 'react-native';
import DStyles from '../configs/styles'

import FeedWallpapers from '../renders/FeedWallpapers'

const Home = () => {

    return (
        <View style={styles.container}>
            <FeedWallpapers type='popular' api='unsplash' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DStyles.colors.secondary,
    }
});

export default Home