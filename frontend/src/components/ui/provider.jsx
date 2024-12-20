"use client";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import PropTypes from "prop-types";

const theme = extendTheme({
config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
},
});

export function Provider({ children }) {
return (
    <ChakraProvider theme={theme} resetCSS>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {children}
    </ChakraProvider>
);
}

Provider.propTypes = {
children: PropTypes.node.isRequired,
};