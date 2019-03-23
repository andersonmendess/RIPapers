import React from 'react';
import { StyleSheet, View } from 'react-native';
import DStyles from './configs/styles'

import Header from './components/Header'
import FlatBtn from './components/FlatBtn'
import Home from './render/Home'

export default App => {

	return (
		<View style={styles.container}>
			<Header label='RIPapers Alpha' />

			<View style={styles.btnContainer}>
				<FlatBtn label='Categories' icon='layers' press={() => { }} />
				<FlatBtn label='Downloads' icon='download' press={() => { }} />
				<FlatBtn label='Settings' icon='settings' press={() => { }} />
			</View>

			<Home />

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DStyles.colors.secondary,
	},
	btnContainer: {
		margin: 5,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});