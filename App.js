import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Firebase from 'firebase'
import { firebaseConfig } from './config/firebaseConfig'
import Login from './components/Login'
import Data from './components/Data'
import Settings from './components/Settings'
import {
	createAppNavigator,
	createStackNavigator,
	createAppContainer,
	createSwitchNavigator
} from 'react-navigation'

function App() {
	Firebase.initializeApp(firebaseConfig)
	return (
		<View style={styles.container}>
			<AppNav />
		</View>
	)
}

const Home = createStackNavigator({
	HomeScreen: Login
})

const AuthStack = createStackNavigator({
	LoggedIn: Data,
	SettingsScreen: Settings
})

const AppNav = createAppContainer(
	createSwitchNavigator({
		App: Home,
		Auth: AuthStack
	})
)
export default App
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		justifyContent: 'center'
	}
})
