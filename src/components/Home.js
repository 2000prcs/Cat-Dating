import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Text } from 'native-base';

const Home = ({ history }) => (
  <View >
      <Text style={styles.titleText}>Dear My Cat</Text> 
      <Button style={styles.btnStyle} rounded warning onPress={() => history.push('/login')}>
      {/* <Link to='/login'> */}
        <Text>Game Start</Text>
      {/* </Link> */}
      </ Button>
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'salmon',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  btnStyle: {
    alignSelf: 'center',
    marginTop: 20,
  }
});

export default Home;
