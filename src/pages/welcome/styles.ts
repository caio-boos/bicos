import { Dimensions, StyleSheet} from 'react-native';
import { temas } from '../../global/temas';
const height = Dimensions.get('window').height
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:temas.colors.primary,
      justifyContent:'flex-end',
      paddingHorizontal:20,
      alignItems:'center'
    },
    box:{
        width:'100%',
        height:height/2,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingHorizontal:30
    },
    logo_box:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:height/3
        // marginBottom:height/6
    },
    logo:{
        width:100,
        height:100
    },
    logo_title:{
        color:temas.colors.text_color_ligth,
        fontSize:80
    },
    text_help:{
        marginTop:20,
        fontWeight:'bold',
        color:'#FFF'
    }
});
  