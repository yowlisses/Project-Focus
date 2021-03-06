import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

export function Button(props) {
	return (
		<Pressable onPress={props.onPress} style={styles.button}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		// backgroundColor: '#005dc7',
		backgroundColor: '#2196F3',
		borderColor: '#0054b5',
		borderWidth: 0,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 6,
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
	},
});
