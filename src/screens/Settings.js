import React, { Component } from 'react';
import { StyleSheet, View, Switch, Text, Image, Picker } from 'react-native';
import DStyles from '../configs/styles'
import Header from '../components/Header'

class Settings extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Header label="Settings" />

                <View style={styles.about}>
                    <Image style={styles.img} source={require("../../assets/img/logo.png")} />
                    <View style={styles.aboutdesc}>
                        <Text style={styles.title}>RIPapers</Text>
                        <Text style={styles.title}>0.0.1 Alpha</Text>
                    </View>
                </View>


                <Text style={[styles.topic, {marginTop: 5}]} >API</Text>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionTitle}>pixabay API</Text>
                    <Switch value={false}  style={styles.optionSwitch} />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionTitle}>Dynamic API Auth</Text>
                    <Switch value={true}  style={styles.optionSwitch} />
                </View>

                <Text style={styles.topic} >UI</Text>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionTitle}>Dark Theme</Text>
                    <Switch value={true}  style={styles.optionSwitch} />
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.optionTitle}>Photos per row</Text>
                    <Picker
                    selectedValue={'2'}
                    style={{height: 20, width: 110, color: DStyles.colors.text, alignItems: 'flex-end'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Three" value="3" />
                    <Picker.Item label="Two" value="2" />
                    <Picker.Item label="One" value="1" />
                    </Picker>
                </View>

                <Text style={styles.topic}>Download</Text>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionTitle}>Choose Storage Path</Text>
                </View>
    

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DStyles.colors.secondary,
    },
    optionContainer: {
        padding: 20,
        height: 60,
        flexDirection:'row',
    },
    optionTitle: {
        color: DStyles.colors.text,
        width: '86%',
        fontFamily: DStyles.fonts.medium,
        fontSize: 15,
    },
    optionSwitch: {
        alignItems: 'flex-end',
    },
    topic: {
        color: DStyles.colors.subText,
        fontFamily: DStyles.fonts.medium,
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: DStyles.colors.main,
        paddingTop: 7,
        paddingBottom: 7,
    },
    about: {
        flexDirection:'row',
        padding: 20,
        paddingLeft: 30
    },
    img: {
        height: 150,
        width: 150,
    },
    title: {
        color: DStyles.colors.text,
        fontFamily: DStyles.fonts.bold,
        fontSize: 20,
        padding: 5,
        marginLeft: 45,
        marginTop: 25
    },
    aboutdesc: {
        flexDirection:'column',
    }
});

export default Settings