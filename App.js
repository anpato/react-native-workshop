import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Firebase from 'firebase'
import { firebaseConfig } from './config/firebaseConfig'
import Login from './components/Login'
import Data from './components/Data'
import Settings from './components/Settings'
import {
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
// Creating a stack of screens for our home page, you could add a create account here as well
// and add another screen thatll handle going between logging in or creating an account
const Home = createStackNavigator({
	HomeScreen: Login
})

// Our logged in stack,
// comes out of the box with a header
const AuthStack = createStackNavigator({
	LoggedIn: Data,
	SettingsScreen: Settings
})

// Our entire app will be held in here, using switchnavigator to switch between screens
const AppNav = createAppContainer(
	createSwitchNavigator({
		App: Home,
		Auth: AuthStack
	})
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		justifyContent: 'center'
	}
})

export default App
