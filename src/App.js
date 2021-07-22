import { useState } from "react";
import "./App.css";
import { Box, Center, ChakraProvider, Grid } from "@chakra-ui/react";

function App() {
	const [background0, setBackground0] = useState("#171923");
	const [background1, setBackground1] = useState("#171923");
	const [background2, setBackground2] = useState("#171923");
	const [background3, setBackground3] = useState("#171923");
	const [background4, setBackground4] = useState("#171923");
	const [background5, setBackground5] = useState("#171923");
	const [background6, setBackground6] = useState("#171923");
	const [background7, setBackground7] = useState("#171923");
	const [background8, setBackground8] = useState("#171923");
	const [counter, setCounter] = useState(0);

	function handleBoxColor(id) {
		console.log("Entro con el id: " + id);
		if (id % 2 === 0) {
			// if the id of the box is even then call to the handleBoxColor function
			handleBoxColorEven(id);
		} else {
			// if the id of the box is odd then call to the handleBoxColor2 function
			handleBoxColorOdd(id);
		}
	}

	function handleBoxColorEven(id) {
		switch (id) {
			case 0:
				setBackground0("#0BC5EA");
				setCounter(counter + 1);
				break;
			case 2:
				setBackground2("#0BC5EA");
				setCounter(counter + 1);
				break;
			case 4:
				setBackground4("#0BC5EA");
				setCounter(counter + 1);
				break;
			case 6:
				setBackground6("#0BC5EA");
				setCounter(counter + 1);
				break;
			case 8:
				setBackground8("#0BC5EA");
				setCounter(counter + 1);
				break;
			default:
				break;
		}
	}

	function handleBoxColorOdd(id) {
		switch (id) {
			case 1:
				setBackground1("#ED64A6");
				setCounter(counter + 1);
				break;
			case 3:
				setBackground3("#ED64A6");
				setCounter(counter + 1);
				break;
			case 5:
				setBackground5("#ED64A6");
				setCounter(counter + 1);
				break;
			case 7:
				setBackground7("#ED64A6");
				setCounter(counter + 1);
				break;
			default:
				break;
		}
		setCounter(counter + 1);
	}

	return (
		<ChakraProvider>
			<Center h="100vh" bg="#171923">
				<Grid
					w="500px"
					h="500px"
					border="7px"
					borderColor="gray.300"
					templateColumns="repeat(3, 1fr)"
				>
					<Box
						w="100%"
						h="100%"
						id={0}
						bg={background0}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(0)}
					/>
					<Box
						w="100%"
						h="100%"
						id={1}
						bg={background1}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(1)}
					/>
					<Box
						w="100%"
						h="100%"
						id={2}
						bg={background2}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(2)}
					/>
					<Box
						w="100%"
						h="100%"
						id={3}
						bg={background3}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(3)}
					/>
					<Box
						w="100%"
						h="100%"
						id={4}
						bg={background4}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(4)}
					/>
					<Box
						w="100%"
						h="100%"
						id={5}
						bg={background5}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(5)}
					/>
					<Box
						w="100%"
						h="100%"
						id={6}
						bg={background6}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(6)}
					/>
					<Box
						w="100%"
						h="100%"
						id={7}
						bg={background7}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(7)}
					/>
					<Box
						w="100%"
						h="100%"
						id={8}
						bg={background8}
						borderColor="purple.400"
						borderWidth="3px"
						onClick={() => handleBoxColor(8)}
					/>
				</Grid>
			</Center>
		</ChakraProvider>
	);
}

export default App;
