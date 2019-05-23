import React,{Component} from 'react';

class Search extends Component{
    state={artistQuery:''};
   
    updateArtistQuery=event=>{
        console.log('Entered Artist is ',event.target.value);
        this.setState({artistQuery:event.target.value});
    }

    searchOnKey=event=>{
        if(event.key === 'Enter')
        {
            this.searchArtist();
        }
    }

    searchArtist =()=>{
        this.props.searchArtist(this.state.artistQuery);
    }

    
    render(){
        return(
            <div style={{padding:10}}>
                <input
                    style={{height:35,width:300,borderRadius:20,justifyContent:'center'}}
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.searchOnKey}
                    placeholder='Type name of the artist'
                />
                <br />
                <button
                style={{marginTop:10,height:30,width:150,borderRadius:20}} 
                onClick={this.searchArtist}>Search</button>   
                <br />
            </div>
        )
    }
}


export default Search;