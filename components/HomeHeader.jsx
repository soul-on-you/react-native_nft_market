import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = ({ user, onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
        paddingBottom: 68,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxHeight: 50,
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ height: 30, width: 90 }}
        />

        <View style={{ width: 50, height: 50 }}>
          <Image
            source={assets.person01}
            style={{ width: "100%", height: "100%" }}
          />

          {user.verification && (
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: 15,
                width: 15,
              }}
            />
          )}
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.light,
            color: COLORS.white,
          }}
        >
          Hello {user.name} 👋
        </Text>
        <Text
          style={{
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.semiBold,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's Find Masterpiece Art
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            backgroundColor: COLORS.secondary,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingHorizontal: SIZES.extraLarge,
            paddingVertical: SIZES.font,
            borderRadius: SIZES.font,
          }}
        >
          <Image
            resizeMode="contain"
            source={assets.search}
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.small,
            }}
          />
          <TextInput
            style={{
              color: COLORS.white,
              fontFamily: FONTS.light,
              flex: 1,
            }}
            placeholder="Search NFTs"
            placeholderTextColor={COLORS.gray}
            onChangeText={(text) => onSearch(text)} //onSearch
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
