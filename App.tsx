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
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      <TouchableOpacity
        onPress={() => { setName("Rabia") }}
        style={{ borderRadius: 100, width: 180, height: 180, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{name}</Text>
      </TouchableOpacity>

    </View>
  )
}

