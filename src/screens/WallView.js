import React, {Component} from 'react';
import {Modal, Text, View, StyleSheet } from 'react-native';
import DStyles from '../configs/styles'
import FlatBtn from '../components/FlatBtn'
import FastImage from 'react-native-fast-image'


class WallView extends Component {

  render() {     

    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={this.props.onRequestClose}
          hardwareAccelerated={true}>
          <View style={styles.container}>
            <FastImage style={styles.image} source={{ uri: this.props.uri, priority: FastImage.priority.high, }} />

            <View style={styles.bottomContainer}>

            <View style={styles.infoContainer}>
                <Text style={styles.info}>{this.props.title}</Text>
            </View>
            
            <View style={styles.btnContainer}>
              <FlatBtn label='Set' icon='layout' press={() => { }} />
              <FlatBtn label='Save' icon='save' press={() => { }} />
              <FlatBtn label='Star' icon='star' press={() => { }} />
            </View>
            
            </View>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DStyles.colors.main
  },
  bottomContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
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
    fontSize: 14,
    fontFamily: DStyles.fonts.bold,
    padding: 10,
    textAlign: 'center',
  },
  btnContainer: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: DStyles.colors.transparent1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 4,
    paddingBottom: 8,
    marginBottom: 8,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default WallView