import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated,Modal} from 'react-native';
import { Telephone } from "../Telephone";
import { Back } from "../../../utility/Button/Back";
import { Button } from "../../../utility/Button";
import { styles } from "./styles";

type Prop = {
    visible:boolean,
    onClose:Function
}

export default function ModalAccount({ ...rest }:Prop) {
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        setVisible(rest?.visible)
    },[rest?.visible])
    
    return (
        <Modal
            visible={visible}
            animationType="slide"
        >
            <View style={styles.container}>
                <Back 
                    size={30} 
                    left={-1} 
                    color="gray"
                    onPress={()=>{
                        setVisible(false)
                        rest?.onClose&&rest?.onClose()
                    }}
                />
                <Telephone />
                <Button 
                    texto="Seguinte"
                    styleText={{ color: '#fff',fontSize:18,fontWeight:'bold'}}
                    textAling="center"
                    style={styles.button}
                />
            </View>
        </Modal>
    );
}
