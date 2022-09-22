import { View, SafeAreaView, FlatList } from "react-native";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
import { assets, COLORS, SIZES } from "../constants";
import { useSelector } from "react-redux";
import { selectNFTData } from "../store/slices/NFTSlice";
import { useSearch } from "../hooks/useSearch";
import HomeMenu from "../components/HomeMenu";
import { useFilter } from "../hooks/useFilter";
import { useState } from "react";

const TABS = {
  home: "Home",
  cart: "Cart",
  history: "History",
  liked: "Liked",
};

const menuConfig = [
  {
    key: TABS.home,
    icon: assets.menu,
    onPress: (setActiveTab) => setActiveTab(TABS.home),
  },
  {
    key: TABS.cart,
    icon: assets.cart,
    onPress: (setActiveTab) => setActiveTab(TABS.cart),
  },
  {
    key: TABS.history,
    icon: assets.changes,
    onPress: (setActiveTab) => setActiveTab(TABS.history),
  },
  {
    key: TABS.liked,
    icon: assets.emptyHeart,
    onPress: (setActiveTab) => setActiveTab(TABS.liked),
  },
];

const user = {
  image: assets.person01,
  name: "Victoria Wilson",
  verification: true,
};

// const filterModes = [
//   {
//     key: TABS.home, //"Default",
//     filterMode: (data) => data.endDate > Date.now(),
//   },
//   {
//     key: TABS.cart, //"Following",
//     filterMode: (data) => data.bids.find((bid) => bid.name === user.name),
//   },
//   {
//     key: TABS.history, //"Ended",
//     filterMode: (data) => data.endDate < Date.now(),
//   },
//   {
//     key: TABS.liked, //"Liked",
//     filterMode: (data) => data.liked,
//   },
// ];

const filterModes = {
  [TABS.home]: (data) => data.endDate > Date.now(),
  [TABS.cart]: (data) => data.bids.find((bid) => bid.name === user.name),
  [TABS.history]: (data) => data.endDate < Date.now(),
  [TABS.liked]: (data) => data.liked,
};

const Home = () => {
  const [activeTab, setActiveTab] = useState(TABS.home);

  const NFTData = useSelector(selectNFTData);
  const [searchedNFTs, setSearchQuery] = useSearch(NFTData, "name");
  const [filteredNTFs] = useFilter(searchedNFTs, filterModes[activeTab]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <HomeMenu
        activeMenuTab={activeTab}
        setActiveTab={setActiveTab}
        menuConfig={menuConfig}
      />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={filteredNTFs}
            renderItem={({ item, index }) => (
              <NFTCard style={{ marginTop: !index ? -50 : 0 }} data={item} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader user={user} onSearch={setSearchQuery} />
            }
            ListFooterComponent={
              <View style={{ minHeight: SIZES.extraLarge * 2 }} />
            }
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.while }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
