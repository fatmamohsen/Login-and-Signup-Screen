import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import LoginScreen from './LoginScreen';

export default function App() {
  const [hasAccount, setHasAccount] = useState(true);
  const [userData, setUserData] = useState([
    {name: 'Fatma', email: 'fatma@gmail.com', password: 'fatma12345'},
  ]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const accountHandler = () => {
    setHasAccount(false);
  };
  const createAccountHandler = () => {
    console.log(userName);

    if (userName === '' || userPassword === '' || userEmail === '') {
      Alert.alert('Invalid Sign up!', 'Please enter valid information', [
        {text: 'okay', style: 'destructive'},
      ]);
      setHasAccount(false);
    } else {
      setUserData(currentData => [
        ...currentData,
        {name: userName, email: userEmail, password: userPassword},
      ]);
      setHasAccount(true);
    }
  };
  return (
    <>
      <LoginScreen
        visible={hasAccount}
        createAccount={accountHandler}
        data={userData}
      />
      <Modal visible={!hasAccount} animationType="fade">
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create Account</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => setUserName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={text => setUserEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setUserPassword(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={createAccountHandler}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => setHasAccount(true)}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 30,
    color: '#142d4c',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 15,
  },
  text: {
    fontSize: 17,
    color: '#407088',
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
  },
});
