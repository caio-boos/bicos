import React, { useEffect, useState, useRef } from "react";
import {Modal,View,Text, SafeAreaView} from 'react-native';
import { styles } from "./styles";
import { Button } from "../../../utility/Button";
export function Telephone({ ...rest }) {
   
    return (
       <SafeAreaView style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Você pode nos{`\n`} informar o eu número?</Text>
                <View style={styles.row}>
                    <View style={styles.boxCodcountry}>
                        <Text style={styles.Codcountry}> BR + 55</Text>
                    </View>
                    <View style={styles.boxTelephone}>
                        <Text style={styles.Codcountry}>67 981810805</Text>
                    </View>
                </View>
                <Text style={styles.Notice}>
                    Enviaremo um código para confirmar se você é de verdade. 
                    Tarifas de SMS e dados podem ser
                    aplicáveis.
                </Text>
            </View>
       </SafeAreaView>
    );
}
