import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> R E S T O R A N I M </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        color: 'white',
        fontSize: 27,
        fontFamily: 'shadowsIntoLight',
    },
    viewStyle: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#03a9f4',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 10,
    }
};

export default Header;