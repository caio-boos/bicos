import{StyleSheet,Dimensions} from 'react-native';
import { temas } from '../../../global/temas';
const height = Dimensions.get('window').height
export const styles = StyleSheet.create({
    iformation_box:{
        width:'100%',
        paddingHorizontal:20,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        top:height/1.7
    },
    information_text:{
        textAlign:'left',
        color:temas.colors.text_color_ligth,
        fontSize:14,
        fontWeight:'600'
    },
})