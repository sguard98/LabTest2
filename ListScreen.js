import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

function ListScreen(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert(err);
      });
  }, []);

  function renderItem({item}) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          setLoading(true);
          fetch(`https://jsonplaceholder.typicode.com/users/${item.userId}`)
            .then((res) => res.json())
            .then((user) => {
              setLoading(false);
              props.navigation.navigate('DetailScreen', {
                item,
                user,
              });
            })
            .catch((err) => {
              Alert.alert(err);
            });
        }}>
        <Text style={{}}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating color={'red'} size={'large'} />
      </View>
    );
  }
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 0,
    height: 60,
    justifyContent: 'center',
    borderWidth: 0.5,
    margin: 6,
    alignItems: 'center',
  },
});

export default ListScreen;
