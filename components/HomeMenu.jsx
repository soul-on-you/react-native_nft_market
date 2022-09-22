import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { CircleButton } from "./Button";
import { COLORS, SHADOWS, SIZES } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const HomeMenu = ({
  activeMenuTab,
  setActiveTab,
  menuConfig = [],
  color = COLORS.menu,
  activeColor = COLORS.white,
}) => {
  //   useEffect(() => {
  //     setActiveTab(activeTab);
  //   }, [activeMenuTab]);

  return (
    <LinearGradient
      colors={["rgba(255,255,255,0.0)", "rgba(255,255,255,0.5)"]}
      locations={[0, 0.8]}
      start={[0, 0]}
      end={[0, 1]}
      style={{
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: SIZES.large,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.extraLarge * 2,
          paddingHorizontal: SIZES.extraLarge,
          paddingVertical: SIZES.font,
          ...SHADOWS.dark,
        }}
      >
        {menuConfig.map((item) => (
          <CircleButton
            key={item.key}
            style={{
              backgroundColor: COLORS.primary,
              height: 28,
              width: 56,
              //   marginHorizontal: SIZES.font,
              shadowColor: COLORS.primary,
            }}
            onPress={() => item.onPress(setActiveTab)}
          >
            <Image
              resizeMode="contain"
              style={{
                height: "100%",
                width: "100%",
                tintColor: activeMenuTab === item.key ? activeColor : color,
              }}
              source={item.icon}
            />
          </CircleButton>
        ))}
      </View>
    </LinearGradient>
  );
};

export default HomeMenu;
