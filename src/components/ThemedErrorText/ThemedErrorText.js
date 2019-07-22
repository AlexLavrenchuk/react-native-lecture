import React from "react";
import { Text } from "react-native";


const ThemedErrorText = ({ text }) => {
    return (
        <Text style={{ color: 'red' }} >{ text }</Text>
    );
}

export default ThemedErrorText;