import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DStyles from '../configs/styles'
import FeedWallpapers from '../renders/FeedWallpapers'
import Header from '../components/Header'

class Feed extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Header label="RIPapers Alpha" />
                <FeedWallpapers type={this.props.type} api={this.props.api} />
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

export default Feed