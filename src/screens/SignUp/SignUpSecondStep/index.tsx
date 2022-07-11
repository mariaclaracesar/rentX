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
import { PassWordInput } from '../../../components/PassWordInput '
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

export function SignUpSecondStep(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack()
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
            <FormTitle>2. Senha</FormTitle>
            <PassWordInput 
              iconName='lock'
              placeholder='Senha'
            />

            <PassWordInput 
              iconName='lock'
              placeholder='Repetir senha'
            />
          </Form>

          <Button 
            title='Cadastrar'
            color={theme.colors.success}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}