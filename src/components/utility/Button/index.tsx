import React, { useEffect } from "react";
import{TouchableOpacity,TouchableOpacityProps,ActivityIndicator,Text,StyleProp,TextStyle,ViewStyle, View}from 'react-native';
import { temas } from "../../../global/temas";
import { styles } from "./styles";
type Props = TouchableOpacityProps&{
    texto:string,
    loading?:boolean,
    color?:string,
    styleText?:StyleProp<TextStyle>,
    style?:StyleProp<ViewStyle>,
    iconLeft?:React.ReactNode
    iconRigth?:React.ReactNode,
    textAling?:'center'|'baseline'|'flex-end'|'flex-start'|'stretch'
}

type sizes= {
    width:string,
}
export  function Button({...rest}:Props){
    function ChecksSizesContent():any{
        const json:sizes = {width:'80%'}
        if(!rest?.iconLeft && !rest.iconRigth){
            json.width  = '100%'
        }
        return json
    }
   
    return(
        <TouchableOpacity 
            {...rest} 
            style={[styles.button,rest.style]} 
            activeOpacity={0.6}
            disabled={rest.loading}
        >   
            {rest?.iconLeft &&
                <View style={[styles.iconLeft]}>
                    {rest.iconLeft} 
                </View>
        
            }
            <View style={[styles.content,ChecksSizesContent(),rest?.textAling&&{alignItems:rest.textAling}]}>
                {rest?.loading 
                    ? 
                    <ActivityIndicator color={temas.colors.primary} />
                    :
                    <Text style={[styles.texto,rest?.styleText&&rest.styleText]}>{rest.texto}</Text>
                }
            </View>
            {rest?.iconRigth &&
                <View style={styles.iconLeft}>
                    {rest.iconRigth}
                </View>
            }
        </TouchableOpacity>
    );
}