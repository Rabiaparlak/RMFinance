import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons,AntDesign,FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';
import {Image} from 'react-native';





/*
  const App = () => {

  }
  export default App;
*/
export default function App() {

  const [name, setName] = React.useState("200");

  return (
    /* Header kısmı*/
    <View>
    <View style={{marginTop:70,borderBottomWidth:1 , borderColor:'#DCDCDC',alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{color:'black', marginBottom:10}}>RM</Text>
    </View>

        </TouchableOpacity>
    </View>



<View style={{flexDirection:"row"}}>
    <View style={{marginLeft:20 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("300") }}
        style={{
           borderRadius: 20, width: 170, height: 180, backgroundColor: '#FFCCBC', 
           shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:20 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-start',fontSize:20  }}>İhtiyaç Hesap</Text>
        <Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-end',marginTop:8, fontSize:30 }}>{name}₺</Text>
        <AntDesign style={{position:"absolute",bottom:8,left:10}} name="smileo" size={70} color="white" />
      </TouchableOpacity>

    </View>
    
    <View style={{marginLeft:15 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("300") }}
        style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: '#FFECB3',
        shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5, padding:20 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-start',fontSize:20  }}>İhtiyaç Hesap</Text>
        <Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-end',marginTop:8, fontSize:30 }}>{name}₺</Text>
        <FontAwesome style={{position:"absolute",bottom:8,left:10}} name="user-secret" size={70} color="white" />
      </TouchableOpacity>

    </View>

    </View>
    
<View style={{flexDirection:"row"}}>



<View style={{marginTop:20,marginLeft:20 }}>
  <TouchableOpacity
    onPress={() => { setName("300") }}
    style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: '#C8E6C9',
    shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5, padding:20 }}
  >
<Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-start',fontSize:20  }}>İhtiyaç Hesap</Text>
        <Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-end',marginTop:8, fontSize:30 }}>{name}₺</Text>
        <FontAwesome5 style={{position:"absolute",bottom:8,left:10}} name="balance-scale-right" size={60} color="white" />

  </TouchableOpacity>

</View>

<View style={{marginLeft:15, marginTop:20 }}>
  <TouchableOpacity
    onPress={() => { setName("300") }}
    style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: '#D1C4E9',
    shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,padding:20 }}
  >

<Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-start',fontSize:20  }}>İhtiyaç Hesap</Text>
        <Text style={{ color: 'white', fontWeight: 'bold',alignSelf:'flex-end',marginTop:8, fontSize:30 }}>{name}₺</Text>
        <Foundation style={{position:"absolute",bottom:-8,left:15}} name="dollar" size={100} color="white" />

  </TouchableOpacity>

</View>

</View>

<View style={{marginLeft:20 ,marginTop:20, borderRadius:20, borderColor:'#C0C0C0', borderWidth:1, width: 355, height: 180,padding:20 }}>


  <View style={{flexDirection:"row"}}>
    <Text style={{ color: 'black',margin:5 ,fontWeight:"bold",fontSize:15 }}>Toplam Birikiminiz </Text>
    <Text style={{ color: 'green', fontWeight: 'bold',right:-90, fontSize:17 }}>: +{name}₺</Text>
    </View>

    <View style={{flexDirection:"row"}}>
    <Text style={{ color: 'black',margin:5 ,fontWeight:"bold",fontSize:15 }}>Toplam Yatırımınız </Text>
    <Text style={{ color: 'green', fontWeight: 'bold',right:-90, fontSize:17 }}>: +{name}₺</Text>
    </View>


    <View style={{flexDirection:"row"}}>
    <Text style={{ color: 'black',margin:5 ,fontWeight:"bold",fontSize:15 }}>Şahsi Giderler </Text>
    <Text style={{ color: 'red', fontWeight: 'bold',right:-115, fontSize:17 }}>: -{name}₺</Text>
    </View>


    <View style={{flexDirection:"row"}}>
    <Text style={{ color: 'black',margin:5 ,fontWeight:"bold",fontSize:15 }}>İhtiyaç Giderler </Text>
    <Text style={{ color: 'red', fontWeight: 'bold',right:-110, fontSize:17 }}>: -{name}₺</Text>
    </View>


    <View style={{flexDirection:"row"}}>
    <Text style={{ color: 'black',margin:5 ,fontWeight:"bold",fontSize:15 }}>Toplam Giderler </Text>
    <Text style={{ color: 'red', fontWeight: 'bold',right:-105, fontSize:17 }}>: -{name}₺</Text>
    </View>



</View>


  <View style={{alignItems:"center", marginTop:10 }}>
    <Text style={{ color: '#808080', fontWeight: 'bold' }}>Toplam Varlığınız:</Text>
    
      <View style={{marginTop:10, borderRadius: 100, backgroundColor:"green", width: 120, height: 120, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}₺</Text>
      </View>

  </View>

</View>

  )
}

<style>
  
</style>