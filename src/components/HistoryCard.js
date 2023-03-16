import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Subheading, Text, Card, Title, IconButton } from "react-native-paper";

const Field = ({ detail, value = "<Value>", unit }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{detail} : </Text>
      <Text style={{ fontSize: 16 }}>
        {value} {unit || ""}
      </Text>
    </View>
  );
};

const HistoryCard = ({ index = 1, data }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Title>{index}. </Title>
        <IconButton
          icon={"pencil"}
          style={{ margin: -5 }}
          onPress={() => navigation.navigate("EditHistory", { editing: true })}
        />
      </View>
      <Field detail={"Crop"} value={""} />
      <Field detail={"Sowing Date"} value={""} />
      <Field detail={"Harvest Date"} value={""} />
      <Field detail={"Expected Harvest"} value={""} />
      <Field detail={"Actual Harvest"} value={""} />
    </Card>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderWidth: 2,
    // borderRadius: 15,
    alignSelf: "center",
  },
});
