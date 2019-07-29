import React from 'react'
import { View, Text } from 'react-native'
import { Button, Card } from './common'

const Data = (props) => {
	return (
		<View style={styles.container}>
			<Card>
				<Text>Data Screen</Text>
				<Button
					title="Settings"
					onPress={() => props.navigation.navigate('SettingsScreen')}
				/>
			</Card>
		</View>
	)
}

const styles = {
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	}
}

export default Data
