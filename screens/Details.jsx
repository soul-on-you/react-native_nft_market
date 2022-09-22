import { Image, SafeAreaView, View, Text, FlatList } from "react-native";
import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
} from "../components";
import { EthPrice, NTFTitle, SubInfo } from "../components/SubInfo";
import { LinearGradient } from "expo-linear-gradient";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { likeNFT, selectNTF } from "../store/slices/NFTSlice";
import { useState } from "react";

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const NFT = useSelector(selectNTF(data.id));
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(NFT.liked);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <LinearGradient
        colors={["rgba(255,255,255,0.0)", "rgba(255,255,255,0.6)"]}
        locations={[0, 0.6]}
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
        <RectButton>
          <Text
            style={{
              paddingHorizontal: SIZES.small,
              paddingVertical: SIZES.base / 2,
              color: COLORS.white,
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              textAlign: "center",
              ...SHADOWS.dark,
            }}
          >
            Place a bid
          </Text>
        </RectButton>
      </LinearGradient>

      <View
        style={{
          width: "100%",
        }}
      >
        <FlatList
          data={NFT.bids}
          style={{ paddingBottom: SIZES.large }}
          renderItem={({ item }) => (
            <DetailsBid
              bid={item}
              style={{
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.medium * 2,
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <View style={{ height: 500 }}>
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
                  style={{
                    position: "absolute",
                    top: SIZES.large * 2,
                    left: SIZES.font * 2,
                  }}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={assets.left}
                    resizeMode="contain"
                    style={{ width: 24, height: 24 }}
                  />
                </CircleButton>

                <CircleButton
                  style={{
                    position: "absolute",
                    top: SIZES.large * 2,
                    right: SIZES.font * 2,
                  }}
                  onPress={() => {
                    dispatch(likeNFT({ NFTid: NFT.id, liked: !NFT.liked }));
                    setLiked(!NFT.liked);
                  }}
                >
                  <Image
                    source={assets.heart}
                    resizeMode="contain"
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: liked ? COLORS.red : COLORS.gray,
                    }}
                  />
                </CircleButton>
              </View>

              <View style={{ paddingHorizontal: SIZES.font }}>
                <SubInfo data={NFT} />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: SIZES.font,
                    paddingHorizontal: SIZES.large,
                  }}
                >
                  <NTFTitle
                    title={NFT.name}
                    titleSize={SIZES.extraLarge}
                    subtitle={NFT.creator}
                    subtitleSize={SIZES.font}
                  />
                  <EthPrice price={NFT.price} />
                </View>

                <DetailsDesc
                  style={{
                    paddingHorizontal: SIZES.large,
                    paddingVertical: SIZES.font,
                  }}
                  description={NFT.description}
                />

                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                    paddingHorizontal: SIZES.large,
                  }}
                >
                  Current Bid
                </Text>
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <View
              style={{
                minHeight: SIZES.extraLarge,
                backgroundColor: COLORS.white,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
