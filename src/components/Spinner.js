import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Spinner = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#4a76a8"/>
    </View>
);

