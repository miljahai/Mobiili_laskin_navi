import React from "react";
import { FlatList } from "react-native";
import { View, StyleSheet,Text } from "react-native";

export default function History( {route, navigtion}) {
const {data} = route.params;
console.log(data);
return (
<View style={styles.container}>
   
    <FlatList data={data}
    renderItem={({item}) => {
        return <Text>{item}</Text>
    }}
    keyExtractor={(item,index) => index} />
</View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
      },
      input : {
        width:200  , 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 7,
      },
     
      button : {
        
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%'     
      },
    
      heading: {
        padding: 10,
      }
})