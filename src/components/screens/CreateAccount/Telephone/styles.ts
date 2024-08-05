import{StyleSheet,Dimensions} from 'react-native';
const height = Dimensions.get('screen').height 
export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:height/2,
        // backgroundColor:'red',
        // alignItems:'center',
        // justifyContent:'flex-end',
        // paddingHorizontal:40,
    },
    containerTitle:{
        width:'100%',
        // height:200,
        // backgroundColor:'white',
        alignItems:'flex-start',
        justifyContent:'center',
        // paddingHorizontal:40,
        marginTop:height * 0.10
    },
    title:{
        fontSize:30,
        color:'#FFF',
        fontWeight:'bold'
    },
    row:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxCodcountry:{
        width:'25%',
        height:50,
        // backgroundColor:'black',
        borderBottomWidth:3,
        borderColor:'gray',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    boxTelephone:{
        width:'73%',
        height:50,
        // backgroundColor:'black',
        borderBottomWidth:3,
        borderColor:'gray',
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    Codcountry:{
        fontSize:18,
        color:'#FFF',
    },
    Notice:{
        color:'gray',
        textAlign:'justify',
        marginTop:48,
        fontSize:16
    },
  
   
})