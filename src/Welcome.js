import {SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from './components/Button/Button'


export default function Welcome({navigation}) {

    function goToMemberSign(){
        navigation.navigate('MemberSingScreen')
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Suba-Fit</Text>
      <Button 
      text='Üye Kaydı Oluştur'
      onPress={goToMemberSign}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    header:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        margin:10
    }
})