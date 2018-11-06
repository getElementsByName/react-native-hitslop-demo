import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HitSlopOffset = 20

export default class App extends React.Component {
  onPress = () => {
    console.log('onPress')
  }
  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity onPress={this.onPress} hitSlop={{top: HitSlopOffset, left: HitSlopOffset, bottom: HitSlopOffset, right: HitSlopOffset}} style={styles.button}> 
              <Text>{"BUTTON"}</Text>
            </TouchableOpacity>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#aaa',
    padding: 5
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
