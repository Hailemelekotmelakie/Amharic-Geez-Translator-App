import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, ImageBackground, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react'
import JsonData from '../files.json'


const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 1500;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};

export default function App() {
    const [JData, setJData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([{ termValue: "", status: "" }])
    const [counter, setCounter] = useState([{ from: 0, upto: 40 }]);
    const [Loading, setLoading] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const letterTranslation = (letter) => {
        let nL = null

        if (letter == 'ፐ') { return 'ጰ' }
        if (letter == 'ፑ') { return 'ጱ' }
        if (letter == 'ፒ') { return 'ጲ' }
        if (letter == 'ፓ') { return 'ጳ' }
        if (letter == 'ፔ') { return 'ጴ' }
        if (letter == 'ፕ') { return 'ጵ' }
        if (letter == 'ፖ') { return 'ጶ' }

        if (letter == 'ጰ') { return 'ፐ' }
        if (letter == 'ጱ') { return 'ፑ' }
        if (letter == 'ጲ') { return 'ፒ' }
        if (letter == 'ጳ') { return 'ፓ' }
        if (letter == 'ጴ') { return 'ፔ' }
        if (letter == 'ጵ') { return 'ፕ' }
        if (letter == 'ጶ') { return 'ፖ' }

        if (letter == 'ሀ') { return 'ሐ' }
        if (letter == 'ሁ') { return 'ሑ' }
        if (letter == 'ሂ') { return 'ሒ' }
        if (letter == 'ሃ') { return 'ሓ' }
        if (letter == 'ሄ') { return 'ሔ' }
        if (letter == 'ህ') { return 'ሕ' }
        if (letter == 'ሆ') { return 'ሖ' }

        if (letter == 'ሐ') { return 'ሀ' }
        if (letter == 'ሑ') { return 'ሁ' }
        if (letter == 'ሒ') { return 'ሂ' }
        if (letter == 'ሓ') { return 'ሃ' }
        if (letter == 'ሔ') { return 'ሄ' }
        if (letter == 'ሕ') { return 'ህ' }
        if (letter == 'ሖ') { return 'ሆ' }

        if (letter == 'ዐ') { return 'አ' }
        if (letter == 'ዑ') { return 'ኡ' }
        if (letter == 'ዒ') { return 'ኢ' }
        if (letter == 'ዓ') { return 'ኣ' }
        if (letter == 'ዔ') { return 'ኤ' }
        if (letter == 'ዕ') { return 'እ' }
        if (letter == 'ዖ') { return 'ኦ' }

        if (letter == 'አ') { return 'ዐ' }
        if (letter == 'ኡ') { return 'ዑ' }
        if (letter == 'ኢ') { return 'ዒ' }
        if (letter == 'ኣ') { return 'ዓ' }
        if (letter == 'ኤ') { return 'ዔ' }
        if (letter == 'እ') { return 'ዕ' }
        if (letter == 'ኦ') { return 'ዖ' }

        if (letter == 'ሠ') { return 'ሰ' }
        if (letter == 'ሡ') { return 'ሱ' }
        if (letter == 'ሢ') { return 'ሲ' }
        if (letter == 'ሣ') { return 'ሳ' }
        if (letter == 'ሤ') { return 'ሴ' }
        if (letter == 'ሥ') { return 'ስ' }
        if (letter == 'ሦ') { return 'ሶ' }

        if (letter == 'ሰ') { return 'ሠ' }
        if (letter == 'ሱ') { return 'ሡ' }
        if (letter == 'ሲ') { return 'ሢ' }
        if (letter == 'ሳ') { return 'ሣ' }
        if (letter == 'ሴ') { return 'ሤ' }
        if (letter == 'ስ') { return 'ሥ' }
        if (letter == 'ሶ') { return 'ሦ' } else { nL = letter }

        return nL;
    }

    const conversion = () => {
        let newWord = ""
        let Words = searchTerm[0].termValue;
        for (let i = 0; i < Words.length; i++) {
            newWord = newWord.concat(letterTranslation(Words[i]));
        }
        return newWord;
    }

    useEffect(() => {
        setJData(JsonData)
        const filtered = JData.filter((Dic) => {
            if (searchTerm[0].termValue == "") {
                if (Dic.id > counter[0].from && Dic.id < counter[0].upto) {
                    return Dic;
                }
            }
            else if ((Dic.geez.includes(searchTerm[0].termValue) || Dic.geez.includes(conversion())) && searchTerm[0].status == "geez") {
                return Dic;
            }
            else if ((Dic.amharic.includes(searchTerm[0].termValue) || Dic.amharic.includes(conversion())) && searchTerm[0].status == "am") {
                return Dic;
            }
        })
        setFiltered(filtered)
        setLoading(false)
    }, [counter, searchTerm, JData]);


    return (
        <View style={styles.container} >
            <View>
                <ImageBackground style={styleSearch.imageBackgrounds} source={require('../../assets/scott-webb-arfGMDKir1w-unsplash.jpg')} resizeMode="cover">
                    <TextInput
                        style={styleSearch.Search1}
                        onChangeText={(newText) => {
                            setLoading(true)
                            setSearchTerm([{ termValue: newText, status: "am" }])
                            setCounter([{ from: 0, upto: 20 }])
                        }}
                        placeholder="ከአማርኛ ወደ ግዕዝ"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styleSearch.Search2}
                        onChangeText={(newText) => {
                            setLoading(true)
                            setSearchTerm([{ termValue: newText, status: "geez" }])
                            setCounter([{ from: 0, upto: 20 }])
                        }
                        }
                        placeholder="ከግዕዝ ወደ አማርኛ"
                        keyboardType="default"
                    />
                </ImageBackground>
            </View>


            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        const newState = [{ from: 0, upto: counter[0].upto + 20 }];
                        setCounter(newState);
                    }
                }}
            >

                {Loading ? <Text style={styles.LoadingStyle}>Loading ...</Text> :
                    <>
                        {filtered.length === 0 ?
                            <View>
                                <Text style={styles.noData}>
                                    <Text style={styles.noDataSpan}>
                                        {searchTerm[0].termValue}</Text>
                                    {"\n"}ቃላቱ አልተገኘም
                                </Text>
                            </View> :
                            filtered.slice(0, counter[0].upto).map((Dic) => {
                                return (
                                    <TouchableOpacity>
                                        <View key={Dic.id} style={styles.oneTranslation} >
                                            <View style={styles.oneTranslationLeft}>
                                                <Text style={styles.amharicTranslation}>
                                                    {Dic.amharic}
                                                </Text>
                                                <Text style={styles.geezTranslation}>
                                                    {Dic.geez}
                                                </Text>
                                            </View>
                                            <View style={styles.oneTranslationRight}>
                                                <Text style={styles.loveEmoji}>🕗</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                    </>
                }
            </ScrollView >
            <StatusBar style="light" backgroundColor="tomato" />
        </View >
    );
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        flexDirection: "column",
        justifyContent: "space-between"
    },
    oneTranslation: {
        flex: 1,
        backgroundColor: 'white',
        margin: 0.4,
        padding: 8,
        flexDirection: "row",
        justifyContent: 'center',
    },
    oneTranslationLeft: {
        flex: 5,
    },
    oneTranslationRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    loveEmoji: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        backgroundColor: 'transparent',
    },
    amharicTranslation: {
        color: '#d00000',
        fontSize: 18,
        paddingLeft: 10,
    },
    geezTranslation: {
        fontSize: 16,
        paddingLeft: 10,
        color: "black"
    },
    LoadingStyle: {
        textAlign: "center",
        justifyContent: "center",
        color: "blue",
        fontSize: 30
    },
    noData: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 20,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
        fontSize: 15,
    },
    noDataSpan: {
        color: "red",
    }
});

const styleSearch = StyleSheet.create({
    imageBackgrounds: {
        height: 180,
        width: "100%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "flex-end",
    },
    Search1: {
        flex: 1,
        backgroundColor: "#ffffffbb",
        width: "auto",
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 10,
        paddingLeft: 8,
        fontSize: 18,
        margin: 0.3,
        marginLeft: 5,
        textAlign: 'center',
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99,
    },
    Search2: {
        flex: 1,
        backgroundColor: "#ffffffaa",
        width: "auto",
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 10,
        paddingLeft: 8,
        fontSize: 18,
        margin: 0.3,
        marginRight: 5,
        textAlign: 'center',
        borderTopRightRadius: 49,
        borderBottomRightRadius: 49,
    },
})
