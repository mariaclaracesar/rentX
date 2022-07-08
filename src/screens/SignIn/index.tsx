import React, { useState } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import * as Yup from 'yup'

import { useTheme } from 'styled-components';

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PassWordInput } from '../../components/PassWordInput '

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Footer
} from './styles';

export function SignIn(){
  const theme = useTheme();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSigin(){
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });
  
        await schema.validate({ email, password })
        Alert.alert('Tudo certo!')
    } catch(error){
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message)
      }else{
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar 
            barStyle="dark-content"
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>
              Estamos{'\n'}quase lá.
            </Title>
            <Subtitle>
            Faça seu login para começar{'\n'}
            uma experiência incrível.
            </Subtitle>
          </Header>

          <Form>
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              placeholderTextColor={theme.colors.text_detail}
              onChangeText={setEmail}
              value={email}
            />

            <PassWordInput 
              iconName='lock'
              placeholder='Senha'
              placeholderTextColor={theme.colors.text_detail}
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button 
              title='Login'
              onPress={handleSigin}
              enabled={true}
              loading={false}
            />

            <Button 
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              light
              onPress={() => {}}
              enabled={true}
              loading={false}
            />

          </Footer>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}