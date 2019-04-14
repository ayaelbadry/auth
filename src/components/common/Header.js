import {View, Text} from 'react-native';
import React from 'react';
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return(
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
}
const styles = {
    viewStyle :{
        backgroundColor: '#f48fb1',
        justifyContent: 'center',
        alignItems: 'center',
       
        hight: 130,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle:{
        fontSize: 30

    }
}
export { Header };
