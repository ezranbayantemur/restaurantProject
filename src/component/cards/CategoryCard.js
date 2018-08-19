import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const CategoryCard = (props) => {
        const { imageStyle, viewStyle, nameStyle, detailStyle } = styles;
        return(
            <TouchableOpacity onPress={props.onPress}>
                <View style={viewStyle}>
                    <ImageBackground style={imageStyle} source={props.categoryphoto}>
                        <View  style={detailStyle}>
                            <Text style={nameStyle}> {props.categoryname} </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    };

const styles = {
    imageStyle : {
        height: 190
    },
    viewStyle : {
       borderTopWidth: 3,
       borderColor: '#03a9f4'
    },
    nameStyle : {
        color: 'white',
        fontSize: 30,
        fontFamily: 'sans-serif-thin'
    },
    detailStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    }
}

export default CategoryCard;