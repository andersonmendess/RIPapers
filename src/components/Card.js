import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, ActivityIndicator } from 'react-native';
import DStyles from '../configs/styles'
import WallView from '../screens/WallView'
import FastImage from 'react-native-fast-image'

class Card extends Component {

    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {
        return (
            <View style={styles.container}>
              <TouchableWithoutFeedback  onPress={() => {this.setModalVisible(!this.state.modalVisible);}} >
                <View style={styles.card}>
                    <View style={styles.infoContainer}>
                    <WallView visible={this.state.modalVisible} title={this.props.title} uri={this.props.url} onRequestClose={() => {this.setModalVisible(!this.state.modalVisible);}}/>
                    <FastImage style={ styles.image } source={{ uri: this.props.url , priority: FastImage.priority.high,} } />
                        <View style={styles.info}>
                            <Text numberOfLines={1} style={styles.title}> { this.props.title } </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
      
            </View>
          );
    }
}

const styles = StyleSheet.create({

    card: {
        width: Dimensions.get('window').width / 2 - 4,
        height: Dimensions.get('window').height / 2 - 20,
        borderRadius: 3,
        margin: 2,
        overflow: 'hidden',
        backgroundColor: DStyles.colors.main
    },
    image: {
        width: '100%' ,
        height: '100%',    
        position: 'absolute',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    info: {
        padding: 2,
        marginBottom: 18,
        backgroundColor: DStyles.colors.transparent1,
        borderRadius: 6,
        margin: 4
    },
    title: {
        color: DStyles.colors.text,
        fontFamily: DStyles.fonts.medium,
        textAlign: 'center',
        margin: 2,
        fontSize: 12,
        height: 18,
    }
});


export default Card