import React from "react";
import { Text } from "react-native-paper";

const Header = ({ title }) => {
  return (
    <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>
      {title}
    </Text>
  );
};

export default Header;
