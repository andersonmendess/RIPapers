import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import DStyles from '../utils/styles'
import Icon from 'react-native-vector-icons/Feather'

const TopBtn = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={styles.container}>

                <TouchableWithoutFeedback>
                    <View style={styles.btn}>
                        <Text style={styles.text}><Icon name='layers' color='white' /> Category </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={styles.btn}>
                        <Text style={styles.text}><Icon name='download' color='white' /> Downloads </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={styles.btn}>
                        <Text style={styles.text}><Icon name='settings' color='white' /> Settings </Text>
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
        width: Dimensions.get('window').width / 3 - 30,
        borderColor: DStyles.colors.text,
        borderWidth: 0.75,
        padding: 5,
        marginTop: 10,
        borderRadius: 4,
    },
    text: {
        fontFamily: DStyles.fonts.bold,
        color: DStyles.colors.text,
        justifyContent: 'center',
        textAlign: 'center',
    }
});


export default TopBtn