import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../style'

const Header = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.headertextStyle}> R E S T O R A N I M </Text>
        </View>
    );
};

export default Header;