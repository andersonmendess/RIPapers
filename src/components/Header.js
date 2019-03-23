import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DStyles from '../configs/styles'

Header = props => {
    return (
      <View style={styles.container} >
        <Text style={styles.title}> {props.label} </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: DStyles.colors.transparent2,
  },
  title: {
    color: DStyles.colors.text,
    fontSize: 22,
    textAlign: 'center',
    margin: 15,
    fontFamily: DStyles.fonts.bold
  }
});


export default Header