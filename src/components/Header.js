import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DStyles from '../utils/styles'

class Header extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>RIPapers</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: DStyles.colors.secondary,
  },
  title: {
    color: DStyles.colors.text,
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    fontFamily: DStyles.fonts.bold
  }
});


export default Header