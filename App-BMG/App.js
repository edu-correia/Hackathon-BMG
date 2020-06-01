import React , {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return ( 
    <Profile />
  );
}