import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Pendidikan Teknik Informatika</Text>
          </View>

          <View style={styles.box2}>
              <Text style={{fontSize: 30, color: 'green', textAlign:'center'}}>SLIDER</Text>
          </View>

          <View style={styles.box3}>
              <View style={styles.columbox3}>
                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>A</Text>
                  </View>

                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>B</Text>
                  </View>

                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>C</Text>
                  </View>

                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>C</Text>
                  </View>
              </View>

              <View style={styles.columbox3}>
                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>A</Text>
                  </View>

                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>B</Text>
                  </View>

                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>C</Text>
                  </View>

                  <View style={styles.boxkecil}>
                      <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>C</Text>
                  </View>
            </View>

          </View>

          <View style={styles.box4}>
            <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>#JaenKuliahdiPTI</Text>
          </View>
      </View>
    );
  }
  
}
//bagian main direction
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#1B5E20',
    flexDirection: 'column'
  }, 

  box1: {
    flex: 1, //2:6
    backgroundColor: 'green',
    // flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },

  box2: {
    flex: 3, //3 :6
    backgroundColor: 'yellow', 
    flexDirection: 'row', //main axis
    justifyContent:'space-around', //secondary axis
    alignItems: 'center'
  },

  box3: {
    flex: 3, //1:6
    backgroundColor: 'yellow',
    flexDirection: 'column',
    margin:10,
    padding: 1
  }, //6 diperoleh dari nilai flex1+flex2+flex3

  box4: {
    flex: 1, //1:6
    backgroundColor: 'green',
    justifyContent:'space-around',
    alignItems: 'center'
  },

  columbox3: {
    flex: 3, //1:6
    backgroundColor: 'yellow',
    flexDirection: 'row',
    margin:10,
    padding: 1
  },

  boxkecil: {
    flex: 1, //1:6
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    margin: 5
    // padding: 20
  },
  text: {
    fontSize: 50
  },

});
  