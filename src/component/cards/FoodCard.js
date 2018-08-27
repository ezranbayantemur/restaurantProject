import  React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../style'

const FoodCard = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.foodviewStyle}>
                <ImageBackground style={styles.foodimageStyle} source={{uri : props.foodphoto}}>
                    <View  style={styles.fooddetailStyle}>
                        <Text style={styles.foodnameStyle}> {props.foodname} </Text>
                        <Text style={styles.foodpriceStyle}> {props.foodprice} </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

export default FoodCard;