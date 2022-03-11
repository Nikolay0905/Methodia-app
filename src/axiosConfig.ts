import axios from "axios";

const instance = axios.create({
	baseURL: "https://methodia-40439-default-rtdb.firebaseio.com",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Method": "GET",
		"Access-Control-Allow-Headers": "Content-Type",
	},
});

export default instance;
