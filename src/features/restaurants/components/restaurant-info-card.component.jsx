import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Name",
    address = "Random Street",
    photos = [
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemp = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { backgroundColor: "white", padding: 20 },
  title: { padding: 16, fontWeight: "bold" },
});
export default RestaurantInfoCard;
