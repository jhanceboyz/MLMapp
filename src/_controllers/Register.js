import React from 'react';
import {View, Text, Root, Container, Button} from 'native-base';
import styles from '../_css/register.scss'
import {TextInput, Image} from 'react-native'

function Register() {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
      <Image
          style={styles.wallpaper}
          source={require('../_assets/images/teamwork.png')}
        />
      </View>

      <View style={styles.body}>
          <Text style={styles.line}>Welcome</Text>
          <TextInput style = {styles.username} placeholder= "Enter E-mail"></TextInput>
          <TextInput style = {styles.username} placeholder= "Enter Password"></TextInput>
          <TextInput style = {styles.username} placeholder= "Confirm Password"></TextInput>
          <TextInput style = {styles.username} placeholder= "Partner of......"></TextInput>
          <Button style = { styles.button
          }><Text>Register</Text></Button>
          <Button style= {styles.alreadyhaveaccount}>
              <Text style={{fontWeight: '600' ,color: 'black', padding: 0, margin: 0}}>Already have an account!</Text>
            </Button>
      </View>
    </Container>
  );
}

export default Register;
