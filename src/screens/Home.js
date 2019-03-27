import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DStyles from '../configs/styles'
import FeedWallpapers from '../renders/FeedWallpapers'

class Home extends Component {

  
    render(){
        return (
            <View style={styles.container}>
                <FeedWallpapers type='latest' api='pixabay' />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DStyles.colors.secondary,
    }
});

export default Home