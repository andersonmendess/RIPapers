import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import DStyles from '../configs/styles'
import Icon from 'react-native-vector-icons/Feather'

const FlatBtn = props => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={props.press}>
                    <View style={styles.btn}>
                        <Text style={styles.text}><Icon name={props.icon} color='white' /> {props.label} </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        width: Dimensions.get('window').width / 3 - 20,
        marginTop: 5,
        borderRadius: 4,
        backgroundColor: DStyles.colors.transparent2,
    },
    text: {
        fontFamily: DStyles.fonts.bold,
        color: DStyles.colors.text,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 8,
    }
});


export default FlatBtn