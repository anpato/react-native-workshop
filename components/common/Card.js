import React from 'react'
import { View, Text } from 'react-native'

const Card = ({ children }) => {
	return <View style={styles.cardStyle}>{children}</View>
}

const styles = {
	cardStyle: {
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		marginBottom: 20
	}
}

export { Card }
