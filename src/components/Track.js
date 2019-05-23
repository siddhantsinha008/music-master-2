import React,{Component} from 'react';

export default class Track extends Component{
    state= {playing:false,audio:null,playingPreviewUrl:null}

    playAudio=perviewUrl=>()=>{
        const audio=new Audio(perviewUrl);
        if(this.state.playing===false){            
            audio.play();
            this.setState({playing:true,audio,playingPreviewUrl:perviewUrl})
            
        }
        else{
            this.state.audio.pause();
            // this.setState({playing:false,audio:null,playingPreviewUrl:null})
            if(this.state.playingPreviewUrl === perviewUrl){
            this.setState({playing:false});
            }
            else{
                audio.play();
                this.setState({audio,playingPreviewUrl:perviewUrl});
            }
        }
    }

    trackIcon = track=>{
        if(!track.preview_url){
            return(<span>N/A</span>)
        }
        if(this.state.playing 
            &&
            this.state.playingPreviewUrl===track.preview_url){
            return(<span>||</span>)    
            }
        else{
            return(<span>&#9654;</span>)
        }
    }

    render(){
        const {track}=this.props;
        return(
            <div>
                {
                    
                    track.map(track=>{
                        const {id,name,album,preview_url}=track;
                        return(
                            // <div style={{display:'inline-block',margin:25}}>
                           
                                <div key={id} className='track-block' onClick={this.playAudio(preview_url)}>
                                    <img
                                    className='track-image'
                                    // style={{height:100,width:100,borderRadius:50,objectFit:'cover'}}
                                    src={album.images[0].url} 
                                    alt='track-image' />
                                    <p className='track-text'>{name}</p>
                                    <p className='track-icon'>{this.trackIcon(track)}</p>
                                </div>
                          
                        );
                    })
                }
            </div>
        )
    }
}