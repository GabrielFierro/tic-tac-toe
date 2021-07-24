// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	styles: {
		global: (props) => ({
			body: {
				margin: 0,
				padding: 0,
				color: "#0BC5EA",
				bg: mode("#1A202C")(props),
				lineHeight: "base",
			},
		}),
	},
	fonts: {
		body: "Montserrat",
		fontWeight: 700,
	},
});

export default theme;
