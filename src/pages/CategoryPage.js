import React, { Component } from 'react';
import { ActivityIndicator, Text, Image, View, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import fire from '../dataprovider/fireconfig';
import CategoryCard from '../component/cards/CategoryCard';
import 'firebase/firestore'

const DB = fire.firestore();

// When a food upload (from Admin Panel (which is web site)) to database it's categoryID automatically pairing with selected category ID.

class CategoryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      categorylist:[],
      categoryloading: true,
      swiperList:[],
      swiperloading: true,
    }
    this.getCategoryDATA()
    this.getSwiperDATA()
  }
  
  loadDATA(){           // Sometimes retrieving data from Firebase may be take some times. So, when data is delayed and screen is loaded it doesn't looks so nice.
  if((this.state.categoryloading && this.state.swiperloading))  // For this not to happen we control both of swiper and category data. 
  return (                                                      // When all the data has come (LN: 41 , LN: 53) then all the components are displayed on the screen (LN: 79).
    <View style={styles.loadningView}>
      <ActivityIndicator style={styles.activityStyle} size={200} color='blue' />
      <Text style={styles.loadingText}> Yükleniyor.. </Text>
    </View>
    )
  }
  
  getCategoryDATA(){  
    const list = []
    DB.collection('xxxxxxxxxx').orderBy("xxxxxxx").get()
    .then(data => {
      data.forEach(test => {
        list.push(test.data())
      })  // All data has load
      this.setState({categoryloading : false})
      this.setState({categorylist : list})
    })
  }
  
  getSwiperDATA(){  // The admin can choose which foods to show on swiper from Admin Panel. 
    const list = [] // When a food's "Show to Showcase" property is select from panel, it's "onSwiper" attribute automatically changes to "true".
    DB.collection('xxxxxxxxxxx').where("onSwiper", '==', true).get()
    .then(data => {
      data.forEach(test => {
        list.push(test.data())
      })  // All data has load
      this.setState({swiperloading : false})
      this.setState({swiperList : list})
    })
  }
  
  renderSwiper(){ 
    return this.state.swiperList.map((categoryData, Id) =>
    <Image key={Id} style={styles.imageStyle} source={categoryData.foodPhoto} />
  )}
  
  renderCategory(){
    return this.state.categorylist.map((categoryData, Id) => 
    <CategoryCard 
    key={Id} 
    categoryname={categoryData.categoryName} 
    categoryphoto={categoryData.categoryPhoto} 
    onPress={()=> Actions.foods({      // When a category card has selected, it directly routes to food page and listing foods
      categoryID : categoryData.id,    // which are same category id with selected category. 
      header: categoryData.categoryName
    })}
    />
  )}
  
  render() {
    return (
      <View style={{ backgroundColor: '#03a9f4', flex: 1}}>
          {this.loadDATA()} 
       <ScrollView>
        <Swiper key={this.state.swiperList.length} style={styles.swipperStyle} showsButtons={false} autoplay={true}>
          {this.renderSwiper()}
        </Swiper>
          {this.renderCategory()} 
       </ScrollView> 
      </View>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = {
  swipperStyle : {
    width, 
    height: height * 0.4 
  },
  imageStyle : {
    flex: 1,
    width, 
    height: height * 0.4,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  loadningView : { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityStyle : {
    alignSelf: 'center',
    marginTop: 20 
  },
  loadingText : { 
    marginTop: 25 ,
    color: 'white',
    fontSize: 50,
    fontFamily: 'sans-serif-thin'
   }
}

export {CategoryPage};