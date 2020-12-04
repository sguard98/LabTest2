import React from 'react';
import {View, Text} from 'react-native';

function DetailScreen(props) {
  const {item, user} = props.route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>id : {item.id}</Text>
      <Text>title : {item.title}</Text>
      <Text>user name: {user.username}</Text>
    </View>
  );
}

export default DetailScreen;
