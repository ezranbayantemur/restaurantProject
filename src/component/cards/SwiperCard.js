import React from 'react'
import { View, Text, ImageBackground, Dimensions } from 'react-native'

const SwiperCard = (props) => {
    return(
        <View>
            <ImageBackground style={styles.imageStyle} source={props.foodphoto}>
                <Text> {props.foodname} </Text>
            </ImageBackground>
        </View>
    )
}

export const { width, height } = Dimensions.get('window');

const styles = {
   imageStyle : {
      flex: 1,
      width, 
      height: height * 0.4,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row'
    }
}

export default SwiperCard