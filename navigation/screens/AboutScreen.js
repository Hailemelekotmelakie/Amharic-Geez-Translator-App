import * as React from 'react';
import { View, StyleSheet, Text, Linking, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.agTranslator}>Amharic to Geez translator</Text>
                <Text>
                    ይህ መዝገበ ቃላት በዓለም ሆነ በኢትዮጵያ ምናልባት በሶፍት ዌር ደረጃ የመጀመሪያ ሳይሆን አይቀርም:: እኔም ይህንን ስራ ስሰራ እንቁ የሆኑ ሊቃውንት የጻፏቸውን መጽሐፍት አሁን ዘመኑን በሚጠይቀው የመረጃ አየያዝ እንዲስማማ ለማድረግ ተሞከረ እንጂ የሌለውን መፍጠር አስቤ አይደለም::
                    {'\n'}እናም የሃገራችንን ጥንታዊ ታሪክ ፤ ፍልስፍና፤ ባህል፤ሐይማኖት፤ ጥበብ ለማወቅ ለሚፈልግ ሁሉ በቀላሉ የቀረበ ሶፍት ዌር ነው::
                    {'\n'}ለኢትዮጵያ ኦርቶዶክ ተዋህዶ ሐይማኖት ደግሞ ግእዝ ቋንቋ የበለጠ ቁርኝነት ስላለው ሐይማኖታዊ ክንዋኔዎችንን እና አስተምህሮቶችን ለማዎቅ በእጅጉ ይረዳል::
                    {'\n'}የዚህ ሶፍዊ ዌር ባለቤት የኢትዮጵያ ኦርቶዶክ ተዋህዶ ሐይማኖት እምነት ስርዐት እና ትውፊት መጠበቅ ተቀዳሚ ተግባሩ አድርጎ ለሚንቀሳቀሰው ለኢ / ኦ / ተ / ቤ / ን የሰ / ት / ትቤቶች  ማደራጃና መምሪያ ስር ማኅበረ ቅዱሳን ነው::
                    {'\n'}{'\n'}ዋቢ መጽሐፍት
                    {'\n'}1.የወጣቶች መስታዎት(አለቃ ኪዳነ ወልድ ክፍሌ)
                    {'\n'}2.ያሬድ ሰዋሰው(መሪጌታ ያሬድ ዘጨጎዴ ሃና)
                    {'\n'}3.ትንሳኤ ግእዝ(መ/ር ደሴ ቀለብ)
                    {'\n'}{'\n'}{'\n'}የስይስተሙ ባለቤት(System Owner)፦ በለጠ ጌታቸው
                    {'\n'}ኢሜል: beletegetachew44@gmail.com
                    {'\n'}2015 ዓ.ም. {'\n'}
                </Text>
                <Text style={styles.developed}>Developed by:- Hailemelekot 👇
                    {'\n'}
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('mailto:Hailemelekotmelakie1991@gmail.com')}>
                        Hailemelekotmelakie1991@gmail.com
                    </Text>
                    {'\n'}{'\n'}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItem: 'center',
        padding: 20,
        marginTop: 40,
    },
    developed: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'
    }
    ,
    agTranslator: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    }
})