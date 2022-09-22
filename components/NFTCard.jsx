import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { NTFTitle, EthPrice, SubInfo } from "./SubInfo";
import { useDispatch, useSelector } from "react-redux";
import { likeNFT, selectNTF } from "../store/slices/NFTSlice";

const NFTCard = ({ data, style, ...props }) => {
  const navigation = useNavigation();
  // const [liked, setLiked] = useState(false);
  const NFT = useSelector(selectNTF(data.id));
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        marginBottom: SIZES.extraLarge,
        ...style,
        ...SHADOWS,
      }}
      {...props}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={NFT.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton
          style={{ position: "absolute", right: 10, top: 10 }}
          onPress={() =>
            dispatch(likeNFT({ NFTid: NFT.id, liked: !NFT.liked }))
          }
        >
          <Image
            source={assets.heart}
            resizeMode="contain"
            style={{
              width: 24,
              height: 24,
              tintColor: NFT.liked ? COLORS.red : COLORS.gray,
            }}
          />
        </CircleButton>
      </View>

      <SubInfo data={NFT} />

      <View
        style={{
          width: "100%",
          padding: SIZES.font,
        }}
      >
        <NTFTitle
          title={NFT.name}
          titleSize={SIZES.large}
          subtitle={NFT.creator}
          subtitleSize={SIZES.small}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            // marginTop: SIZES.base,
            marginTop: SIZES.font,
          }}
        >
          <EthPrice
            price={NFT.price}
            // style={{ marginTop: SIZES.font }}
          />
          <RectButton
            onPress={() => navigation.navigate("Details", { data: NFT })}
            style={{ minWidth: 120 }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                textAlign: "center",
              }}
            >
              Place a bid
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
