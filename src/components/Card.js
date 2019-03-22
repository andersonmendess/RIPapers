import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import DStyles from '../utils/styles'

const Card = props => {

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
              <View style={styles.infoContainer}>
              <Image style={styles.image} source={{uri: props.url}}/>
                  <View style={styles.info}>
                      <Text style={styles.title}> { props.title } </Text>
                      <Text style={styles.desc}> {props.desc ? props.desc : ' - '}</Text>
                  </View>
              </View>
          </View>
      </TouchableWithoutFeedback>

      </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: Dimensions.get('window').width / 3 - 20,
        height: Dimensions.get('window').height / 4,
        borderColor: DStyles.colors.text,
        borderWidth: 0.5,
        borderRadius: 2,
        margin: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%' ,
        height: Dimensions.get('window').height / 4,    
        position: 'absolute',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    info: {
        padding: 4,
        paddingBottom: 6,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        color: DStyles.colors.text,
        fontFamily: DStyles.fonts.medium,
        textAlign: 'center',
        margin: 2,
        fontSize: 12,
        height: 20
    },
    desc: {
        fontFamily: DStyles.fonts.medium,
        fontSize: 8,
        color: DStyles.colors.subText,
        textAlign: 'center',
    }
});


export default Card