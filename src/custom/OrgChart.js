import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Member from './Member';
import Svg, {G, Line} from 'react-native-svg';

const numberNode = (node, depth) => {
  if (node.childrens && node.childrens.length > 0) {
    node.childrens.map((children, index) => {
      depth += numberNode(children, 0);
    });
  } else {
    depth = 1;
  }
  return depth;
};

const numberFloor = (node, level) => {
  if (!node.childrens || node.childrens.length == 0) {
    return level;
  } else {
    return Math.max(
      ...node.childrens.map((children) => numberFloor(children, level + 1)),
    );
  }
};

export default function OrgChart(props) {
  const {
    data,
    level,
    nodeWidth,
    nodeHeight,
    nodeSpace,
    nodeFloor,
    index,
    x,
  } = props;
  const canvasWidth = numberNode(data, 0) * (nodeSpace + nodeWidth);
  const canvasHeight = numberFloor(data, 1) * 2 * (nodeFloor + nodeHeight);
  // console.log(numberNode(data, 0));
  console.log('___node: ', data.name);
  // const number = numberFloor(data, 1);
  // console.log('___data: ', data);

  console.log(
    'w: ',
    canvasWidth,
    'h: ',
    canvasHeight,
    'node: ',
    numberNode(data, 0),
    'floor: ',
    numberFloor(data, 1),
    'x: ',
    x,
  );

  const renderNode = (data, x, level, index) => {
    console.log(data.name, x, level);
    const branchWidth =
      numberNode(data, 0) * (nodeSpace + nodeWidth) - nodeSpace;

    const distance_x = x * (nodeWidth + nodeSpace);

    return (
      <G x={distance_x} y={0}>
        {level > 0 && (
          <G>
            <Line
              stroke="red"
              strokeWidth="1"
              x1={Math.floor(nodeWidth / 2)}
              y1={0}
              x2={Math.floor(nodeWidth / 2)}
              y2={nodeFloor}
            />
          </G>
        )}
        <G x={0} y={nodeFloor}>
          <Member {...data} {...props} />
        </G>
        {data?.childrens ? (
          data.childrens.length > 1 ? (
            <G>
              <Line
                stroke="red"
                strokeWidth="1"
                x1={Math.floor(nodeWidth / 2)}
                y1={nodeHeight + nodeFloor}
                x2={Math.floor(nodeWidth / 2)}
                y2={2 * nodeHeight}
              />
              <Line
                stroke="red"
                strokeWidth="1"
                x1={Math.floor(nodeWidth / 2)}
                y1={2 * nodeFloor + nodeHeight}
                x2={branchWidth}
                y2={2 * nodeFloor + nodeHeight}
              />
            </G>
          ) : data.childrens.length == 1 ? (
            <G>
              <Line
                stroke="red"
                strokeWidth="1"
                x1={Math.floor(nodeWidth / 2)}
                y1={nodeFloor + nodeHeight}
                x2={Math.floor(nodeWidth / 2)}
                y2={2 * nodeFloor + nodeHeight}
              />
            </G>
          ) : null
        ) : null}

        <G y={nodeHeight + 2 * nodeFloor}>
          {data?.childrens &&
            data.childrens.map((child_node, index) => {
              // console.log('___node: ', node);
              let new_x = 0;
              for (let i = 0; i < index; i++) {
                const ex_node = data?.childrens[i];
                new_x += numberNode(ex_node, 0);
              }
              // new_x += x;
              console.log(new_x);
              let new_lv = level + 1;
              return renderNode(child_node, new_x, new_lv, index);
            })}
        </G>
      </G>
    );
  };

  return (
    // <View style={[styles.container, {marginTop: level * 60}]}>
    //   {/* <Member title={data.name} /> */}
    //   <Text>{data.name}</Text>
    // {data?.childrens &&
    //   data.childrens.map((person, index) => {
    //     // console.log('child data: ', data.childrens[0]);
    //     let new_x = 0;
    //     for (let i = 0; i < index; i++) {
    //       const ex_node = data.childrens[i];
    //       new_x += numberNode(ex_node, 0);
    //     }
    //     new_x += x;
    //     return (
    //       <OrgChart data={person} level={level + 1} index={index} x={new_x} />
    //     );
    //   })}
    // </View>
    <Svg
      height={Height}
      width={Width}
      viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}>
      {(data.childrens || []).map((children, index) =>
        renderNode(children, level, x, index),
      )}
    </Svg>
  );
}
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {flex: 1},
});
