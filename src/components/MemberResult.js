import {SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

const MemberResult = ({route}) => {

  const {user} = route.params;  

  return (
    <SafeAreaView>
      <Text style={styles.message}>Kayıt Başarılı !</Text>  
      <Text style={styles.label}>Üyenin Adi: {user.userName}</Text>
      <Text style={styles.label}>Üyenin Soyadi: {user.userSurname}</Text>
      <Text style={styles.label}>Üyenin Yaşı: {user.userAge}</Text>
      <Text style={styles.label}>Üyenin Cinsiyeti: {user.userGender}</Text>
      <Text style={styles.label}>Üyenin E-maili: {user.userMail}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    message:{
        fontWeight:'bold',
        fontSize:25,
        margin:5,
        textAlign:'center',
        color:'#B5DFCA',
        marginTop:10
    },
    label:{
        fontWeight:'bold',
        fontSize:20,
        margin:10,
        color:'#627264'
    }
})

export default MemberResult 