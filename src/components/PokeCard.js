import React, { Component } from 'react';
import getPokemonMeta from '../utils/pokemon/Api';

import {
  Text,
  Section,
  SectionContent,
  SectionImage
} from "react-native-rapi-ui";

export default class PokeCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pokemonMeta: {}
    }
  }

  async componentDidMount() {
    this.getPokemon();
  }

  async getPokemon() {
    this.setState({
      pokemonMeta: await getPokemonMeta(this.props.pokemon),
      loading: false
    })
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    if(this.state.loading) {
      return (
      <SectionImage>
        <Text>
          Loading...
        </Text>
      </SectionImage>
      )
    }
    else {
      return (
        <Section
            style={{
              marginTop: 10,
            }}
          >
          <SectionImage
            source={{uri: this.state.pokemonMeta.spriteUrl}}
            />
            <SectionContent
              style={{
                alignItems: "center",
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.capitalizeFirstLetter(this.state.pokemonMeta.name)}
              </Text>
            </SectionContent>
          </Section>
      )
    }
      
  }
}