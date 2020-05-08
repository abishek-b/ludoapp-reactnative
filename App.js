
import React from 'react';
import { SafeAreaView, StatusBar, View, Button, StyleSheet } from 'react-native';
import store from './src/store'
import Board from './src/components/Board';
import Dice from './src/components/Dice';
import { Provider } from 'react-redux';

const App: () => React$Node = () => {
	return (
		<Provider store={store}>
			<Board />
			<Dice />
		</Provider>
	);
};


export default App;

const styles = StyleSheet.create({
	dice :{
		marginTop  : 15
	}
})

//   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView style={{justifyContent:'center'}}>
    // <Board />
    //   </SafeAreaView>