import React from "react";
import { List } from "react-native-paper";

export const Clients: React.FC = () => {
  return (
    <List.Section>
      <List.Item
        title="First Item"
        description="Item description"
        left={(props) => <List.Icon {...props} icon="folder" />}
      />
    </List.Section>
  );
};
