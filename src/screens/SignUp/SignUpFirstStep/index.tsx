import React from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle
} from './styles';

export function SignUpFirstStep(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack()
  }

  function handleNextStep(){
    navigation.navigate('SignUpSecondStep')
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active/>
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}conta
          </Title>
          <Subtitle>
            Faça seu cadastro de{'\n'}
            Forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
              <Input 
                iconName='user'
                placeholder='Nome'
                placeholderTextColor={theme.colors.text_detail}
              />

              <Input 
                iconName='mail'
                placeholder='E-mail'
                keyboardType='email-address'
                placeholderTextColor={theme.colors.text_detail}
              />
              
              <Input 
                iconName='credit-card'
                placeholder='CNH'
                keyboardType='numeric'
                placeholderTextColor={theme.colors.text_detail}
              />
          </Form>

          <Button 
            title='Próximo'
            onPress={handleNextStep}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}