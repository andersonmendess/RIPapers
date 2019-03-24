import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Image, ActivityIndicator } from 'react-native';
import DStyles from '../configs/styles'

const Card = props => {

    loading = true
    
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.card}>
              <View style={styles.infoContainer}>
              <ActivityIndicator animating={loading} style={{flex: 1, justifyContent: 'center'}} size="large" color={DStyles.colors.subText} />
              <Image style={styles.image} source={{ uri : props.url }} onLoad={() => {loading = false}}/>
                  <View style={styles.info}>
                      <Text numberOfLines={1} style={styles.title}> { props.title } </Text>
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
        height: Dimensions.get('window').height / 3 - 20,
        borderRadius: 3,
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
        padding: 2,
        marginBottom: 10,
        backgroundColor: DStyles.colors.transparent1,
        borderRadius: 6,
        margin: 4
    },
    title: {
        color: DStyles.colors.text,
        fontFamily: DStyles.fonts.medium,
        textAlign: 'center',
        margin: 2,
        fontSize: 10,
        height: 15,
    }
});


export default Card