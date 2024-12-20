import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useColorMode } from "./ui/color-mode";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				justifyContent={"space-between"}
				alignItems={"center"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-l, #7928CA, #FF0080)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>
				
				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<CiSquarePlus fontSize={"20"} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "dark" ? (
							<CiLight />
						) : (
							<MdOutlineDarkMode />
						)}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
}
