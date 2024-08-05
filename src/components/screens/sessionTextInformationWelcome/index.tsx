import React, { useEffect, useState, useRef } from "react";
import { View, Text, Animated, Easing } from 'react-native';
import { styles } from "./styles";

export function SessionTextInformationWelcome({ height, onAnimationEnd }) {
    const [heightAnim] = useState(new Animated.Value(0));
    const prevHeightRef = useRef(0);

    useEffect(() => {
        if (height !== prevHeightRef.current) {
            prevHeightRef.current = height;
            animateHeightChange();
        }
    }, [height]);

    const animateHeightChange = () => {
        Animated.timing(heightAnim, {
            toValue: height,
            duration: 200,
            // easing: Easing.inOut(Easing.ease), // Usando uma curva de temporização suave
            useNativeDriver: false,
        }).start(() => {
            onAnimationEnd && onAnimationEnd();
        });
    };

    return (
        <Animated.View style={{ ...styles.iformation_box, height: heightAnim }}>
            <Text style={styles.information_text}>
                Ao tocar em “Entrar”, você concorda com os nossos Termos.
                Saiba como processamos os seus dados em nossas Politica de 
                privacidade e Político de Cookies.
            </Text>
        </Animated.View>
    );
}
