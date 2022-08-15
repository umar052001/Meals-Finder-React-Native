import React from "react";
import { StatusBar, StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 10 },
  list: { backgroundColor: "yellow", padding: 10, flex: 1 },
});

export default RestaurantsScreen;
