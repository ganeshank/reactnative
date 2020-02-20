import React, { Component } from 'react';

import {Keyboard, Text, View, TextInput, StyleSheet} from 'react-native';

import LoginScreen from './src/views/login/login.js'

export default function App() {
  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});