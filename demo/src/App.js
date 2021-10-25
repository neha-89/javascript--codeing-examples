import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
    fetch('https://api.aniapi.com/v1/user_story', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer <eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1MCIsIm5iZiI6MTYzMzc4MTMxOSwiZXhwIjoxNjM2MzczMzE5LCJpYXQiOjE2MzM3ODEzMTl9.8l7r0umNb8gz3xpgWHUOnYcbMzxDtMrHyR-gwYuaqgs>',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
				: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
