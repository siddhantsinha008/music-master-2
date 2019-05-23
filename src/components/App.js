import React,{Component} from 'react';
import Artist from './Artist';
import Search from './Search';
import Track from './Track';
const BASE_API='https://spotify-api-wrapper.appspot.com'
class App extends Component{
    state={artist:null,tracks:[]};

 

    // updateArtistQuery=event=>{
    //     console.log('Entered Artist is ',event.target.value);
    //     this.setState({artistQuery:event.target.value});
    // }

    // searchOnKey=event=>{
    //     if(event.key === 'Enter')
    //     {
    //         this.searchArtist();
    //     }
    // }

    searchArtist=artistQuery=>{
        console.log('this.state is ',this.state)
        
        fetch(`${BASE_API}/artist/${artistQuery}`)
        .then(response=>response.json())
        .then(json=>{console.log('Artist json',json);

        if(json.artists.total>0){
            const artist=json.artists.items[0];
            //artist is {href: "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C", id: "0du5cEVh5yTK9QJze8zA0C", name: "Bruno Mars", … }
       
            this.setState({artist})

            fetch(`${BASE_API}/artist/${artist.id}/top-tracks`)
            .then(response=>response.json())
            // .then(json=>console.log('track',json))
            .then(json=>this.setState({tracks:json.tracks}))
            .catch(error=>alert(error.message ));

        }
        // else{
        //         return(<p>Artist Not Found</p>)
        //     }
        }
        
        )
    }

    render(){
        console.log('This.state',this.state)
        return(
            <div>
                <h2 className='App-text'>MUSIC MASTER</h2>
                {/* <input
                onChange={this.updateArtistQuery} 
                onKeyPress={this.searchOnKey}
                placeholder='Type name of the artist'
                />
                <br />
                <button onClick={this.searchArtist}>Search</button>   
                <br /> */}
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <Track track={this.state.tracks} />           
            </div>
        )
        
            
    }
}

export default App;