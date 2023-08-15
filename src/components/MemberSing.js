import { SafeAreaView, Alert } from 'react-native'
import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'

const MemberSing = ({ navigation }) => {

  function handleSubmit(){

    if(!userName || !userSurname || !userAge || !userMail ){
      Alert.alert('Suba-Fit', 'Form Alanı Boş Bırakılamaz !' )
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userGender,
      userMail
    };
    navigation.navigate('MemberResultScreen', {user});
  }

  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userMail, setUserMail] = useState(null);

  return (
    <SafeAreaView>
      <Input label="Üyenin Adı" placeholder="Üyenin adını giriniz..." onChangeText={setUserName} />
      <Input label="Üyenin Soyadı" placeholder="Üyenin soyadını giriniz..." onChangeText={setUserSurname} />
      <Input label="Üyenin Yaşı" placeholder="Üyenin yaşını giriniz..." onChangeText={setUserAge} />
      <Input label="Üyenin Cinsiyeti" placeholder="Üyenin cinsiyetini giriniz..." onChangeText={setUserGender} />
      <Input label="Üyenin E-posta" placeholder="Üyenin e-posta adresini giriniz..." onChangeText={setUserMail} />
      <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
    </SafeAreaView>
  )
}

export default MemberSing