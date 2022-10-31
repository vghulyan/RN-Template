import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

const CustomButton = () => {
  return (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      <Text style={{fontFamily: 'Arial', fontSize: 15}}>
        Login with Facebook222
      </Text>
    </Icon.Button>
  );
};

export default CustomButton;
