import{StyleSheet} from 'react-native';
import { temas } from '../../../global/temas';

export const styles = StyleSheet.create({
    button:{
        width:'100%',
        backgroundColor:temas.colors.primary,
        height:50,
        marginTop:20,
        borderRadius:5,
        alignItems:'center',
        // justifyContent:'space-evenly',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        flexDirection:'row',
    },
    texto:{
        fontSize:14,
        // fontFamily:temas.fonts.Semibold,
        color:temas.colors.primary
    },
    iconLeft:{
        width:'10%',
        // backgroundColor:'red',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    content:{
        width:'80%',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingHorizontal:10,
        // backgroundColor:'red'
    }
})