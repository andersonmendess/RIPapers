import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import DStyles from './configs/styles'
import FlatBtn from './components/FlatBtn'

import Header from './components/Header'

export default WallView => {

	return (
		<View style={styles.container}>

			<Image style={styles.image} source={{ uri: "https://images.pexels.com/photos/1966688/pexels-photo-1966688.jpeg" }} />

			<Header style={styles.header} label='RIPapers Alpha' />

			<View style={styles.bottomContainer}>

				<View style={styles.infoContainer}>
					<Text style={styles.info}>woman in black sweatshirt</Text>
				</View>

				<View style={styles.btnContainer}>
					<FlatBtn label='Set' icon='layout' press={() => { }} />
					<FlatBtn label='Save' icon='save' press={() => { }} />
					<FlatBtn label='Star' icon='star' press={() => { }} />
				</View>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DStyles.colors.main,
	},
	bottomContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'stretch',
	},
	btnContainer: {
		backgroundColor: DStyles.colors.transparent1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 5,
		paddingBottom: 10
	},
	image: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	infoContainer: {
		backgroundColor: DStyles.colors.transparent2,
	},
	info: {
		color: DStyles.colors.subText,
		fontSize: 14,
		fontFamily: DStyles.fonts.medium,
		padding: 12,
		textAlign: 'center',
	}
});