import { View, Text, Image } from "react-native";
import React, { useMemo, useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const shortyfiText = (text) => {
  if (text.length > 100) {
    const endPos = text.indexOf(" ", 100);
    return text.substring(0, endPos) + "...";
  }
  return text;
};

const DetailsDesc = ({ description, style = {}, ...props }) => {
  const shortText = useMemo(() => shortyfiText(description), [description]);
  const [readMore, setReadMore] = useState(false);

  return (
    <View style={{ ...style }} {...props}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        Description
      </Text>

      <Text
        style={{
          fontFamily: FONTS.light,
          fontSize: SIZES.font,
          color: COLORS.primary,
          marginTop: SIZES.base,
        }}
      >
        {readMore ? description : shortText}
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
        onPress={() => {
          setReadMore(!readMore);
        }}
      >
        {readMore ? "Show Less" : "Read More"}
      </Text>
    </View>
  );
};

const DetailsBid = ({ bid, style, ...props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...style,
      }}
      {...props}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 40, height: 40 }}
      />

      <View
        style={{
          flex: 1,
          marginHorizontal: SIZES.small,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.font }}>
          Bid placed by {bid.name}
        </Text>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small }}>
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

export { DetailsDesc, DetailsBid };
