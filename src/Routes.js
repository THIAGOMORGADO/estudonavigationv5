import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screen/Home';
import About from './screen/About';



const Drawer = createDrawerNavigator();
const Content =  (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text  style={styles.nome}>Thiago Morgado</Text>
            </View>
            <View  style={styles.conteudo}>
               <TouchableOpacity
               onPress={() => props.navigation.navigate('Home')}
               style={{marginVertical:20 }}
               >
                    <Text style={styles.Text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('About')}
                 style={{marginVertical:20 }}
                >
                    <Text  style={styles.Text}>About</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}

export default function MyDrawer() {
  return (
    <NavigationContainer
    
    >
        <Drawer.Navigator
        drawerContent={Content}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        
        borderWidth:2,
        borderRadius:5
    },
    nome:{
        color:'#000',
        fontSize:25
    },
    Text:{
        color:'#333',
        fontSize:20
    },
    body:{
        alignItems:'center',
        backgroundColor:'red',
        borderBottomWidth:0.5,
        borderBottomColor:'#000',
        flex:1,
        flexDirection:'row'   
    },
    conteudo:{
        justifyContent:'flex-start',
       
        flex:3,
        
    }
})