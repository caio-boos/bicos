import{StyleSheet,Dimensions} from 'react-native';
const height = Dimensions.get('window').height
export const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:10,
        top:height/20,
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:9999,

    }
})