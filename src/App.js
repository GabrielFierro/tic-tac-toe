import { useState } from "react";
import { Box, Button, Center, Grid, Text, Typography } from "@chakra-ui/react";
import "./App.css";

function App() {
	// Zone of the states
	const [background0, setBackground0] = useState("primary");
	const [turn, setTurn] = useState("X"); // This state set the turn of the user
	const [cells, setCells] = useState(Array(9).fill(""));
	const [winner, setWinner] = useState();

	const handleReset = () => {
		setWinner(null);
		setTurn("X");
		setCells(Array(9).fill(""));
	};

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === "" ||
					squares[pattern[1]] === "" ||
					squares[pattern[2]] === ""
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};
	// Arrow function that handle the click when the user click on a cell.
	// Then, when the user click on the cell, we show the number of the cell.
	const handleClick = (num) => {
		if (cells[num] !== "") {
			// this condicional check if a cell was clicked previously or not.
			// in case of that was clicked, display the alert message already clicked.
			alert("Already clicked");
			return;
		}

		let squares = [...cells];

		if (turn === "X") {
			squares[num] = "X";
			setTurn("0");
		} else {
			squares[num] = "0";
			setTurn("X");
		}

		checkForWinner(squares);
		setCells(squares);
	};

	// Component that represent a Cell with a data cell. Pass the num value by paramater
	// to pass to the function handleClick this value
	const Cell = ({ num }) => {
		return (
			<Box
				sx={{ width: "100%", height: "100%" }}
				bg={background0}
				borderColor="#00B5D8"
				borderWidth="3px"
				onClick={() => handleClick(num)}
				paddingBottom="12px"
			>
				<Center>
					<Text color="#F6E05E" fontSize="78px" marginBottom="-100%">
						{cells[num]}
					</Text>
				</Center>
			</Box>
		);
	};

	return (
		<Grid w="100%" h="100%" bg="primary">
			<Center>
				<Text color="primary" fontSize="64px">
					TA-TE-TI
				</Text>
			</Center>
			<Center>
				<Text color="primary" fontSize="32px">
					Turn: {turn} {" / "}
				</Text>
				<Text color="primary" fontSize="32px">
					{winner && (
						<>
							<Text style={{ color: "#ED64A6" }}>
								{winner} <span color="primary">is the winner</span>
							</Text>
						</>
					)}
				</Text>
			</Center>
			<Center h="100%" bg="primary">
				<Grid
					w="450px"
					h="450px"
					borderColor="#ED64A6"
					templateColumns="repeat(3, 1fr)"
				>
					<Cell num={0} />
					<Cell num={1} />
					<Cell num={2} />
					<Cell num={3} />
					<Cell num={4} />
					<Cell num={5} />
					<Cell num={6} />
					<Cell num={7} />
					<Cell num={8} />
				</Grid>
			</Center>
			<Center h="100%" bg="primary">
				<Button
					style={{
						borderRadius: 10,
						backgroundColor: "#ed64a6",
						color: "#f7f7fe",
						padding: "18px 36px",
						marginTop: "5px",
						fontSize: "16px",
						boxShadow: "1px 1px 15px #0BC5EA",
					}}
					onClick={() => handleReset()}
				>
					Play again
				</Button>
			</Center>
		</Grid>
	);
}

export default App;
