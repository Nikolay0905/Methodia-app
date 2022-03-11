import { Post } from "../slices/postSlice";
import axios from "../axiosConfig";

export function fetchPost(): any {
	return new Promise<Post[]>((resolve, reject) => {
		axios("/posts.json")
			.then((res) => {
				resolve(res.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
}
