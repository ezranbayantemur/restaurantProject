import React , { Component } from 'react'
import { Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { Actions  } from 'react-native-router-flux'
import fire from '../dataprovider/fireconfig';
import FoodCard from '../component/cards/FoodCard'
import SubHeader from '../component/headers/SubHeader'
import 'firebase/firestore'

const ref = fire.firestore().settings({ timestampsInSnapshots: true })
let DB = fire.firestore();

class FoodPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodList : [],
            loading : true,
            categoryID : 0
        }
        this.getDATA();
    }

    loadDATA(){
        if(this.state.loading)
        return (
        <View style={styles.loadningView}>
            <ActivityIndicator style={styles.activityStyle} size={200} color='blue' />
            <Text style={styles.loadingText}> Yükleniyor.. </Text>
        </View>
        )
      }

    getDATA(){
        const list = []
        DB.collection('xxxxxxx').where("categoryID", "==", this.props.categoryID).get()
            .then(data => {
                data.forEach(test => {
                    list.push(test.data())
                })
                this.setState({ loading : false })
                this.setState({ foodList : list })             
            })
    }

    renderFood(){
        return this.state.foodList.map((data, Id) =>
            <FoodCard key={Id} 
                  foodname={data.foodName} 
                  foodprice={data.foodPrice + ' TL'}
                  foodphoto={data.fooodPhoto}

                  onPress={()=> {
                    if (data.foodDetail !== '')  
                        Actions.details({ 
                            foodphoto : data.fooodPhoto, 
                            foodheader : data.foodName,
                            foodinfo : data.foodDetail,
                        })
                    }}
            /> 
    )}

    render() {
        return (
            <View style={{ backgroundColor: '#03a9f4', flex: 1 }} >
            <SubHeader header={this.props.header} />
                {this.loadDATA()}
                <ScrollView >
                    <View style={styles.foodStyle}>
                    {this.renderFood()}
                    </View>
                </ScrollView>
            </View>
        )}
    }

const styles = {
    foodStyle : {
        flex : 1,
        flexWrap : 'wrap',
        flexDirection : 'row',
        paddingTop : 10
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
export {FoodPage};