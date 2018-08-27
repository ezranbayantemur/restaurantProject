import React from 'react'
import { View, ScrollView, Text, Image, Dimensions } from 'react-native'
import DetailHeader from '../component/headers/DetailHeader'
import styles from '../style'

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

export {DetailPage};