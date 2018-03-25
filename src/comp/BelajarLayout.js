import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text}>1</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.text}>A</Text>
            <Text style={styles.text}>B</Text>
            <Text style={styles.text}>C</Text>
          </View>

          <View style={styles.box3}>
            <Text style={styles.text}>3</Text>
          </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'column'
  }, 
  box1: {
    flex: 1, //2:6
    backgroundColor: 'green',
    // flexDirection: 'row',
    justifyContent:'flex-end'
  },
  box2: {
    flex: 1, //3 :6
    backgroundColor: 'yellow', 
    flexDirection: 'row', //main axis
    justifyContent:'space-around', //secondary axis
    alignItems: 'center'
  },
  box3: {
    flex: 1, //1:6
    backgroundColor: 'red'
  }, //6 diperoleh dari nilai flex1+flex2+flex3
  text: {
    fontSize: 50
  },

});
  