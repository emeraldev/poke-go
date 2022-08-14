import React from 'react';
import { View } from 'react-native';
import { 
	Layout,
	Text,
	TopNav,
  themeColor,
  useTheme
 } from 'react-native-rapi-ui';
 import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
	return (
		<Layout>
			<TopNav
				middleContent="About"
				leftContent={
					<Ionicons
						name="chevron-back"
						size={20}
						color={isDarkmode ? themeColor.white100 : themeColor.black}
					/>
				}
				leftAction={() => navigation.goBack()}
			/>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typing</Text>
			</View>
		</Layout>
	);
}
