import React from "react";
import{TouchableOpacity,View}from 'react-native';
import { styles } from "./styles";
import {AntDesign} from '@expo/vector-icons';
// import { useNavigation} from '@react-navigation/native';
// import { toBrowse } from "../../global/premisses";
// import {screen}from '../../global/property'

import * as Animatable from 'react-native-animatable';
type Props ={
//    nav:screen,
   color?:string,
   onPress?:Function
   size?:number,
   left?:number

}
export  function Back({...rest}:Props){
    // const navigation  = useNavigation<any>();
    // const nav = (nav:screen)=>{
    //         nav&&toBrowse(navigation,{screen:nav})
    // }
    return(

        <Animatable.View 
            style={[styles.container,{left:rest?.left||10}]} 
            animation="fadeIn" duration={1000}
        >
            <TouchableOpacity 
                {...rest}
                activeOpacity={0.6}
                onPress={()=>{
                    rest?.onPress&&rest?.onPress()
                    // nav(rest.nav&&rest.nav)
                }}
            >
            <AntDesign 
                    name="left"
                    size={rest?.size||20}
                    color={rest.color?rest.color:'black'}
                    style={{ fontWeight: '600'}}
                    
            />
            </TouchableOpacity>

        </Animatable.View>
    );
}