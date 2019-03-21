import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import DStyles from '../utils/styles'

const TopBtn = props => {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
            <View style={styles.btn}>
                <Text style={styles.text}> {props.label} </Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        flexDirection: 'row',
    },
    btn: {
        width: Dimensions.get('window').width / 3 - 30,
        borderColor: DStyles.colors.text,
        borderWidth: 1,
        padding: 3,
        borderRadius: 2,
    },
    text: {
        fontFamily: DStyles.fonts.bold,
        color: DStyles.colors.text,
        justifyContent: 'center',
        textAlign: 'center',
    }
});


export default TopBtn