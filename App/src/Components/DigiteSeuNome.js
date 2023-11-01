import React, {useState} from 'react'
import {SafeAreaView ,Text, TextInput} from 'react-native'
import estilo from '../estilo'

export default props =>{
    const [nome, setNome] = useState('teste')
return(
    <SafeAreaView>
        <Text> {nome} </Text>
        <TextInput
        placeholder='Digite Seu Nome:'
        value={nome}
        onChangeText={nome=>setNome(nome)}
        />
    
    </SafeAreaView>
)
}