import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import { fetchPost, Post } from "./slices/postSlice";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const App = () => {
	const dispatch = useAppDispatch();
	const posts: Post[] = useSelector((state: RootState) => state.posts);

	let Posts = null;

	if (posts.length > 0) {
		Posts = posts.map((post) => (
			<div className="card" key={post.title}>
				<div className="img-container">
					<img src={post.image} />
				</div>
				<div className="content">
					<h3>{post.title}</h3>
					<p className="excerpt">{post.excerpt}</p>
					<div className="category">
						<p>{post.category}</p>
					</div>
				</div>
			</div>
		));
	}

	useEffect(() => {
		dispatch(fetchPost());
	}, []);

	return (
		<div className="App">
			<div className="card-container">{Posts}</div>
		</div>
	);
};

export default App;
