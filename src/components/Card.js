import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import DStyles from '../configs/styles'

const Card = props => {

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
              <View style={styles.infoContainer}>
              <Image style={styles.image} source={{uri: props.url}}/>
                  <View style={styles.info}>
                      <Text style={styles.title}> { props.title } </Text>
                      <Text numberOfLines={1} style={styles.desc}> {props.desc ? props.desc : ' - '}</Text>
                  </View>
              </View>
          </View>
      </TouchableWithoutFeedback>

      </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: Dimensions.get('window').width / 3 - 8,
        height: Dimensions.get('window').height / 3,
        borderRadius: 6,
        margin: 4,
        overflow: 'hidden',
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
        padding: 4,
        paddingBottom: 8,
        marginBottom: -1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        
    },
    title: {
        color: DStyles.colors.text,
        fontFamily: DStyles.fonts.medium,
        textAlign: 'center',
        margin: 3,
        fontSize: 12,
        height: 20,
        overflow: 'hidden',
    },
    desc: {
        fontFamily: DStyles.fonts.medium,
        fontSize: 8,
        color: DStyles.colors.subText,
        textAlign: 'center',
    }
});


export default Card