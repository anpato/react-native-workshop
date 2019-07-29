import React, { Component } from 'react'
import {
	View,
	TextInput,
	ActivityIndicator,
	Text,
	LayoutAnimation
} from 'react-native'
import { Card, CardSection, Button } from './common'
import Firebase from 'firebase'

export default class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			isLoading: false,
			isAuthenticated: false,
			errorMsg: '',
			isError: false
		}
	}

	componentWillUpdate() {
		LayoutAnimation.spring()
	}

	handleChange = (name, value) => {
		this.setState({ [name]: value })
		// console.log(this.state.password)
	}

	loginUser = () => {
		const { email, password } = this.state
		this.setState({ isLoading: true })
		Firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ isAuthenticated: true, isLoading: false })
				this.props.navigation.navigate('Auth')
			})
			.catch(() =>
				Firebase.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(() => {
						this.setState({ isLoading: false, isAuthenticated: true })
						this.props.navigation.navigate('Auth')
					})
					.catch((error) =>
						this.setState({
							errorMsg: error.toString(),
							isError: true,
							isLoading: false
						})
					)
			)
	}

	renderButton = () => {
		if (this.state.isLoading === true) {
			return <ActivityIndicator size="large" />
		} else {
			return <Button title="login" onPress={this.loginUser} />
		}
	}

	render() {
		console.log(this.state)
		return (
			<View>
				<Card>
					<CardSection>
						<TextInput
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChangeText={(text) => this.handleChange('email', text)}
						/>
					</CardSection>
					<CardSection>
						<TextInput
							secureTextEntry={true}
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChangeText={(text) => this.handleChange('password', text)}
						/>
					</CardSection>
					{this.state.isError === true ? (
						<CardSection>
							<Text>{this.state.errorMsg}</Text>
						</CardSection>
					) : null}
					<CardSection>{this.renderButton()}</CardSection>
				</Card>
			</View>
		)
	}
}

const styles = {}
