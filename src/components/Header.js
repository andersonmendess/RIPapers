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
    height: 50,
    backgroundColor: DStyles.colors.main,
  },
  title: {
    color: DStyles.colors.text,
    fontSize: 20,
    textAlign: 'center',
    margin: 12,
    fontFamily: DStyles.fonts.bold
  }
});


export default Header