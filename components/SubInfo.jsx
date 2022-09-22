import { View, Text, Image } from "react-native";
import React, { useMemo } from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { useTimer } from "../hooks/useTimer";

const NTFTitle = ({
  title,
  titleSize,
  subtitle,
  subtitleSize,
  style,
  ...props
}) => {
  return (
    <View style={{ ...style }} {...props}>
      <Text
        style={{
          fontSize: titleSize,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: subtitleSize,
          fontFamily: FONTS.regular,
          color: COLORS.gray,
        }}
      >
        by {subtitle}
      </Text>
    </View>
  );
};

const EthPrice = ({ price, style, ...props }) => {
  const NFTPrice = useMemo(() => {
    if (price > 1) {
      return price.toFixed(2);
    }
    return price.toFixed(3);
  }, [price]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        ...style,
      }}
      {...props}
    >
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          marginLeft: SIZES.base / 2,
          color: COLORS.primary,
        }}
      >
        {NFTPrice}
      </Text>
    </View>
  );
};

const ImageCmp = ({ image, id }) => {
  return (
    <Image
      key={id}
      source={image}
      style={{
        width: SIZES.extraLarge * 2,
        height: SIZES.extraLarge * 2,
        borderRadius: SIZES.small * 2,
        marginRight: -SIZES.font,
      }}
    />
  );
};

const People = ({ people = [], style, ...props }) => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "flex-start", ...style }}
      {...props}
    >
      {people.map(({ image, id }) => (
        <ImageCmp image={image} key={id} />
      ))}
    </View>
  );
};

const EndDate = ({ endDate }) => {
  const [time] = useTimer(endDate);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        flexDirection: "column",
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.base,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontWeight: "400",
          color: COLORS.secondary,
          fontSize: SIZES.small,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: SIZES.large,
          color: COLORS.primary,
        }}
      >
        {time}
      </Text>
    </View>
  );
};

const SubInfo = ({ data }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -SIZES.extraLarge,
        paddingHorizontal: SIZES.font,
      }}
    >
      <People people={data.bids} />
      <EndDate endDate={data.endDate} />
    </View>
  );
};

export { NTFTitle, EthPrice, ImageCmp, People, EndDate, SubInfo };
