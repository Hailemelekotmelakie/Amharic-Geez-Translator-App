import * as React from 'react';
import { useState } from 'react';
import { Pressable, View, StyleSheet, Text, TextInput, SafeAreaView, Alert, ScrollView, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { useNetInfo } from '@react-native-community/netinfo';

export default function CommentScreen({ navigation }) {
    const netInfo = useNetInfo();
    const [Data, setData] = useState([{
        Email: "",
        Amharic: "",
        Geez: "",
        Comment: "",
    }]);
    const [Error, setError] = useState(null);

    const sendData = async () => {
        if (netInfo.isConnected) {
            if (Data[0].Email && Data[0].Comment) {
                const result = await Axios.post('https://dictionary-a7c40-default-rtdb.firebaseio.com/comments.json', Data)
                    .then(res => {
                        Alert.alert(
                            'በትክክል ተልኳል',
                            'እናመሰናለን!!!',
                            [
                                { text: 'እሽ' },
                            ]
                        )
                        navigation.navigate('መፈለጊያ')
                        setData([{
                            Email: "",
                            Amharic: "",
                            Geez: "",
                            Comment: "",
                        }]);
                        setError(null);
                    });

            } else {
                setError('ተፈላጊ ሳጥኖችን አልሞሉም,\n የኢሜልና አስታያየት መስጫ ሳጥኑ አስፈላጊ ነው።')
            }
        } else {
            Alert.alert(
                'እንተርኔት ያስፈልጋል!',
                'እባክዎት ዳታ ወይም WIFI ያብሩ።',
                [
                    { text: 'እሽ' },
                ]
            )
        }
    }
    return (
        <ScrollView>
            <View >
                <SafeAreaView style={styles.Container}>
                    <Text style={styles.addWords}>የአስተያየት መስጫ ሳጥን</Text>
                    <Text style={styles.setError}>{Error}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(email) => {
                            setData([{
                                Email: email,
                                Amharic: Data[0].Amharic,
                                Geez: Data[0].Geez,
                                Comment: Data[0].Comment
                            }])
                        }}
                        value={Data[0].email}
                        placeholder="ኢሜል *"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(amharic) => {
                            setData([{
                                Email: Data[0].Email,
                                Amharic: amharic,
                                Geez: Data[0].Geez,
                                Comment: Data[0].Comment
                            }])
                        }}
                        value={Data[0].Amharic}
                        placeholder="የአማርኛ ቃል(optional)"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(geez) => {
                            setData([{
                                Email: Data[0].Email,
                                Amharic: Data[0].Amharic,
                                Geez: geez,
                                Comment: Data[0].Comment
                            }])
                        }}
                        value={Data[0].Geez}
                        placeholder="የግዕዝ ቃል(optional)"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.textArea}
                        multiline={true}
                        numberOfLines={14}
                        value={Data[0].Comment}
                        onChangeText={(comment) => {
                            setData([{
                                Email: Data[0].Email,
                                Amharic: Data[0].Amharic,
                                Geez: Data[0].Geez,
                                Comment: comment
                            }])
                        }}
                        placeholder="አስተያየት *"
                        keyboardType="default"
                    />
                    <Pressable style={styles.button} onPress={sendData}
                    >
                        <TouchableOpacity>
                            <Text style={styles.text}>ላክ</Text>
                        </TouchableOpacity>

                    </Pressable>
                </SafeAreaView >
            </View >
        </ScrollView >

    );
}
const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60
    },
    input: {
        height: 'auto',
        width: '86%',
        fontSize: 15,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        borderColor: "green",
        borderWidth: 0.5
    },
    textArea: {
        height: 100,
        width: '86%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "green",
        borderWidth: 0.5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'tomato',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    addWords: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    setError: {
        color: 'red'
    }

});

const Success = () => {
    Alert.alert(
        'ጥያቄ ካላችሁ',
        'ለስይስተም ችግር',
        [
            { text: 'እሽ' },
        ]
    )
}