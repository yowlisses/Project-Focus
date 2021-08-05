import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export function ChangePage() {
	const [text, setText] = useState('');
	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.title}>
					Please, note why you are leaving the project
				</Text>
				<TextInput
					style={styles.entry}
					multiline
					value={text}
					onChangeText={setText}
					placeholder='Write here'
				/>
				<View style={styles.buttonWrapper}>
					<Button title='Save changing' style={styles.button} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		justifyContent: 'center',
		padding: 20,
		overflow: 'scroll',
		alignItems: 'center',
	},
	item: {
		backgroundColor: 'white',
		borderRadius: 10,
		margin: 8,
		marginTop: 0,
		borderRadius: 10,
		padding: 20,

		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 3,
		transform: [{ translateY: -25 }],
	},
	title: {
		fontSize: 20,
		marginBottom: 30,
	},
	entry: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 10,
		textAlignVertical: 'top',
		// paddingHorizontal: 10,
		// paddingVertical: 1,
		overflow: 'scroll',
		padding: 10,
	},
	buttonWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		margin: 20,
		marginBottom: 0,
	},
});
