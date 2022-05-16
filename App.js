import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "./assets/IMDb.png";
import film from "./assets/film.jpg";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "black" }}>
        {/* Banner */}
        <View
          style={{
            height: 50,
            backgroundColor: "#393939",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Image
              source={logo}
              style={{
                width: 70,
                height: 30,
              }}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
        </View>
        {/* Movie Card*/}
        <View style={{ height: 500, backgroundColor: "#212121" }}>
          {/* Movie Card title*/}
          <Text
            style={{
              color: "white",
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 25,
            }}
          >
            Interstellar
          </Text>
          {/* Movie Card: properties */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "#838383",
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 11,
              }}
            >
              2014 PG-13 2h49 mn Adventure, Drama, Sci-Fi
            </Text>
          </View>
          {/* Movie Card: Picture and Synopsis */}
          <View
            style={{ display: "flex", flexDirection: "row", paddingTop: 20 }}
          >
            <View style={{ flex: 1 }}>
              {/* Movie Picture */}
              <Image
                source={film}
                style={{
                  width: 110,
                  height: 175,
                  marginLeft: 10,
                }}
              ></Image>
            </View>
            {/* Synopsis */}
            <View style={{ flex: 2 }}>
              <Text
                style={{
                  color: "#838383",
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontSize: 11,
                }}
              >
                A team of explorers travel throught a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Rating section */}
          <View
            style={{ display: "flex", flexDirection: "row", paddingTop: 20 }}
          >
            {/* Rating picture*/}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="star" size={24} color="#E6B91F" />
            </View>
            {/* Rating evaluation */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="star-o" size={24} color="#989898" />
            </View>
            {/* MetaScore */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ backgroundColor: "#62C74F" }}>
                <Text style={{ color: "white" }}>74</Text>
              </View>
            </View>
          </View>
          {/* Rating Text */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            {/* Col Rating: text*/}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "#989898", fontSize: 14, fontWeight: "bold" }}
              >
                8.6
              </Text>
              <Text
                style={{
                  color: "#989898",
                  fontSize: 12,
                  textAlignVertical: "bottom",
                }}
              >
                /10
              </Text>
            </View>
            {/* Col Rating evaluation: text */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#989898" }}>RATE THIS</Text>
            </View>
            {/* Column MetaScore: text */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View>
                <Text style={{ color: "#989898" }}>Metascore</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 500, backgroundColor: "yellow" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#1B77BD",
    marginTop: 10,
    width: "95%",
    height: 30,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
  btnText: { color: "white", fontSize: 14 },
});
