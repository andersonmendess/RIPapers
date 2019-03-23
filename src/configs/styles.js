import {StatusBar} from 'react-native';

StatusBar.setBarStyle( 'light-content',true)
StatusBar.setBackgroundColor('#000')

export default {
    colors: {
        main: '#000',
        secondary: '#151618',
        text: '#fafafa',
        subText: '#ddd',
        transparent1: 'rgba(0,0,0,0.3)',
        transparent2: 'rgba(0,0,0,0.4)'
    },
    fonts: {
        regular: 'GoogleSans-Regular',
        bold: 'GoogleSans-Bold',
        medium: 'GoogleSans-Medium'
    }
}