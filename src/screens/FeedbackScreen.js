import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native'
import NewsService from '../services/NewsService'

const newsService = new NewsService();

export const FeedbackScreen = () => {
    const [userName, setUserName] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [userMessage, setUserMessage] = useState('');

    return (
        <View style={{padding: 10}}>
            <Text style={styles.label}>Имя</Text>
            <TextInput
                style={styles.input}
                placeholder='Введите Ваше имя'
                textContentType='name'
                type='text'
                name='username'
                value={userName}
                onChangeText={text => setUserName(text)}
            />

            <Text style={styles.label}>Телефон</Text>
            <TextInput
                style={styles.input}
                type='number'
                placeholder='Введите Ваш телефон'
                textContentType='telephoneNumber'
                keyboardType='numeric'
                name='phone'
                value={userNumber}
                onChangeText={text => setUserNumber(text)}
                maxLength={11}
            />

            <Text style={styles.label}>Сообщение</Text>
            <TextInput
                multiline
                numberOfLines={4}
                style={styles.textarea}
                type='text'
                name='message'
                value={userMessage}
                onChangeText={text => setUserMessage(text)}
            />

            <TouchableHighlight
                style={styles.submitButton}
                onPress={() => {
                    if (!userName || !userNumber || !userMessage) {
                        Alert.alert('Заполните все поля!')
                    } else {
                        newsService.sendFeedback(userName, userNumber, userMessage, 0);
                        setUserName('');
                        setUserNumber('');
                        setUserMessage('');
                        Alert.alert('Ваше сообщение отправлено.')
                    }
                }}
            >
                <Text style={styles.submitButtonText}>Отправить</Text>
            </TouchableHighlight>
        </View>
    )
};

FeedbackScreen.navigationOptions = () => {
    return {
        headerTitle: 'Обратная связь',
        headerTitleStyle: {
            color: '#ffffff',
            fontSize: 20,
            fontFamily: 'open-sans-bold'
        }
    }
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#b8b8b8',
        height: 40,
        borderRadius: 3,
        paddingLeft: 15,
        marginBottom: 15
    },
    textarea: {
        borderWidth: 1,
        borderColor: '#b8b8b8',
        height: 100,
        borderRadius: 3,
        paddingLeft: 15,
        marginBottom: 15
    },
    label: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        marginBottom: 5
    },
    submitButton: {
        height: 40,
        backgroundColor: '#4a76a8',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButtonText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontFamily: 'open-sans-regular'
    }
});
