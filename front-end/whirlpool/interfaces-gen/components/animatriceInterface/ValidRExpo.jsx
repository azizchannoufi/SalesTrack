import * as React from "react";
import {FlatList,ScrollView,Dimensions,View,StyleSheet,Image,Text,TouchableOpacity} from "react-native";
import { NativeBaseProvider, Center,Stack,Input,Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";



const { width, height } = Dimensions.get('window');
function ValidRExpo() {

    const [modif,setModif] = React.useState('');
    const WHIRLPOOL_LOGO=require('../../../assets/WHIRLPOOL_LOGO.png')

    const RenderInput=(text,pos)=>{
      if(pos=="left" ) {
        return (
            <Stack space={4} w="48%" alignItems="center" mt="5%" ml="2.5%" >
            <Input 
              w={{
                base: "75%",
                md: "15%"
              }} 
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              } 
              placeholder={text}
              onChangeText={item=>setModif(item)}
            />
           
          </Stack>
         )
    }
    else if(pos=="right") {
        return (
            <Stack space={4} w="48%" alignItems="center" mt="5%" mr="7%" style={{}} >
            <Input 
              w={{
                base: "75%",
                md: "25%"
              }} 
              InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
              } 
              placeholder={text}
              onChangeText={item=>setModif(item)}
            />
           
          </Stack>
         )
    }
    }
  return (
    <NativeBaseProvider>
            <Image resizeMode="contain" source={WHIRLPOOL_LOGO} style={styles.image12} />

    <View style={styles.view1}>
        <Center><View style={styles.view2}><Text style={{fontWeight:500}}>Validation Rapport Exposition</Text></View></Center>
        <View style={styles.allinputs}>
        <View style={styles.inputs}>
        {RenderInput('Reference','left')}
        {RenderInput('Categories','right')}
        </View>
        <View style={styles.inputs}>
        {RenderInput('Marque','left')}
        {RenderInput('Prix','right')}
        </View>
        </View>
        <Center>
        <View style={styles.btnsh}>
        <TouchableOpacity onPress={() =>{}} style={styles.btnmod}>
            <Text style={styles.btnTextmod}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}} style={styles.btncans}>
            <Text style={styles.btnTextcans}>Supprimer</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() =>{}} style={styles.btnsup}>
            <Text style={styles.btnTextcans}>Annuler</Text>
        </TouchableOpacity>
        </Center>
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 0,
    justifyContent: 'center',
    padding: 10,
    width: '90%', // Utiliser une largeur en pourcentage
    height: '50%', // Utiliser une hauteur en pourcentage
    margin: '5%',
    borderRadius: 5,
    borderWidth: 0.5, // Augmenter légèrement la largeur du bord pour la visibilité
  },
  image12: {
    width: width * 0.3, // Utiliser une proportion de la largeur de l'écran
    height: height * 0.2, // Utiliser une proportion de la hauteur de l'écran
    position: "absolute",
    top: 0,
    left: 15,
  },
  view2: {
    padding: 15,
  },
  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
  },
  btnmod: {
    borderWidth: 1,
    borderColor: "#FDC100",
    width: width * 0.25, // Utiliser une proportion de la largeur de l'écran
    height: height * 0.06, // Utiliser une proportion de la hauteur de l'écran
    alignItems: 'center',
    padding: 10,
    marginRight: 15,
    borderRadius: 5,
  },
  btnTextmod: {
    color: "#FDC100",
  },
  btncans: {
    borderWidth: 1,
    borderColor: "#D0D3D4",
    width: width * 0.25, // Utiliser une proportion de la largeur de l'écran
    height: height * 0.06, // Utiliser une proportion de la hauteur de l'écran
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  btnTextcans: {
    color: '#D0D3D4',
  },
  btnsh: {
    flexDirection: "row",
    marginTop: 25,
  },
  btnsup: {
    borderWidth: 1,
    borderColor: "#D0D3D4",
    width: width * 0.25, // Utiliser une proportion de la largeur de l'écran
    height: height * 0.06, // Utiliser une proportion de la hauteur de l'écran
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  // allinputs: {
  //   width: "90%",
  // },
});


export default ValidRExpo;
