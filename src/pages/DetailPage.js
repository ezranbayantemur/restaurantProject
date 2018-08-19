import React from 'react'
import { View, ScrollView, Text, Image, Dimensions } from 'react-native'
import DetailHeader from '../component/headers/DetailHeader'

const DetailPage = (props) => {
    return(
        <View style={{ backgroundColor: '#03a9f4', flex : 1 }}>
            <ScrollView>
                <Image style={styles.swipperStyle} source={{ uri : props.foodphoto}} />    
                <DetailHeader header={props.foodheader} />
                <View style={styles.header}>
                    <Text style={styles.textStyle}> {props.foodinfo} </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = {
    swipperStyle : {
        width : Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4 
    },
    textStyle: {
        fontFamily: 'sans-serif-thin',
        fontSize : 25,
        fontWeight: 'bold',
        color: 'white',
    },
    header: {
        alignItems: 'flex-start',
        margin: 25,
    }
}

export {DetailPage};