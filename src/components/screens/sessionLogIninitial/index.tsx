import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Button } from "../../utility/Button";
import { styles } from "./styles";

type prop = {
    OnpreesButtonCreate: Function;
    OnpreesButtonLogin: Function;
    viseble: boolean;
};

const duration = 200

export function SessionLoginInitial({ ...rest }: prop) {
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        if (rest?.viseble) {
            fadeIn();
        } else {
            fadeOut();
        }
    }, [rest?.viseble]);

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: duration,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: duration,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Animated.View style={{ ...styles.button_box, opacity }}>
            {rest?.viseble && (
                <>
                    <Button
                        texto='CRIAR UMA CONTA'
                        styleText={{ color: '#535353' }}
                        style={styles.button}
                        textAling="center"
                        onPress={() => rest.OnpreesButtonCreate()}
                    />
                    <Button
                        texto='ENTRAR'
                        styleText={{ color: '#FFF' }}
                        style={styles.button_clear}
                        textAling="center"
                        onPress={() => rest.OnpreesButtonLogin()}
                    />
                </>
            )}
        </Animated.View>
    );
}
