
import React,{useState} from 'react'
import {SafeAreaView, View,Image,Text}from 'react-native'
import {styles} from './styles'
import Logo_white from '../../assests/logo-white.png'
import { SessionLoginInitial } from '../../components/screens/sessionLogIninitial';
import { SessionLoginWithNetworks } from '../../components/screens/sessionLoginWithNetworks';
import { SessionTextInformationWelcome } from '../../components/screens/sessionTextInformationWelcome';
import { Back } from '../../components/utility/Button/Back';
import ModalCreateAccount from '../../components/screens/CreateAccount/Modal';
export default function Welcome() {
  const[showLoginWithNetworks,setShowLoginWithNetworks] = useState(false);
  const[finshAnimation,setFinshAnimation]= useState(true);
  const[visibeCreateCount,setVisibeCreateCount] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
        <ModalCreateAccount 
            visible={visibeCreateCount}
            onClose={()=>setVisibeCreateCount(false)}
        />
        {showLoginWithNetworks&&
            <Back 
                onPress={()=>setShowLoginWithNetworks(false)}
                color='#FFF'
            />
        }
        <View style={styles.logo_box}>
            <Image 
                source={Logo_white}
                style={styles.logo}
            />
            <Text style={styles.logo_title}>Bicos</Text>
        </View>
        <SessionTextInformationWelcome 
            height={showLoginWithNetworks?100:250}
            onAnimationEnd={()=>{}}
        />
        <View style={styles.box}>
            <SessionLoginInitial 
                OnpreesButtonCreate={() => {setVisibeCreateCount(true)}}
                OnpreesButtonLogin={() =>{
                     setShowLoginWithNetworks(true)
                     setFinshAnimation(false)
                }}
                viseble={!showLoginWithNetworks&&finshAnimation}
            />
            <SessionLoginWithNetworks 
                viseble={showLoginWithNetworks} 
                finshAnimation={(fish)=>{
                    setFinshAnimation(fish)
                }} 
            />
            <Text style={styles.text_help}>
                Problemas para fazer o login?
            </Text>
        </View>
    </SafeAreaView>
  );
}

