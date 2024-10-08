import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './interfaces-gen/components/login';
import Creationpdv from '../whirlpool/interfaces-gen/components/AdminInterface/creationpdv';
import CreationArt from '../whirlpool/interfaces-gen/components/AdminInterface/creationdArticle';
import ConsultRapports from '../whirlpool/interfaces-gen/components/AdminInterface/ConsultationDesRapports';
import RapportExpo from './interfaces-gen/components/AdminInterface/RapportExpo';
import RapportExpoDet from './interfaces-gen/components/AdminInterface/RapportdesxpoDet';
import Modifpopup from './interfaces-gen/components/AdminInterface/ModifRapExpo';
import RapportPriceMap from './interfaces-gen/components/AdminInterface/RapportPriceMap';
import RapportPriceMapDet from './interfaces-gen/components/AdminInterface/RapportPriceMapDet';
import RapportSellOut from './interfaces-gen/components/AdminInterface/RapportsSellOut';
import RapportDePresence from './interfaces-gen/components/AdminInterface/RapportDePresence';
import RapportLog from './interfaces-gen/components/AdminInterface/RapportLog';
import CreationCompte from './interfaces-gen/components/AdminInterface/creationCompte';
import PopupRapport from './interfaces-gen/components/AdminInterface/PopupRapport';
import CreationRapportExpo from './interfaces-gen/components/animatriceInterface/CreationRapportExpo';
import PopupCheckBox from './interfaces-gen/components/animatriceInterface/PopupCheckBox';
import CreationNRapport from './interfaces-gen/components/animatriceInterface/CreationNRapport';
import ValidRExpo from './interfaces-gen/components/animatriceInterface/ValidRExpo';
import CreationRapportSO from './interfaces-gen/components/animatriceInterface/CreationRapportSO';
import WelcomeAdmin from './interfaces-gen/components/AdminInterface/WelcomeAdmin'
import WelcomeAnime from './interfaces-gen/components/animatriceInterface/WelcomeAnime'
import WelcomeManager from './interfaces-gen/components/managerInterface/WelcomeManger'
import ManagerExpo from './interfaces-gen/components/managerInterface/RapportExpo'
import ManagerSelOut from './interfaces-gen/components/managerInterface/RapportSelOut'
import ManagerExpoDet from './interfaces-gen/components/managerInterface/RapportExpoDet'
import ManagerPresence from './interfaces-gen/components/managerInterface/RapportPresence'
import ManagerPriceMap from './interfaces-gen/components/managerInterface/RapportPriceMap'
import ManagerPriceMapDet from './interfaces-gen/components/managerInterface/RapportPriceMapDet'
import Ouverture from './interfaces-gen/components/AdminInterface/ouverture'
import RapportExpoAn from './interfaces-gen/components/animatriceInterface/RapportExpoAn';
import RapportExpoDetAn from './interfaces-gen/components/animatriceInterface/RapportExpoDetAn';
import EspaceCompte from './interfaces-gen/components/AdminInterface/EspaceCompte';
import ListesDesComptes from './interfaces-gen/components/AdminInterface/ListesDesCompte';
import MyObjectif from './interfaces-gen/components/animatriceInterface/MyObjectif';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="ouverture">
        <Stack.Screen name="ouverture" options={{ headerShown: false }} component={Ouverture} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="WelcomeAnime" options={{ headerShown: false }}  component={WelcomeAnime} />
          <Stack.Screen name="WelcomeAdmin" options={{ headerShown: false }} component={WelcomeAdmin} />
          <Stack.Screen name="Creationpdv" options={{ headerShown: false }} component={Creationpdv} />
          <Stack.Screen name="CreationArt" options={{ headerShown: false }} component={CreationArt} />
          <Stack.Screen name="ConsultRapports" options={{ headerShown: false }} component={ConsultRapports} />
          <Stack.Screen name="RapportExpo" options={{ headerShown: false }} component={RapportExpo} />
          <Stack.Screen name="RapportExpoDet" options={{ headerShown: false }}  component={RapportExpoDet} />
          <Stack.Screen name="Modifpopup" options={{ headerShown: false }} component={Modifpopup} /> 
          <Stack.Screen name="RapportPriceMap"options={{ headerShown: false }} component={RapportPriceMap} />
          <Stack.Screen name="RapportPriceMapDet"options={{ headerShown: false }} component={RapportPriceMapDet} />
          <Stack.Screen name="RapportSellOut" options={{ headerShown: false }} component={RapportSellOut} />
          <Stack.Screen name="RapportDePresence" options={{ headerShown: false }} component={RapportDePresence} />
          <Stack.Screen name="RapportLog" options={{ headerShown: false }} component={RapportLog} />
          <Stack.Screen name="CreationCompte" options={{ headerShown: false }} component={CreationCompte} />
          <Stack.Screen name="EspaceCompte" options={{ headerShown: false }} component={EspaceCompte} />
          <Stack.Screen name="ListesDesComptes" options={{ headerShown: false }} component={ListesDesComptes} />
         {/* <Stack.Screen name="PopupRapport" component={PopupRapport} /> */}
         <Stack.Screen name="CreationRapportExpo" options={{ headerShown: false }} component={CreationRapportExpo} />
          <Stack.Screen name="PopupCheckBox" options={{ headerShown: false }} component={PopupCheckBox} />
          <Stack.Screen name="CreationNRapport" options={{ headerShown: false }} component={CreationNRapport} />
          <Stack.Screen name="ValidRExpo" options={{ headerShown: false }} component={ValidRExpo} />
          <Stack.Screen name="CreationRapportSO" options={{ headerShown: false }} component={CreationRapportSO} />
          <Stack.Screen name="RapportExpoAn" options={{ headerShown: false }} component={RapportExpoAn} />
          <Stack.Screen name="RapportExpoDetAn" options={{ headerShown: false }} component={RapportExpoDetAn} />
          <Stack.Screen name="WelcomeManager" options={{ headerShown: false }}  component={WelcomeManager} />
          <Stack.Screen name="ManagerExpo"   options={{ headerShown: false }} component={ManagerExpo} />
          <Stack.Screen name="ManagerSelOut" options={{ headerShown: false }} component={ManagerSelOut} />
          <Stack.Screen name="ManagerExpoDet" options={{ headerShown: false }} component={ManagerExpoDet} />
          <Stack.Screen name="ManagerPresence" options={{ headerShown: false }} component={ManagerPresence} />
          <Stack.Screen name="ManagerPriceMap" options={{ headerShown: false }} component={ManagerPriceMap} />
          <Stack.Screen name="ManagerPriceMapDet" options={{ headerShown: false }} component={ManagerPriceMapDet} />
          <Stack.Screen name="MyObjectif" options={{ headerShown: false }} component={MyObjectif} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
LogBox.ignoreAllLogs(true);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
