import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LoginScree from './LoginScreen';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hi {props.name}</Text>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.button} onPress={props.login}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#142d4c',
    fontSize: 40,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
  },
  button: {
    width: '85%',
    height: 55,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#385170',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
  },
});
