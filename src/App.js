import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import OrgChart from './OrgChart';
import NodeComponent from '.NodeComponent';
import PinchZoomView from 'react-native-pinch-zoom-view';

const tree = {
  nodes: [
    {
      text: 'node 0',
      nodes: [
        {
          text: 'node 1',
          nodes: [
            {
              text: 'node 11',
            },
          ],
        },
        {
          text: 'node 2',
          nodes: [
            {
              text: 'node 21',
              // nodes: [{text: 'node 3'}, {text: 'node 7'}],
            },
            {
              text: 'node 22',
              // nodes: [{text: 'node 3'}, {text: 'node 7'}],
            },
          ],
        },
        {
          text: 'node 3',
          nodes: [
            {
              text: 'node 31',
            },
          ],
        },
      ],
    },
  ],
};

export default class App extends Component {
  render() {
    return (
      <PinchZoomView style={styles.container} minScale={1} maxScale={5}>
        <OrgChart
          tree={tree}
          nodeWidth={16}
          nodeHeight={5}
          floorHeight={4}
          nodeSpace={4}
          NodeComponent={NodeComponent}
        />
      </PinchZoomView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
