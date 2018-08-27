import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../style'

const DetailHeader = (props) => {
    return(
        <View style={styles.detailviewStyle}> 
            <Text style={styles.detailtextStyle}> {props.header} </Text> 
        </View>
    );
};

export default DetailHeader;