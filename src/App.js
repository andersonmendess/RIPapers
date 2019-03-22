import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DStyles from './utils/styles'

import Header from './components/Header'
import TopBtn from './components/TopBtn'
import WallRender from './components/WallRender'

export default App => {

	return (
		<View style={styles.container}>
			<Header />
			<TopBtn />

			<WallRender />

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DStyles.colors.main,
	}
});