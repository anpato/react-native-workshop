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
					// props.navigation is a feature react-navigation gives our app when we initialize or navigators
					// takes an argument of which screen to navigate to, you can also pass in data through there as well
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
