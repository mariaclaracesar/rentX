import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
      <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://img2.gratispng.com/20180201/jpq/kisspng-car-audi-christmas-jeep-wrangler-vehicle-audi-5a736b7e173691.4030715215175135980951.jpg']}
        />
      </CarImages>

    </Container>
  );
}