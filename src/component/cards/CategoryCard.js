import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from '../../style'

const CategoryCard = (props) => {
        return(
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.categoryviewStyle}>
                    <ImageBackground style={styles.categoryimageStyle} source={props.categoryphoto}>
                        <View  style={styles.categorydetailStyle}>
                            <Text style={styles.categorynameStyle}> {props.categoryname} </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    };

export default CategoryCard;