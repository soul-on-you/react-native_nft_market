import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS } from "../constants";

const CircleButton = ({ onPress, style, children, ...props }) => {
  return (
    // <View style={{ ...style }} {...props}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        ...SHADOWS.light,
        ...style,
      }}
      {...props}
    >
      {children}
    </TouchableOpacity>
    // </View>
  );
};

const RectButton = ({ onPress, style, children, ...props }) => {
  return (
    <View style={{ ...style }} {...props}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.extraLarge,
          paddingHorizontal: SIZES.extraLarge,
          paddingVertical: SIZES.base,
          ...SHADOWS.light,
        }}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export { CircleButton, RectButton };
