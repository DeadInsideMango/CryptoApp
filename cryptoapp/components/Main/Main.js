import React from 'react';
import { config } from '../../logic/Config';
import List from '../List';
import Container from '../Container';
import { options } from '../../logic/CoinrankingOptions';


const Main = ({ navigation }) => {

  //Rendres the Apps homescreen

  const [data, setData] = React.useState([]);
  const [filtredData, setFiltredData] = React.useState([])

//function that sets up home screen header from the parent
  React.useEffect(() => {
      navigation.getParent().setOptions({ 
          headerShadowVisible: false,
          title: 'Crypto App',
          headerTransparent: false,
          headerLargeTitle: true,
      });
  }, [navigation]);

  //function that fetches data from a server while the page is labding
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        fetchData();
    });
    return unsubscribe;
  }, []);

//fetch function
  const fetchData = async () => { 
    {/*
    fetch(config.url, options)
	    .then(response => response.json())
	    .then(response => setData([...response.data.coins]))
	    .catch(err => console.error(err));
    */}  
    try {
      const response = await fetch(config.url, options);
      const json = await response.json();
      setData([...json.data.coins]);
      setFiltredData([...json.data.coins]);
    } catch (err) {
      console.error(err);
    }
  };

// Return method that is used to render home screen of app
  return(
    //container is reused compenent for nesting any data on the screen 
    <Container>
      {/*list is nested data*/}
      <List data={filtredData} fun={fetchData}/>
    </Container>
  );
}

export default Main;