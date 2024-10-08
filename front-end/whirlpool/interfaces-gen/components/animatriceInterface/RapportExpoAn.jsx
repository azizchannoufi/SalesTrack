import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { NativeBaseProvider } from "native-base";
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './header';
import Footer from './footer';
import port from '../port';

const WHIRLPOOL_LOGO = require('../../../assets/WHIRLPOOL_LOGO.png');

function RapportExpo() {
  const route = useRoute();
  const { month, pdv, ani, nomspdv } = route.params;
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window'); // Responsive hook

  const [expo, setExpo] = useState([]);
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expos, refs] = await Promise.all([
          axios.get(port + "/api/expositions/expositions"),
          axios.get(port + "/api/reference/references"),
        ]);

        // Debugging to check the fetched data
        console.log("Expositions:", expos.data);
        console.log("Références:", refs.data);

        setExpo(expos.data);
        setReferences(refs.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getExpositionsByMonthAndPDV = (expositions) => {
    const formattedMonth = month.toString().padStart(2, '0');
    return expositions.filter(exposition =>
      exposition.createdAt.slice(5, 7) === formattedMonth &&
      exposition.PDV_idPDV === nomspdv.idPDV &&
      references.find(ref => ref.idReference === exposition.Reference_idReference)?.Category_idCategory === pdv
    );
  };

  const navigateToNewPage = () => {
    const filteredExpositions = getExpositionsByMonthAndPDV(expo);

    const displayedData = filteredExpositions.map(exposition => {
      const reference = references.find(ref => ref.idReference === exposition.Reference_idReference);

      return {
        referenceName: reference?.Referencename || 'N/A',
        prix: exposition.prix || 'N/A',
        Marque_idMarque: reference?.Marque_idMarque || 'N/A',
        Category_idCategory: reference?.Category_idCategory || 'N/A',
        idref: reference?.idReference || 'N/A',
      };
    });

    navigation.navigate('RapportExpoDetAn', {
      tableData: displayedData,
      ani,
    });
  };

  return (
    <NativeBaseProvider>
      <Image resizeMode="contain" source={WHIRLPOOL_LOGO} style={[styles.image12, { width: width * 0.3, height: height * 0.15 }]} />
      <View style={[styles.view1, { paddingHorizontal: width * 0.05 }]}>
        <Header />
        <ScrollView style={{ marginTop: -height * 0.5, flex:1 }}>
          <View>
            <Text style={styles.textexpo}>Date : {month}</Text>
            <Text style={styles.textexpo}>Zone : {nomspdv.location}</Text>
            <Text style={styles.textexpo}>Magasin : {nomspdv.pdvname}</Text>
            <Text style={styles.textexpo}>Animatrice : {ani ? ani.name : "Loading..."}</Text>
          </View>

          <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>Référence</Text>
              <Text style={styles.headerText}>Prix</Text>
            </View>

            {/* Rows */}
            {getExpositionsByMonthAndPDV(expo).map((exposition, index) => {
              const reference = references.find(ref => ref.idReference === exposition.Reference_idReference);

              if (!reference) {
                console.warn(`Référence non trouvée pour l'exposition ID: ${exposition.idExpo}`);
              }

              return (
                <TouchableOpacity key={index}>
                  <View style={styles.row}>
                    <Text style={styles.cell}>{reference?.Referencename || 'N/A'}</Text>
                    <Text style={styles.cell}>{exposition.prix || 'N/A'}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Button to navigate to another page (below the table) */}
        <TouchableOpacity style={styles.button} onPress={navigateToNewPage}>
          <Text style={styles.buttonText}>Utiliser</Text>
        </TouchableOpacity>
      </View>

      <Footer ani={ani} />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '15%',
  },
  container: {
    flexDirection: 'column',
    marginTop: '10%',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image12: {
    position: "absolute",
    top: 55,
    left: 15,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginBottom:10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textexpo: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default RapportExpo;
