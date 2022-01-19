import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React from 'react';
import { useGlobalContext } from '../Components/context';

const ItemsPosted = () => {
  const { data } = useGlobalContext();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Post History</Text>
        <View>
          {data.map((item, index) => {
            const { id, title, description, category, price } = item;
            return (
              <View style={styles.smallContainer}>
                <View>
                  <Text>Title : {title}</Text>
                  <Text>Description : {description}</Text>
                  <Text>Category : {category}</Text>
                  <Text>Price : {price}</Text>
                </View>
                <Button title="Edit" />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  smallContainer: {
    backgroundColor: 'white',
    // height: 100,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
});

export default ItemsPosted;
