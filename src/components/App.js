import React from "react";
import SearchBar from './SearchBar'
import axios from 'axios';
//import youtube from "../apicalls/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetail";

const KEY = 'your youtube api key';

class App extends React.Component{
    //api calls

    state={
        videos:[],
        selectedVideo:null
    }
    componentDidMount() {
        this.getValueFromSeach('ethiopian music')
    }

    getValueFromSeach=async (textInput)=>{
        const response=  await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                q: textInput,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        })
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
    onselect=(selVideos)=>{
        this.setState({selectedVideo:selVideos})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar searchText={this.getValueFromSeach}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails selvideo={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videolist={this.state.videos} onselect={this.onselect}/>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}
export default App;