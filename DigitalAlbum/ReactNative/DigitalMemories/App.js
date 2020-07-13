/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IntroPage from "./src/Screens/IntroPage"
import { NavigationContainer } from '@react-navigation/native';
//import IntroNavigation from './src/Navigation/IntroNavigation';
import AppNavigation from './src/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './src/ReduxModules/Reducers/RootReducer';
import thunk from 'redux-thunk';

const App = () => {

  // useEffect(() => {
  //   AsyncStorage.getItem("userData").
  //     then((value) => {
  //       try {
  //         console.log(value);
  //         if (value === null) {
  //           console.log("Got is nullable value");
  //           setLoaderVisibility(false);
  //           // props.navigation.navigate("IntroNavigation");
  //           NavigateTo("IntroNavigation");
  //         }
  //         else {
  //           //@react-native-community/async-storage
  //           if (value.length > 0) {
  //             var userData = JSON.parse(value);
  //             if ((userData.mobileNoValue.length > 0 || userData.emailIdValue.length > 0) && (userData.passwordValue.length > 0)) {
  //               setLoaderVisibility(false);

  //               //props.navigation.clear("HomePage");
  //               //NavigateTo("HomePage");
  //               NavigateTo("MainNavigation");
  //               return;
  //             }
  //           }
  //           setLoaderVisibility(false);
  //           // props.navigation.navigate("IntroNavigation");
  //           NavigateTo("IntroNavigation");
  //         }
  //       }
  //       catch (error) {
  //         console.log(error);
  //         setLoaderVisibility(false);
  //         // props.navigation.navigate("IntroNavigation");
  //         NavigateTo("IntroNavigation");
  //       }
  //     }).
  //     catch((err) => {
  //       setLoaderVisibility(false);
  //       // props.navigation.navigate("IntroNavigation");
  //       NavigateTo("IntroNavigation");
  //     });
  // }, [])

  // const store = createStore(RootReducer, applyMiddleware(thunk));

  return (
    <>

{/* <Provider store={store}> */}
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      {/* </Provider> */}

      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavigationContainer>
          <IntroNavigation />
        </NavigationContainer>
      </SafeAreaView> */}
    </>
  );
};

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
