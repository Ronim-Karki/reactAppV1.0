import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
  RefreshControl,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HomeMenu = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = useState([]);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  const url =
    'https://rent-mate-91f5c-default-rtdb.firebaseio.com/products.json';
  const createProduct = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      const result = Object.values(resData);

      if (result) {
        setData(result);
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    createProduct();
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.view} onPress={() => Keyboard.dismiss()}>
          <TextInput style={styles.textbox} placeholder="Search item" />
          <TouchableOpacity>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          {data.map((item) => {
            const addtoCart = () => {
              setCart([item.id, item.title, item.imageUrl]);
            };
            console.log(item);
            console.log(cart);
            return (
              <View key={item.id} style={{ marginBottom: 25, marginTop: 25 }}>
                <Image
                  style={styles.displayImage}
                  source={{ uri: `${item.imageUrl}` }}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                    maxWidth: 150,
                  }}
                >
                  <Text style={styles.title}>Title: {item.category}</Text>
                  <Text style={styles.title}>Price: AU {item.price}$</Text>
                </View>
                <Button
                  title="Add to Cart"
                  style={{ backgroundColor: 'grey' }}
                  onPress={addtoCart}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textbox: {
    backgroundColor: 'white',
    width: 280,
    height: 50,
    borderRadius: 10,
    paddingLeft: 25,
    borderColor: 'black',

    borderStartWidth: 5,
    borderStyle: 'solid',
    fontSize: 15,
  },
  view: {
    margin: 5,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 15,
    marginLeft: -40,
    zIndex: 12,
  },
  title: {
    justifyContent: 'flex-end',
    color: 'grey',
    fontStyle: 'italic',
  },
  displayImage: {
    display: 'flex',
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  box: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 45,
  },
  container: {
    margin: 25,
  },
});
export default HomeMenu;
