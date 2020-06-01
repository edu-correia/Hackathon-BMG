import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image style={styles.menu} source={require('../assets/menu.png')} />
      <Image style={styles.profile} source={require('../assets/mark.png')} />
      <View style={styles.container2}>
        <Text style={styles.num}>
          #514
        </Text>
        <Text style={styles.title}>
          Claudinei Augusto Júnior
        </Text>
        <Text style={styles.text1}>
          Nº da conta:             9842-7
        </Text>
        <Text style={styles.text1}>
          Agência:                           15
        </Text>
      </View>
      
      <Text style={styles.text2}>
        Metas apoiadas:
      </Text>
      <View style={styles.container3}>
        <Text style={styles.text3}>
          Carro 
        </Text>
        <View style={styles.greenbar}></View>
        <View style={styles.graybar}></View>
        <Text style={styles.text4}>
          ♥48
        </Text>
      </View>

      <View style={styles.container4}>
        <Image style={styles.icon} source={require('../assets/paw.png')} />
        <Image style={styles.icon} source={require('../assets/home.png')} />
        <Image style={styles.icon} source={require('../assets/target.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  menu: {
    position: "absolute",
    top: 20,
    left: 10,
    height: 40,
    width: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#202020',
    padding: 0,
    alignItems: "center",
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "black", 
    marginBottom: 10,
  },
  profile: {
    height: 220,
    width: 220,
    borderRadius: 110,
    marginBottom: 10,
  },

  num: {
    margin: 0,
    marginTop: 0,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#F68E1E",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  text1: {
    color: "#ffffffB2",
    fontSize: 25,
  },

  text2: {
    color: "#fff",
    fontSize: 25,
  },
  container3: {
    flexDirection: "row",
    marginBottom: 100,
  },
  text3: {
    color: "#fff",
    fontSize: 23,
  },
  greenbar: {
    marginTop: 5,
    backgroundColor: "#9BE73A",
    height: 23,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  graybar: {
    marginTop: 5,
    backgroundColor: "#000",
    height: 23,
    width: 66,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text4: {
    color: "#D43333",
    fontSize: 23,
  },

  container4: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
  },
   icon: {
    height: 45,
    width: 45,
  },
});
