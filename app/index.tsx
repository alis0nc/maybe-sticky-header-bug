import React from "react";
import { Button, Text, View } from "react-native";
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";

const data = [
  { id: "1", title: "First", color: "tomato" },
  { id: "2", title: "Second", color: "fuchsia" },
  { id: "3", title: "Third", color: "skyblue" },
  { id: "4", title: "Fourth", color: "orange" },
  { id: "5", title: "Fifth", color: "gold" },
];

const renderListItem = ({
  item,
}: {
  item: { id: string; title: string; color: string };
}) => {
  const { id, title, color } = item;
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "lightgray",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <Text>Header</Text>
    </View>
  );
};

export default function Index() {
  const [listVisible, setListVisible] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Toggle list"
        onPress={() => setListVisible(!listVisible)}
      />
      {listVisible ? (
        <Animated.FlatList
          ListHeaderComponent={Header}
          stickyHeaderIndices={[0]}
          style={{
            width: "100%",
          }}
          entering={FadeInUp.duration(5000)}
          exiting={FadeOutDown.duration(5000)}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
        />
      ) : null}
    </View>
  );
}
