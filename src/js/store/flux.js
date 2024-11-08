const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			grid: [],
			plants: [
				{ name: "rose", light: "full sun", usdaZone: 6 },
				{ name: "turnip", light: "full sun", usdaZone: 7 },
				{ name: "coconut palm", light: "full sun", usdaZone: 10 },
				{ name: "rododendron", light: "part sun", usdaZone: 6 },
			]
		},
		actions: {
			setGrid: (newGrid) => {
				setStore({ grid: newGrid });
				const newGridJSON = JSON.stringify(newGrid);
				localStorage.setItem("grid", newGridJSON);
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
