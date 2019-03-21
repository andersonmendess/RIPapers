import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DStyles from './utils/styles'

import Header from './components/Header'
import TopBtn from './components/TopBtn'
import Card from './components/Card'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />

		<View style={{flexDirection: 'row'}}>
			<TopBtn label='Category' />
			<TopBtn label='Downloads' />
			<TopBtn label='Settings' />
		</View>

		<View style={{flexDirection: 'row'}}>
			<Card title='Photo 1' />
			<Card title='Photo 2' />
			<Card title='Photo 3' />
		</View>

		<View style={{flexDirection: 'row'}}>
			<Card title='Photo 4' />
			<Card title='Photo 5' />
			<Card title='Photo 6' />
		</View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DStyles.colors.main,
	  }
});
