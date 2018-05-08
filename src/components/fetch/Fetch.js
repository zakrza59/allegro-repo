import React from "react";
import Loading from "../loading/Loading";
import { timeAgo } from "../../functions";
import "./Fetch.css";



class Fetch extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      name: null,
      date: null,
      link: null,
    }
  };


componentDidMount() {
  this.setState({ loading: true });

  fetch("https://api.github.com/users/allegro/repos?per_page=100&sort=pushed")
  .then(response => {
    return response.json().then(json => {
      return response.ok ? json : Promise.reject(json);
    });
  })
  .then((data) => {
    this.setState({
      name: data[0].name,
      date: data[0].pushed_at,
      link: data[0].html_url,
      loading: false,
    });
  });
}

render() {
  const { name, loading, date } = this.state;

  if (loading) {
    return <div className="Loading-container"><Loading/></div>
  } 

  return (
    <div className="Fetch-box">
        <a href={this.state.link} className="State-data" target="_blank">{name}</a> 
        <p className="Text">last update <span>{timeAgo(date)}</span></p>
    </div>
    )
  }
}

export default Fetch;