import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Header } from 'react-navigation'

const GenericHeader = props => {
  return (
    <View style={styles.header}>
      <Header {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    alignItems: 'center', justifyContent: 'center',
    marginTop: Platform.OS == "ios" ? 20 : 0
  }
});

export default GenericHeader
