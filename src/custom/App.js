import React from 'react';
import {StyleSheet} from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import OrgChart from './OrgChart';

const data = {
  childrens: [
    {
      name: 'Name1-1',
      partner: 'Name1-2',
      birthDay: '01/02/1803',
      dob: '02/03/1874',
      childrens: [
        {
          name: 'Name2-1',
          partner: 'Name2-2',
          birthDay: '05/04/1823',
          dob: '06/05/1904',
          childrens: [
            {
              name: 'Name3-1',
              partner: 'Name3-2',
              birthDay: '19/07/1841',
              dob: '22/03/1924',
              childrens: [
                {
                  name: 'Name4-1',
                  partner: 'Name4-2',
                  birthDay: '15/09/1873',
                  dob: '21/06/1954',
                },
                {
                  name: 'Name4-3',
                  partner: 'Name4-4',
                },
              ],
            },
            {
              name: 'Name3-2',
              partner: '3-4',
              birthDay: '01/02/1803',
              dob: '02/03/1874',
              childrens: [
                {
                  name: 'Name4-10',
                  partner: '3-4',
                  birthDay: '01/02/1803',
                  dob: '02/03/1874',
                  childrens: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Name2-2',
          partner: 'Name2-4',
          birthDay: '01/02/1803',
          dob: '02/03/1874',
          childrens: [
            {
              name: 'Name3-4',
              partner: 'Name2',
              birthDay: '01/02/1803',
              dob: '02/03/1874',
              childrens: [],
            },
          ],
        },
        {
          name: 'Name2-3',
          partner: 'Name2-4',
          birthDay: '01/02/1803',
          dob: '02/03/1874',
          childrens: [
            {
              name: 'Name3-3',
              partner: 'Name2',
              birthDay: '01/02/1803',
              dob: '02/03/1874',
              childrens: [],
            },
          ],
        },
        {
          name: 'Name2-4',
          partner: 'Name2-4',
          birthDay: '01/02/1803',
          dob: '02/03/1874',
          childrens: [
            {
              name: 'Name3-5',
              partner: 'Name2-4',
              birthDay: '01/02/1803',
              dob: '02/03/1874',
              childrens: [],
            },
            {
              name: 'Name3-6',
              partner: 'Name2-4',
              birthDay: '01/02/1803',
              dob: '02/03/1874',
              childrens: [],
            },
          ],
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <PinchZoomView style={styles.container} minScale={1} maxScale={2}>
      <OrgChart
        data={data}
        level={0}
        index={0}
        nodeWidth={20}
        nodeHeight={10}
        nodeFloor={5}
        nodeSpace={40}
        x={0}
      />
    </PinchZoomView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
