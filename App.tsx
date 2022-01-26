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
    <View>
    <View style={{marginTop:70,borderBottomWidth:1 , borderColor:'grey',alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{color:'black', marginBottom:10}}>RM</Text>
    </View>

<View style={{flexDirection:"row"}}>



    <View style={{marginLeft:20 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("Rabia") }}
        style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      </TouchableOpacity>

    </View>
    
    <View style={{marginLeft:15 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("Rabia") }}
        style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}
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
    style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  </TouchableOpacity>

</View>

<View style={{marginLeft:15 }}>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  <TouchableOpacity
    onPress={() => { setName("Rabia") }}
    style={{ borderRadius: 20, width: 170, height: 180, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
  </TouchableOpacity>

</View>

</View>


    </View>
  )
}

