import  React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const FoodCard = (props) => {
        const { imageStyle, viewStyle, nameStyle, priceStyle, detailStyle } = styles;
        return(
            <TouchableOpacity onPress={props.onPress}>
                <View style={viewStyle}>
                    <ImageBackground style={imageStyle} source={{uri : props.foodphoto}}>
                        <View  style={detailStyle}>
                            <Text style={nameStyle}> {props.foodname} </Text>
                            <Text style={priceStyle}> {props.foodprice} </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    };

const styles = {
    viewStyle : {
        margin : 10
    },
    imageStyle : {
        height: 190,
        width: Dimensions.get('window').width * 0.46,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    nameStyle : {
        color: 'white'
    },
    priceStyle : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    detailStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }
}
export default FoodCard;