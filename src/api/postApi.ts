import axios from "axios";
import { Post } from "../slices/postSlice";

export function fetchPost(): any {
	return new Promise<Post[]>((resolve, reject) => {
		axios
			.get("./store/posts.json")
			.then(({ data }) => {
				// resolve(data);
				console.log(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
}
