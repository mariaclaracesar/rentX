import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const WrapperLogo = styled.View`
  position: absolute;
  top: 5%;
`;

export const Content = styled.View`
  top: 45%;
  align-items: center;
  position: absolute;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  
  margin-top: 30px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  text-align: center;
  line-height: ${RFValue(25)}px;

  margin-top: 15px;
`;

export const Footer = styled.View`
  position: absolute;
  align-items: center;
  
  bottom: 5%;
  width: 100%;
  `;
