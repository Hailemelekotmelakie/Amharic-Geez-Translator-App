import { StyleSheet, Alert, View, BackHandler, Image } from 'react-native';

const FooterNav = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.images} source={require('../assets/analysis_analytics_magnifier_search_locate_magnifyng_glass_icon_153884.png')} />
                <Image onStartShouldSetResponder={questions} style={styles.images} source={require('../assets/questions.png')} />
                <Image onStartShouldSetResponder={info} style={styles.images} source={require('../assets/info.png')} />
                <Image onStartShouldSetResponder={backPressed} style={styles.images} source={require('../assets/logout-rounded.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    images: {
        width: 30,
        height: 30
    }
})

const backPressed = () => {
    Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
            { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'Yes', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false });
    return true;
}

const info = () => {
    Alert.alert(
        'ስለ እኛ',
        'ይህ መዝገበ ቃላት በዓለም ሆነ በኢትዮጵያ ምናልባት በሶፍት ዌር ደረጃ የመጀመሪያ ሳይሆን አይቀርም:: እኔም ይህንን ስራ ስሰራ እንቁ የሆኑ ሊቃውንት የጻፏቸውን መጽሐፍት አሁን ዘመኑን በሚጠይቀው የመረጃ አየያዝ እንዲስማማ ለማድረግ ተሞከረ እንጂ የሌለውን መፍጠር አስቤ አይደለም::\nእናም የሃገራችንን ጥንታዊ ታሪክ ፤ ፍልስፍና፤ ባህል፤ሐይማኖት፤ ጥበብ ለማወቅ ለሚፈልግ ሁሉ በቀላሉ የቀረበ ሶፍት ዌር ነው:: \nለኢትዮጵያ ኦርቶዶክ ተዋህዶ ሐይማኖት ደግሞ ግእዝ ቋንቋ የበለጠ ቁርኝነት ስላለው ሐይማኖታዊ ክንዋኔዎችንን እና አስተምህሮቶችን ለማዎቅ በእጅጉ ይረዳል::\n\nየዚህ ሶፍዊ ዌር ባለቤት የኢትዮጵያ ኦርቶዶክ ተዋህዶ ሐይማኖት እምነት ስርዐት እና ትውፊት መጠበቅ ተቀዳሚ ተግባሩ አድርጎ ለሚንቀሳቀሰው ለኢ / ኦ / ተ / ቤ / ን የሰ / ት / ትቤቶች  ማደራጃና መምሪያ ስር ማኅበረ ቅዱሳን ነው::\n\n\nዋቢ መጽሐፍት\n1.የወጣቶች መስታዎት(አለቃ ኪዳነ ወልድ ክፍሌ)\n2.ያሬድ ሰዋሰው(መሪጌታ ያሬድ ዘጨጎዴ ሃና)\n3.ትንሳኤ ግእዝ(መ/ር ደሴ ቀለብ)\n\n\nአዘጋጅ ፦ በለጠ ጌታቸው\nኢሜል: beletegetachew44@gmail.com\nስልክ: 09-20 46 98 38\n2008 ዓ.ም',
        [
            { text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        ]
    )
}

const questions = () => {
    Alert.alert(
        'ጥያቄ ካላችሁ',
        'ለስይስተም ችግር 👇\nHailemelekotmelakie1991@gmail.com\n\nለቃላት ስህተት 👇\nbeletegetachew44@gmail.com\n\nወይም\n\nስልክ 👇\n09 20 46 98 38',
        [
            { text: 'እሽ' },
        ]
    )
}

export default FooterNav;
