import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { temas } from "../../../global/temas";
import { styles } from "./styles";
import { Button } from "../../utility/Button";
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

type prop = {
    viseble: boolean;
    finshAnimation:(finish:boolean)=>void
};
const durationAnimation = 200
export function SessionLoginWithNetworks({ viseble,finshAnimation }: prop) {
    const [opacity] = useState(new Animated.Value(viseble ? 1 : 0));
    const [disabled,setDisabled] = useState(false)

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: durationAnimation,
            useNativeDriver: true,
        }).start();
        setDisabled(false)
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: durationAnimation,
            useNativeDriver: true,
        }).start();

        setTimeout(()=>{
            setDisabled(true)
            finshAnimation(true)
        },durationAnimation)
       
    };

    useEffect(() => {
        if (viseble) {
            fadeIn();
        } else {
            fadeOut();
        }
    }, [viseble]);



    return (
        <Animated.View
            style={{
                ...styles.button_box,
                opacity: opacity,
                display:disabled?'none':'flex'
            }}
        >
            <Button
                texto='ENTRAR COM A APPLE'
                styleText={{ color: '#fff' }}
                style={styles.button_clear}
                textAling="center"
                iconLeft={
                    <AntDesign
                        name="apple1"
                        color={'#FFF'}
                        size={16}
                        style={{ marginLeft: 10 }}
                    />
                }
            />
            <Button
                texto='ENTRAR COM O FACEBOOK'
                styleText={{ color: '#fff' }}
                style={styles.button_clear}
                textAling="center"
                iconLeft={
                    <FontAwesome5
                        name="facebook"
                        color={'#FFF'}
                        size={16}
                        style={{ marginLeft: 10 }}
                    />
                }
            />
            <Button
                texto='ENTRAR COM O NUMERO DE TELEFONE'
                styleText={{ color: '#fff' }}
                style={styles.button_clear}
                textAling="center"
                iconLeft={
                    <Ionicons
                        name="chatbubble-sharp"
                        color={'#FFF'}
                        size={16}
                        style={{ marginLeft: 10 }}
                    />
                }
            />
        </Animated.View>
    );
}
