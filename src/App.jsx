//npm packages
import React from "react";
import { GlobalStyle, ThemeProvider, Button } from "@react95/core";
import { createGlobalStyle } from "styled-components";
import { ClippyProvider, AGENTS } from "@react95/clippy";

//Project files
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import DataService from "./services/dataService";
import DataContext from "./contexts/dataContext";

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 14px
  }
`;

const dataService = new DataService();

const App = () => {
	return (
		<DataContext.Provider value={dataService}>
			<ThemeProvider>
				<GlobalStyle />
				<BodyFontSizeOverride />
					<Desktop />
				<ClippyProvider agentName={AGENTS.MERLIN}>
				<Taskbar />
				</ClippyProvider>
			</ThemeProvider>
		</DataContext.Provider>
	);
};

export default App;
