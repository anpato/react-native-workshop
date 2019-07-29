import React from 'react'
import { View, Text } from 'react-native'

const Header = ({ title, style }) => {
	const { container } = styles
	return (
		<View style={container}>
			<Text>{title}</Text>
		</View>
	)
}

const styles = {
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8',
		height: 100,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5
	},
	textStyle: {
		paddingTop: 20,
		marginTop: 20,
		fontSize: 20,
		color: '#333'
	}
}

export { Header }
