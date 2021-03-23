import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {G, Rect, Text} from 'react-native-svg';

export default function Member(props) {
  // console.log('__member: ', props.name);
  return (
    <G>
      <Rect
        x={0}
        y={0}
        width={40}
        height={10}
        stroke="green"
        strokeWidth="1"
        fill="grey"
      />
      <Text x={10} y={7} fontSize={5} fill="black">
        {props.name}
      </Text>
    </G>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'blue',
  },
  avatar: {height: 40, width: 40},
  title: {textAlign: 'center'},
});
