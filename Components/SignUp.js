import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import Terms from './Terms';
// import firebase from 'firebase';

// const createTable = () => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS Registration (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL)'
//     );
//   });
import { createTable, insert } from '../user/db.js';
createTable();
// .then(() => {
//   console.log('Initializing database');
// })
// .catch((err) => {
//   console.log('Initiazlind db failed');
//   console.log(err);
// });
const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register_user = async () => {
    console.log(
      firstName,
      lastName,
      userName,
      email,
      phone,
      password,
      confirmPassword
    );

    if (!firstName) {
      alert('Please fill firstName');
      return;
    }
    if (!lastName) {
      alert('Please fill lastName');
      return;
    }
    if (!userName) {
      alert('Please fill userName');
      return;
    }
    if (!email) {
      alert('Please fill email');
      return;
    }
    if (!phone) {
      alert('Please fill Phone number');
      return;
    }
    if (!password) {
      alert('Please fill password');
      return;
    }
    if (!confirmPassword) {
      alert('Please fill confirmPassword');
      return;
    }
    if (password != confirmPassword) {
      alert('Your password donot match');
      return;
    } else {
      const dbResult = await insert(
        firstName,
        lastName,
        userName,
        email,
        phone,
        password,
        confirmPassword
      );
      console.log(dbResult);
    }
  };

  return (
    <View style={{ backgroundColor: '#0BC4C4', height: '100%' }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>Create Your account</Text>

          <View>
            <View style={styles.boxalign}>
              <TextInput
                style={{ ...styles.textbox, width: 160 }}
                placeholder="First Name"
                onChangeText={(firstName) => setFirstName(firstName)}
              />

              <TextInput
                style={{ ...styles.textbox, width: 160 }}
                placeholder="Last Name"
                onChangeText={(lastName) => setlastName(lastName)}
              />
            </View>
            <TextInput
              style={styles.textbox}
              placeholder="User Name"
              onChangeText={(userName) => setUserName(userName)}
            />
            <TextInput
              style={styles.textbox}
              placeholder="Email"
              required
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.textbox}
              placeholder="Phone"
              keyboardType="numeric"
              onChangeText={(phone) => setPhone(phone)}
            />
            <View style={styles.textAndBox}>
              <TextInput
                style={styles.textbox}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
              <Text style={{ color: 'grey', alignSelf: 'center' }}>
                Your Password must be at least 8 characters long.
              </Text>
            </View>

            <TextInput
              style={styles.textbox}
              placeholder=" Confirm Password"
              secureTextEntry={true}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
            <Terms />
            <View style={styles.button}>
              <Button title="Sign Up" onPress={register_user} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0BC4C4',
    padding: 30,
    zIndex: 1,
  },
  scrollView: {
    marginHorizontal: 0,
    padding: 0,
    zIndex: -20,
  },
  text: {
    fontSize: 25,
    marginTop: 50,
    color: 'white',
    marginBottom: 25,
  },
  textbox: {
    backgroundColor: 'white',
    width: 350,
    maxWidth: 400,
    height: 50,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: 'black',
    marginTop: 25,
    borderStartWidth: 5,
    borderStyle: 'solid',
    fontSize: 15,
  },
  boxalign: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  textAndBox: {
    marginBottom: -22,
  },
  button: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 25,
  },
});
export default SignUp;
