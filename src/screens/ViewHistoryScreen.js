import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import Header from "../components/Header";
import HistoryCard from "../components/HistoryCard";

const ViewHistoryScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Header title={t("ViewHistory")} />
      <HistoryCard />
      <FAB
        icon="plus"
        style={{
          ...styles.fab,
          backgroundColor: colors.backgroundLight,
        }}
        onPress={() => navigation.navigate("EditHistory", { editing: false })}
      />
    </View>
  );
};

export default ViewHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
