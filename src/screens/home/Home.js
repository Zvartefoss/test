import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, ActivityIndicator } from "react-native";
import { SpButtonTile, SpSwitch} from '../../components';
import STYLE from './Home.style';

import WS from '../../net/websocket/websocket'
import { useStore } from '../../store';

export default function Home(){

    const [priceThisHour, setPriceThisHour] = React.useState('XD');
    const [priceNextHour, setPriceNextHour] = React.useState('XD');

    const [isOpen, setIsOpen] = React.useState(false);

    const energyData = useStore((state) => state.energyData);
    const { getEnergyData, inc } = useStore((state) => state);

    const onOpen = (event) => {
        setIsOpen(true);
        console.log("home - websocket connection opened");
        getEnergyData();
    }
    
    const onClose = (event) => {
        setIsOpen(false);

        switch(event.code){
            case 1006: {
                // Abnormal closure - retrying connection
                break;
            }
            case 4403: {
                // Connection rejected - go to login
                break;
            }
            default: break;
        }
        console.log("home - websocket connection closed");
    }

    useEffect(() => {
        WS.addListener('open', onOpen);
        WS.addListener('close', onClose);
    }, []);

    // on-update: energyData
    useEffect(() => {
        if(energyData === undefined || energyData.length === 0) return;

        const day = new Date();
        const curHour = day.getHours();

        setPriceThisHour({ 
            price: `${Math.round(getPriceAtHour(energyData, curHour)*100)} øre`,
            time: fromToHoursString(curHour, curHour+1),
        });
        setPriceNextHour({ 
            price: `${Math.round(getPriceAtHour(energyData, curHour+1)*100)} øre`,
            time: fromToHoursString(curHour+1, curHour+2),
        });
    }, [energyData])

    const fromToHoursString = (fromHour, toHour) => {
        // 17:00 - 18:00
        return ('0'+fromHour).substr(-2) + ":00 - " + ('0'+toHour).substr(-2) + ":00";
    }

    const getPriceAtHour = (prices, hour) => {
        return prices[hour].NOK_per_kWh;
    }

    function SplashScreen() {
        return (
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" />
        </View>
        );
    }

    function Enheter() {
        const count = useStore((state) => state.count);
        return <SpButtonTile Text="Enheter" Subtext={count} onPress={() => inc()}/>
    }

    function Main() {
        return (
            <View style={[STYLE.Common.MainContainer, STYLE.Home.container]}>

                <View style={[STYLE.Common.tile, {height: 125}]} />

                <Enheter />

                <SpButtonTile Text="Nattsenk">
                    <SpSwitch 
                        switchWidth={90} buttonPadding={8} buttonWidth={25} iconWidth={20} 
                        onSwitch={() => console.log("on")} 
                        offSwitch={() => console.log("off")} 
                        onIcon={require('../../assets/icons/moon-on.png')} 
                        offIcon={require('../../assets/icons/moon-off.png')} 
                    startOff={true} />
                </SpButtonTile>

                <SpButtonTile Text="Smartstyring" >
                    <SpSwitch 
                    switchWidth={90} buttonPadding={8} buttonWidth={25} iconWidth={45} 
                    onSwitch={() => console.log("on")} 
                    offSwitch={() => console.log("off")} 
                    onIcon={require('../../assets/icons/lightning-on.png')} 
                    offIcon={require('../../assets/icons/lightning-off.png')}
                    startOff={true} />
                </SpButtonTile>

                <View style = {[STYLE.Home.statsTile]}>
                    <SpButtonTile style={[STYLE.Home.statsRow]} Text={priceThisHour.price} Subtext={priceThisHour.time} TextSize={18} SubtextSize={12} Margin={5} />
                    <SpButtonTile style={[STYLE.Home.statsRow]} Text={priceNextHour.price} Subtext={priceNextHour.time} TextSize={18} SubtextSize={12} Margin={5} />
                    <SpButtonTile style={[STYLE.Home.statsRow, STYLE.Home.statsBottom]} Text={'2 750 W'} Subtext={'Forbruk nå'} TextSize={18} SubtextSize={12} Margin={5} />
                    <SpButtonTile style={[STYLE.Home.statsRow, STYLE.Home.statsBottom]} Text={'98 kr'} Subtext={'Estimert sparing'} TextSize={18} SubtextSize={12} Margin={5} />
                    <SpButtonTile style={[STYLE.Home.statsRow, STYLE.Home.statsBottom]} Text={'1250 kr'} Subtext={'April'} TextSize={18} SubtextSize={12} Margin={5} />
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView>
        { isOpen
            ? <Main />
            : <SplashScreen />
        }
        </SafeAreaView>
    )
}