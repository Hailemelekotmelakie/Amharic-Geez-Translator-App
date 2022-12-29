import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, TextInput, ImageBackground, View, Text, ScrollView } from 'react-native';
import { useEffect, useState } from 'react'
import jsonData from './Components/files.json'
import Footer from './Components/FooterNav'

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

  useEffect(() => {
    setJData(jsonData);
    const filtered = JData.filter((Dic) => {
      if (searchTerm[0].termValue == "") {
        if (Dic.id > counter[0].from && Dic.id < counter[0].upto) {
          return Dic;
        }
      }
      else
        if (Dic.geez.includes(searchTerm[0].termValue) && searchTerm[0].status == "geez") {
          return Dic;
        }
        else if (Dic.amharic.includes(searchTerm[0].termValue) && searchTerm[0].status == "am") {
          return Dic;
        }
    })
    setFiltered(filtered)
    setLoading(false)
  }, [counter, searchTerm, JData]);


  return (
    <View style={styles.container} >
      <View>
        <ImageBackground style={styleSearch.imageBackgrounds} source={require('./assets/scott-webb-arfGMDKir1w-unsplash.jpg')} resizeMode="cover">
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
          filtered.slice(0, counter[0].upto).map((Dic) => {
            return (
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
            )
          })
        }
      </ScrollView >
      <StatusBar style="light" />
      <Footer></Footer>
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
    fontSize: 16,
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
    backgroundColor: "#ffffff90",
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
    backgroundColor: "#ffffff90",
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
