import React from 'react';
import { Text, View } from 'react-native';

const SubHeader = (props) => {
    return(
        <View style={styles.viewStyle}> 
            <Text style={styles.subtextStyle}> {props.header} </Text> 
        </View>
    );
};

const styles = {
    viewStyle: {
        flexDirection: 'column',
        height: 50,
        backgroundColor: '#0288d1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    subtextStyle: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'sans-serif-thin'
    },
};

export default SubHeader;