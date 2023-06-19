import React from 'react';
import List from '../List';
import Container from '../Container';

const options = {
  method: 'GET',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '259a8ff148msh01faa1650cde805p13d8d3jsn32381fe69cbf',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

const MainNews = ({ navigation }) => {

  //Component for fetching and representing news from the server

    const [data, setData] = React.useState([]);
 
  //function gets news from the server while the page is landing
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
        });
        return unsubscribe;
    }, [navigation]);

    // fetch function gets data from the server
    const fetchData = () => {
      fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&setLang=English&freshness=Week&textFormat=Raw&safeSearch=Off', options)            
        .then(response => response.json())
        .then(response => setData([...response.value]))
        .catch(err => console.error(err));
    };

  return (
    //container is reused component for nesting any kind of data
    <Container>
      {/*list renders data on the screen*/}
      <List data={data} fun={fetchData}/>
    </Container>
  );
}

export default MainNews;