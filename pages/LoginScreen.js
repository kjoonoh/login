import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const LoginScreen = () => {
    const navigation = useNavigation()



    return (
        <View>
            <Text>
                로그인
                <Button title="click" onPress={() => navigation.navigate("Signup")} />
                
            </Text>
            
        </View>
    );
};

export default LoginScreen;