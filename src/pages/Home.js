import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  SectionImage,
  useTheme,
} from "react-native-rapi-ui";
import { ScrollView } from 'react-native';

import pokemonList from "../utils/pokemon/pokemonList";
import PokeCard from "../components/PokeCard";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();

  return (
    <Layout>
      <TopNav
        middleContent="Pokémon"
      />
      <View
        style={{
          marginTop: 10,
          justifyContent: 'flex-start',
          marginHorizontal: 20,
          marginBottom: 70,
        }}
      >
      <ScrollView>
        {pokemonList &&
        pokemonList.map((pokemon, index) => (
          <PokeCard 
          key={index}
          pokemon={pokemon}
        />
        ))}
        </ ScrollView>
      </View>
    </Layout>
  );
}
