import React from 'react';
import {View, Text, Root, Container} from 'native-base';
import styles from '../_css/home.scss'
function home() {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.header_title}>Home</Text>
      </View>
      <View style={styles.body}>
          <Text>Body</Text>
      </View>
      <View style={styles.footer}>
          <Text>Footer</Text>
      </View>
    </Container>
  );
}

export default home;
