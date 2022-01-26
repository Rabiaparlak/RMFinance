import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


/*
  const App = () => {

  }
  export default App;
*/
export default function App() {

  const [name, setName] = React.useState("mehmet");

  return (
    /* Header kısmı*/
    <View>
    <View style={{marginTop:70,borderBottomWidth:1 , borderColor:'#DCDCDC',alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{color:'black', marginBottom:10}}>RM</Text>
    </View>

<View style={{flexDirection:"row"}}>



    <View style={{marginLeft:20 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("Rabia") }}
        style={{
           borderRadius: 20, width: 170, height: 180, backgroundColor: '#FFCCBC', alignItems: 'center', justifyContent: 'center',
           shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      </TouchableOpacity>

    </View>
    
    <View style={{marginLeft:15 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("Rabia") }}
        style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: '#FFECB3', alignItems: 'center', justifyContent: 'center',
        shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5, }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      </TouchableOpacity>

    </View>

    </View>
    
<View style={{flexDirection:"row"}}>



<View style={{marginLeft:20 }}>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  <TouchableOpacity
    onPress={() => { setName("Rabia") }}
    style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: '#C8E6C9', alignItems: 'center', justifyContent: 'center',
    shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5, }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  </TouchableOpacity>

</View>

<View style={{marginLeft:15 }}>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  <TouchableOpacity
    onPress={() => { setName("Rabia") }}
    style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: '#D1C4E9', alignItems: 'center', justifyContent: 'center',
    shadowColor: "#000", shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5, }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  </TouchableOpacity>

</View>

</View>

<View style={{marginLeft:20 }}>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  <TouchableOpacity
    onPress={() => { setName("Rabia") }}
    style={{ borderRadius: 20,borderColor:'#C0C0C0', borderWidth:1, width: 355, height: 180, alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  </TouchableOpacity>

</View>


<View style={{alignItems:"center", marginTop:10 }}>
<Text style={{ color: '#808080', fontWeight: 'bold' }}>Toplam Varlığınız:</Text>
  <TouchableOpacity
    onPress={() => { setName("Rabia") }}
    style={{marginTop:10, borderRadius: 100, backgroundColor:"green", width: 120, height: 120, alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  </TouchableOpacity>

</View>

    </View>
  )
}

