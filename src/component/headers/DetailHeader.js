import React from 'react';
import { Text, View } from 'react-native';

const DetailHeader = (props) => {
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
        alignItems: 'flex-start',
        elevation: 10
        
    },
    subtextStyle: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        paddingLeft: 10 
    },
};

export default DetailHeader;