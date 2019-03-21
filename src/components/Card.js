import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import DStyles from '../utils/styles'

const Card = props => {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text style={styles.title}> { props.title } </Text>
                        <Text style={styles.desc}>lorem ipsum dolor sit amet</Text>
                    </View>
                </View>

            </View>
        </TouchableWithoutFeedback>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
    },
    card: {
        width: Dimensions.get('window').width / 3 - 20,
        height: Dimensions.get('window').height / 4,
        borderColor: DStyles.colors.text,
        borderWidth: 1,
        padding: 3,
        borderRadius: 2,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    info: {
        padding: 3,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    title: {
        color: DStyles.colors.text,
        fontFamily: DStyles.fonts.medium,
        textAlign: 'center',
        margin: 2
    },
    desc: {
        fontFamily: DStyles.fonts.medium,
        fontSize: 9,
        color: DStyles.colors.subText,
        textAlign: 'center',
    }
});


export default Card