import React, {Component} from 'react'
//import our sidebar component
import Sidebar from '../components/sidebar'
//import a circular progress from material UI
import {
    CircularProgress
} from '@material-ui/core'
//import Icon component from material UI
import Icon from '@material-ui/core/Icon'
//import axios library
import axios from 'axios'

class VideoGames extends Component{

    state= {
        isLoading : true,
        games : []
    }
    
    async componentDidMount(){
        //request api
        const games = await axios.get('https://api.rawg.io/api/games?page=1')
        //update state loading property and games property with data
        this.setState({
            games  : games.data.results,
            isLoading : false
        })
    }
    render(){
        return (
            <div className="flex flex-col md:flex-row md:h-full min-h-screen">
                <Sidebar/>
                <div className="md:h-screen w-full overflow-scroll">
                    <div className="mt-16 sm:mt-16 md:mt-0">
                        <div className="m-5">
                            <h1 className="text-4xl font-bold">Tus videojuegos favoritos.</h1>
                            <span>Tenemos mucho contenido para ti.</span>
                        </div>
                        <div className="flex flex-wrap">
                            {
                                //if the request is processing
                                !this.state.isLoading ? 
                                    //loop the games state
                                    this.state.games.map((game, index)=>{
                                        return(
                                            <div key={index} className="sm:w-full md:w-1/2 p-2">
                                                <div className="rounded shadow-md w-full ">
                                                    <img className="w-full object-cover h-56 rounded" src={game.background_image}/>
                                                    <div className="py-5 px-3">
                                                        <div className="flex flex-wrap md:py-0 md:flex-no-wrap justify-between items-center ">
                                                            <div>
                                                                <p className="text-4xl font-semibold">{game.name}</p>
                                                                <p>Release date {game.released}</p>
                                                            </div>
                                                            <div>
                                                                <div className="my-2 sm:my-2 md:my-0 bg-XFusion flex justify-center text-white text-sm px-4 py-1 rounded-full">
                                                                    <Icon fontSize="small">star</Icon>
                                                                    <span className="ml-1">{game.rating}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) 
                                : 
                                //loading circular progress
                                <div className="flex w-full justify-center">
                                    <CircularProgress style={{
                                        color :'#ef233c'
                                    }}/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = props => ({
    colorPrimary: {
      backgroundColor: '#00695C',
    },
    barColorPrimary: {
      backgroundColor: '#B2DFDB',
    }
  });

export default VideoGames