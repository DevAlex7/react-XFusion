import React, {Component} from 'react'
import ItemSidebar from './itemsidebar'
class Sidebar extends Component{
    state={
        isOpen : true,
        options:[
            {
                name:'Inicio',
                selected:false,
                icon:'dashboard',
                route:'/feed'
            },
            {
                name:'Juegos',
                selected:false,
                icon:'videogame_asset',
                route:'/videogames'
            },
        ]
    }


    openSidebar = () => {
        const {isOpen} = this.state
        
        this.setState({
            isOpen : !isOpen
        })
    }

    render(){
        //get state open sidebar
        const {isOpen} = this.state 
        
        return(
            <div className="flex flex-col w-full md:w-64 fixed max-h-full md:h-screen overflow-auto sm:fixed md:static text-gray-700 dark-mode:text-gray-200 bg-white dark-mode:bg-gray-800 flex-shrink-0">
                <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                    <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">X Fusion</a>
                    <button onClick={()=>this.openSidebar()} className="rounded-lg block md:hidden focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        {
                            //to change icon in small device
                            this.state.isOpen ? 
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd"></path>
                            :
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" fillRule="evenodd"></path>
                            
                        }
                        </svg>
                    </button>
                </div>
                <nav className={`${ isOpen? 'block' : 'hidden' } sm:hidden md:block flex-grow px-4 pb-6 md:pb-0 md:overflow-y-auto`}>
                    {   
                        //loop options state
                        this.state.options.map((element, index)=> 
                            <div key={index}>
                                <ItemSidebar 
                                    route={element.route}
                                    name={element.name}
                                    icon={element.icon}
                                />
                            </div>
                        )
                    }
                </nav>
            </div>
        )
    }
}
export default Sidebar 