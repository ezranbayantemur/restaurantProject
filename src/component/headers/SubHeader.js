import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../style'

const SubHeader = (props) => {
    return(
        <View style={styles.subviewStyle}> 
            <Text style={styles.subtextStyle}> {props.header} </Text> 
        </View>
    );
};

export default SubHeader;