import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyCart = ({ cart }) => {
  console.log(cart);
  return (
    <View>
      <Text>Hello i Am cart.</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default MyCart;
