import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useRef } from "react";

export default function Calculator({navigation}) {

    const [luku1, setluku1] = useState('');
    const [luku2, setluku2] = useState('');
  
    const [vastaus, setVastaus] = useState('');
    const [data, setData] = useState([]);
  
    const initialFocus = useRef(null);
  
    const calculate = operator => {
      const [number1, number2] = [Number(luku1), Number(luku2)];
    
    if (isNaN(number1) || isNaN(number2)) {
      setVastaus(0);
    }else {
      let result = 0;
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
      }
      setVastaus(result);
      
      const text = `${number1} ${operator} ${number2} = ${result}`;
      setData([...data, text]); // tai toisin päin text ja ...data jos haluaa uusimman päällimmäiseksi
    }
    
    setluku1('');
    setluku2('');
    initialFocus.current.focus();
  }
    return (
        <View style= {styles.container}>

          <Text>Result:{vastaus}</Text>

          <TextInput style={styles.input} ref={initialFocus} keyboardType='numeric' 
            onChangeText={text => setluku1(text)} value={luku1}/>

          <TextInput style={styles.input} keyboardType='numeric' 
          onChangeText={text => setluku2(text)} value={luku2}/>

        <View style={styles.button}>
            <View>
            <Button onPress={() => calculate('+')} title="+" />
            </View>
            <View>
            <Button onPress={() => calculate('-')} title="-" />
            </View>
            <View>
               <Button title='History'
                onPress={() => navigation.navigate('History', {params: {data}}, )} />
            </View>
          </View>

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