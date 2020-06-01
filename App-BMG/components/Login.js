import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Text style={styles.bmg}>
        BMG
        </Text>
      </View>

      <View style={styles.divProfile}>
          <TextInput 
            style={styles.input}
            placeholder={"Login"}
          />
      </View>

      <View style={styles.divPassword}>
          <TextInput 
            style={styles.input}
            placeholder={"Senha"}
          />
      </View>

      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    alignItems: 'center',
    margin: -60,

  },
  barra: {
    width: 400,
    height: 150,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  bmg: {
    paddingTop: 60,
    color: 'white',
    fontSize: 60,
  },
  divProfile: {
    marginLeft: 0,
    marginTop: 100,
    width: 250,
    height: 50,
    borderRadius: 10,
    padding: 0,
    backgroundColor: 'orange',
  },
  divPassword: {
    marginLeft: 0,
    marginTop: 80,
    width: 250,
    height: 50,
    borderRadius: 10,
    padding: 0,
    backgroundColor: 'orange',
  },
  input: {
    marginTop: 0,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 250,
    height: 50,
    paddingTop: 0,
    paddingLeft: 15, 
    fontSize: 25,
    color: 'black',
  },
  btn: {
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 5,
    textAlign: "center",
    paddingLeft: 60,
  },
  btnText: {
    color: 'orange',
    fontSize: 25,
  },
});