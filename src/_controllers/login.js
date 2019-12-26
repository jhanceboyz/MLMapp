import React from 'react';
import {View, Text, Root, Container, Button} from 'native-base';
import styles from '../_css/login.scss';
import {TextInput, Image} from 'react-native';
const login = props => {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.wallpaper}
          source={require('../_assets/images/mainpagewallpaper.png')}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.line}>Marketting Next Level</Text>
        <TextInput
          style={styles.username}
          placeholder="Enter E-mail"></TextInput>
        <TextInput
          style={styles.username}
          placeholder="Enter Password"></TextInput>
        <Button style={styles.button}>
          <Text>Login</Text>
        </Button>
        <Button
          onPress={() => props.navigation.navigate('register')}
          style={styles.alreadyhaveaccount}>
          <Text
            style={{fontWeight: '600', color: 'black', padding: 0, margin: 0}}>
            Don't have an account!
          </Text>
        </Button>
      </View>
    </Container>
  );
};


export default login;
