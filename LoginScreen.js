import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import Home from './Home';

export default function LoginScree(porps) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [homeScreen, setHomeScreen] = useState(false);
  const [loginScreen, setLoginScreen] = useState(porps.visible);
  const [userName, setUserName] = useState('');
  const userInfo = porps.data;

  const loginHandler = () => {
    userInfo.map(user => {
      if (user.email == userEmail && user.password == userPassword) {
        setHomeScreen(true);
        setLoginScreen(false);
        setUserName(user.name);
      } else if (user.email == userEmail || user.password == userPassword) {
        Alert.alert('Invalid Login!', 'Please enter valid information', [
          {text: 'okay', style: 'destructive'},
        ]);
      } else {
        Alert.alert('Invalid Login!', "You don't have account please sign up", [
          {text: 'okay', style: 'destructive', onPress: porps.createAccount},
        ]);
      }
      return;
    });
  };
  return (
    <View>
      <Modal visible={loginScreen} animationType="fade">
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome Back</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={text => {
              setUserEmail(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => {
              setUserPassword(text);
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              loginHandler();
            }}>
            <Text style={styles.buttonText} secureTextEntry={true}>
              Sign In
            </Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Don't have any accuont?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#407088',
                  fontSize: 15,
                  borderBottomColor: '#9E7CE3',
                  borderBottomWidth: 1,
                }}
                onPress={porps.createAccount}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={homeScreen}>
        <Home name={userName} login={() => setLoginScreen(true)} />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    width: '80%',
    height: 55,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    width: '80%',
    height: 55,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#385170',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 15,
  },
  text: {
    fontSize: 15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 30,
    color: '#142d4c',
  },
});
