import React, { useEffect, useRef, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Svg, Polygon } from 'react-native-svg';
import Canvas from 'react-native-canvas';

import { SpButton } from '../../components';
import { COLORS, TYPOGRAPHY } from '../../constants';


export default function EnergyZone() {

    const getZone = ""

    const [zone, setZone] = useState(getZone === "" ? "Øst - NO1" : getZone);

    const originalWidth = 382;
    const originalHeight = 479;
    const aspectRatio = originalWidth / originalHeight;
    const windowWidth = Dimensions.get("window").width;

    const style = StyleSheet.create({
        container: {
            width: '100%',
            aspectRatio: aspectRatio,
            marginTop: 50,
            alignItems: 'center',
        },
        stuff: {
            //backgroundColor: 'pink',
        },
        text: {
            //backgroundColor: 'blue',
            textAlign: 'center',
            fontSize: 25,
            fontFamily: TYPOGRAPHY.FONT_FAMILY_BOLD,
            color: COLORS.RussianViolet,
            
        },
        test: {
            //backgroundColor: 'lightblue',
            position: 'absolute',
            width: '55%',
            top: "55%",
            right: "2%",
            alignItems: 'center',
        },
    })

    _zoneClick = (zone) => {
        console.log(zone);
        setZone(zone);
    }

    return (
        <SafeAreaView>
            <View style={[style.container]}>
                <Svg
                    height="90%"
                    width="100%"
                    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
                    style={[style.stuff]}>
                    <Polygon
                        points="123,409 127,424 138,428 143,423 142,409 153,398 157,388 151,374 153,364 161,363 164,357 151,343 152,338 139,336 130,345 108,344 95,355 103,370 97,394 109,407 117,407"
                        fill={zone === "Øst - NO1" ? "violet" : "grey"}
                        scale={1}
                        onPress={() => _zoneClick("Øst - NO1")}
                        stroke="black"
                        strokeWidth="3"
                    />
                    <Polygon
                        points="36,393 36,415 40,420 39,430 49,443 55,451 73,454 91,445 104,430 115,427 119,421 117,407 109,407 97,394"
                        fill={zone === "Sør - NO2" ? "purple" : "grey"}
                        scale={1}
                        onPress={() => _zoneClick("Sør - NO2")}
                        stroke="black"
                        strokeWidth="3"
                    />
                    <Polygon
                        points="141,241 133,240 135,251 113,282 104,273 97,283 90,283 88,294 59,308 42,329 41,343 38,351 44,353 63,344 73,353 95,355 108,344 130,345 139,336 152,338 153,282 166,271"
                        fill={zone === "Midt - NO3" ? "pink" : "grey"}
                        scale={1}
                        onPress={() => _zoneClick("Midt - NO3")}
                        stroke="black"
                        strokeWidth="3"
                    />
                    <Polygon
                        points="348,87 355,70 344,62 350,51 348,42 332,34 325,38 319,30 312,53 306,37 300,41 297,60 294,42 284,53 266,48 263,55 267,65 260,68 256,82 251,72 245,77 237,68 228,71 228,82 216,90 211,101 214,110 211,118 200,104 196,112 189,110 186,123 170,138 164,149 180,139 196,133 200,138 190,146 186,162 168,183 164,198 155,210 156,223 141,241 166,271 174,271 183,262 179,252 187,233 184,224 188,210 199,202 199,194 206,178 220,171 218,156 212,151 216,144 228,139 230,126 235,123 242,130 249,131 251,120 251,110 262,96 272,108 282,111 292,110 303,113 308,101 308,76 319,62 335,68 344,73"
                        fill={zone === "Nord - NO4" ? "indigo" : "grey"}
                        scale={1}
                        onPress={() => _zoneClick("Nord - NO4")}
                        stroke="black"
                        strokeWidth="3"
                    />
                    <Polygon
                        points="38,351 35,371 38,386 36,393 97,394 103,370 95,355 73,353 63,344 44,353"
                        fill={zone === "Vest - NO5" ? "magenta" : "grey"}
                        scale={1}
                        onPress={() => _zoneClick("Vest - NO5")}
                        stroke="black"
                        strokeWidth="3"
                    />
                </Svg>

                <View style={[style.test]}>
                    <Text style={[style.text]}>{zone}</Text>
                    {zone !== getZone && <SpButton style={{ width: '50%' }}>lagre</SpButton>}
                </View>
            </View>
        </SafeAreaView>
    )
}