import React from 'react';
import Container from '../Container';
import Separator from '../Separator';
import ModalItem from './ModalItem';
import CoinNameItem from './CoinNameItem';
import CoinDescriptionItem from './CoinDescriptionItem';
import { options } from '../../logic/CoinrankingOptions';
import { Text, ActivityIndicator } from 'react-native';
import URLItem from './URLItem';

const Modal = ({ navigation, route }) => {

  //Component renders information represented on modal page with detailed coin information

  React.useLayoutEffect(() => {
    navigation.setOptions({ 
        title: data.name,
        headerShadowVisible: false,
    });
});

  const [data, setData] = React.useState('');
  
  //this function fetches data about exact coin from the server when the page is landing
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        fetchData();
      }, 500)
      });
    return unsubscribe;
  }, [navigation])

  //this function fetches the data about coin
  const fetchData = () => {
    fetch(`https://coinranking1.p.rapidapi.com/coin/${route.params?.uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
    .then(response => response.json())
    .then(response => setData(response.data.coin))
    .catch(err => console.error(err));
  };

  //returns activity indicator if the data == ''
  if (data === '') {
    return(
      <Container>
        <ActivityIndicator size={'large'}/>
        <Text>{' Loading ... '}</Text>
      </Container>
    )
  }

  //renders modal screen with information about the coin
  return (
    <Container>
      <ModalItem>
        <CoinNameItem coinName={data.name} symbol={data.symbol}/>
        <Separator/>
        <CoinDescriptionItem coinDescriptoin={data.description}/>
        <Separator/>
        <URLItem websiteUrl={data.websiteUrl}/>
      </ModalItem>
   </Container>
  );
}

export default Modal;