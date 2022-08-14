import React from 'react';
import { View } from 'react-native';
import { 
	Layout,
	TopNav,
	Text,
  themeColor,
  useTheme,
  Button,
  Section,
  SectionContent,
	CheckBox,
} from 'react-native-rapi-ui';
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
	const [checkBox, setCheckbox] = React.useState(false);
	return (
		<Layout>
      <TopNav
        middleContent="Settings"
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
          marginHorizontal: 20,
				}}
			>
			<Section style={{ marginTop: 20 }}>
				<SectionContent style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
					<CheckBox value={checkBox} onValueChange={(val) => setCheckbox(val)} />
					<Text size="md" style={{ marginLeft: 10, color: 'gray' }}>
						Receive marketing information
					</Text>
				</SectionContent>
				<SectionContent  >
					<Button
						text={isDarkmode ? "Light Mode" : "Dark Mode"}
						status={isDarkmode ? "success" : "warning"}
						onPress={() => {
							if (isDarkmode) {
								setTheme("light");
							} else {
								setTheme("dark");
							}
						}}
						style={{
							marginTop: 10,
						}}
					/>
					<Button
						status="danger"
						text="Logout"
						onPress={() => {
							navigation.navigate("Login");
						}}
						style={{
							marginTop: 10,
						}}
					/>
				</SectionContent>
			</Section>
			
			</View>
		</Layout>
	);
}
