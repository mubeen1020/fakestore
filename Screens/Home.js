import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from '../Styling/Styling';

function Home() {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  console.log(allCategories);
  const [Txt, setTxt] = useState("");
  const searchtxt = (e) => {
    setTxt(e.taget.value);
  }
  console.log(Txt)
  let datasearch = data.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(Txt.toString().toLowerCase())
    )
  })
  let handleRefresh = () => {
    setRefresh(true);
    // getProducts()
    setTimeout(() => {
      setRefresh(false);
      ToastAndroid.show('Refreshed Successfully', 2000);
    }, 1500);
  };
  let getData = () => {
    setloader(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then(suss => {
        console.log('Data Founded line 15');
        setData(suss.data);
        setloader(false);
      })
      .catch(err => {
        console.log('data not found line 20');
        setloader(false);
      });
  };

  // extracting all categories from main data state Array
  let getCategories = () => {
    let li = data.map(x => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };
  // Render Item By TextInput
 
  useEffect(() => {
      getData();
      getCategories();
  }, []);
  return loader ? (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '1A1A1A',
      }}>
      <Text style={{fontSize: 30, textAlign: 'center', color: '#91F877'}}>
        LoagingPlease wait......
      </Text>
    </View>
  ) : (
    <>
      <View style={style.BackGround}>
        <View>
          <Text
            style={[
              style.Heading,
              {
                fontSize: 30,
                marginVertical: 10,
                marginLeft: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#91F877',
                paddingVertical: 15,
              },
            ]}>
            Fake Store
          </Text>
        </View>

        <View style={{marginHorizontal: 15}}>
          <TextInput style={style.input} placeholder="Search...." onChangeText={(e) => {
              setTxt(e)
            }} />
        </View>

        <View style={{flexDirection: 'row', margin: 15}}>
          <ScrollView horizontal={true} style={{paddingVertical:10}} >
            {allCategories.map((item, index) => (
              <View style={{marginHorizontal: 5}} key={index}>
                <TouchableOpacity style={style.btn}  >
                  <Text style={{color: 'black', fontWeight: '600',padding:3}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <ScrollView refreshControl={
              <RefreshControl onRefresh={handleRefresh} refreshing={refresh} />
            }>
          {datasearch.map((item, index) => (
            <View key={index} style={{alignItems: 'center'}}>
              <View style={[style.cards]}>
                <View>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: 150,
                      height: 150,
                      resizeMode: 'cover',
                      marginLeft: 20,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      marginTop: 10,
                      marginBottom: 4,
                      color: 'black',
                    }}>
                    {' '}
                    {item.title.slice(0, 25) +
                      (item.title.length > 25 ? '...' : '')}
                  </Text>
                  <Text style={{marginVertical: 3, color: 'black'}}>
                    Ratings: {item.rating.rate}
                  </Text>
                  <Text style={{color: 'black'}}>Price: ${item.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default Home;
