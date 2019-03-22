import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DStyles from './utils/styles'

import Header from './components/Header'
import TopBtn from './components/TopBtn'
import Card from './components/Card'

export default  App => {

    fakeDB = [
        {id:1, url:'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg', title:'Nevoeiro', desc:'Floresta De Coníferas'},
        {id:2, url:'https://cdn.pixabay.com/photo/2012/12/09/00/16/smoke-69124__340.jpg', title:'Fumaça', desc:'Trabalho Artístico'},
        {id:3, url:'https://cdn.pixabay.com/photo/2012/03/04/00/17/abstract-21851__340.jpg', title:'Folha', desc:'Abstract'},
        {id:4, url:'https://cdn.pixabay.com/photo/2012/03/03/23/52/animal-21649__340.jpg', title:'Água Viva', desc:'Escuro'},
        {id:5, url:'https://cdn.pixabay.com/photo/2014/09/07/16/37/nettle-437963__340.jpg', title:'Urtiga', desc:'Planta Verde'},
        {id:6, url:'https://cdn.pixabay.com/photo/2019/03/04/15/54/lost-places-4034478__340.jpg', title:'Lugares Perdidos', desc:null},
        {id:7, url:'https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572__340.jpg', title:'Maçãs', desc:'Frutas'},
        {id:8, url:'https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653__340.jpg', title:'Café', desc:'Grãos De Café'},
        {id:9, url:'https://cdn.pixabay.com/photo/2015/09/06/00/46/yellow-926728__340.jpg', title:'Amarela', desc:'Parede'},

	]

    return (
      <View style={styles.container}>
        <Header />
		
		<TopBtn/>

		<FlatList numColumns={3}
          data={fakeDB} keyExtractor={item => `${item.id}`}
          renderItem={({item}) => 
			  <Card  url={item.url} title={item.title} desc={item.desc} />  
		}/>

		</View>
    );
  }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: DStyles.colors.main,
	  }
});
