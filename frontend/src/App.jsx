import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
			</Routes>
		</Box>
	);
}

export default App;
