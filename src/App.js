import { useState } from "react";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import "./App.css";

function App() {
	const [background0, setBackground0] = useState("primary");
	const [counter, setCounter] = useState(0);
	const [activeCircle0, setActiveCircle0] = useState(false);
	const [activeCircle1, setActiveCircle1] = useState(false);
	const [activeCircle2, setActiveCircle2] = useState(false);
	const [activeCircle3, setActiveCircle3] = useState(false);
	const [activeCircle4, setActiveCircle4] = useState(false);
	const [activeCross0, setActiveCross0] = useState(false);
	const [activeCross1, setActiveCross1] = useState(false);
	const [activeCross2, setActiveCross2] = useState(false);
	const [activeCross3, setActiveCross3] = useState(false);

	function handlesShapes() {
		if (counter % 2 === 0) {
			// if the id of the box is even then call to the handleBoxColor function
			//handleBoxColorEven(id);
			handleCircle(counter);
		} else {
			// if the id of the box is odd then call to the handleBoxColor2 function
			handleCross(counter);
		}
	}

	function drawACircle() {
		// function that return a div with the class circle that display that shape
		return <div className="circle"></div>;
	}

	function drawACross() {
		// function that return a div with the id cross that display that shape
		return <div id="cross"></div>;
	}

	function handleCircle(counter) {
		switch (counter) {
			case 0:
				setActiveCircle0(true);
				setCounter(counter + 1);
				break;
			case 2:
				setActiveCircle1(true);
				setCounter(counter + 1);
				break;
			case 4:
				setActiveCircle2(true);
				setCounter(counter + 1);
				break;
			case 6:
				setActiveCircle3(true);
				setCounter(counter + 1);
				break;
			case 8:
				setActiveCircle4(true);
				setCounter(counter + 1);
				break;
			default:
				break;
		}
	}

	function handleCross(counter) {
		switch (counter) {
			case 1:
				setActiveCross0(true);
				setCounter(counter + 1);
				break;
			case 3:
				setActiveCross1(true);
				setCounter(counter + 1);
				break;
			case 5:
				setActiveCross2(true);
				setCounter(counter + 1);
				break;
			case 7:
				setActiveCross3(true);
				setCounter(counter + 1);
				break;
			default:
				break;
		}
	}

	return (
		<Grid w="100%" h="100%" bg="primary">
			<Center>
				<Text color="primary" fontSize="98px">
					TA-TE-TI
				</Text>
			</Center>
			<Center h="100%" bg="primary">
				<Grid
					w="500px"
					h="500px"
					border="7px"
					borderColor="#ED64A6"
					templateColumns="repeat(3, 1fr)"
				>
					<Box
						w="100%"
						h="100%"
						id={0}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCircle0 ? drawACircle() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={1}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCross0 ? drawACross() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={2}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCircle1 ? drawACircle() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={3}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCross1 ? drawACross() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={4}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCircle2 ? drawACircle() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={5}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCross2 ? drawACross() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={6}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCircle3 ? drawACircle() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={7}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCross3 ? drawACross() : null}
					</Box>
					<Box
						w="100%"
						h="100%"
						id={8}
						bg={background0}
						borderColor="#00B5D8"
						borderWidth="3px"
						onClick={() => handlesShapes()}
					>
						{activeCircle4 ? drawACircle() : null}
					</Box>
				</Grid>
			</Center>
		</Grid>
	);
}

export default App;
