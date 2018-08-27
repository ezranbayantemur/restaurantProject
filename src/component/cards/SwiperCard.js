import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from '../../style'

const SwiperCard = (props) => {
    return(
        <View>
            <ImageBackground style={styles.imageStyle} source={props.foodphoto}>
                <Text> {props.foodname} </Text>
            </ImageBackground>
        </View>
    )
}

export default SwiperCard