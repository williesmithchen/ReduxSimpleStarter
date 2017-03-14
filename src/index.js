import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDom from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAUBhKnyOYkyw0BFSuR3uaS7soLcO2eLhg';

//Create a new component.
//the component should produce some HTML.
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:`${term}` }, (videos) => {
      // console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}  />
        <VideoList
          onVideoSelected={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
};

//take this compomemt a generated HTML and pu it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
