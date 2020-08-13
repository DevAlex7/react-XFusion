import React, {Component} from 'react'
import Sidebar from '../components/sidebar'
class Feed extends Component{
    render(){
        return (
            <div className="md:flex flex-col md:flex-row md:h-full w-full">
                <Sidebar/>
                <div className="md:h-screen w-full overflow-scroll">
                    <div className="mt-16 sm:mt-16 md:mt-0">
                        <div className="bg-XFusion text-white text-xl font-bold rounded m-5 p-5">
                            <h1>Bienvenido!</h1>
                        </div>
                        <div className="m-5">
                            <h1 className="text-4xl font-bold">Nuestro blog</h1>
                            <span>Tenemos mucho contenido para ti.</span>
                        </div>
                        <div className="flex flex-wrap m-3">
                            <div className="w-full sm:w-full md:w-1/5 p-2 h-40 flex rounded shadow-md justify-center items-center text-center bg-XFusion m-2">
                                <h1>Blog 1</h1>
                            </div>
                            <div className="w-full sm:w-full md:w-1/5 p-2 h-40 rounded flex shadow-md justify-center items-center text-center bg-XFusion m-2">
                                <h1>Blog 2</h1>
                            </div>
                            <div className="w-full sm:w-full md:w-1/5 p-2 h-40 rounded flex shadow-md justify-center items-center text-center bg-XFusion m-2">
                                <h1>Blog 3</h1>
                            </div>
                            <div className="w-full sm:w-full md:w-1/5 p-2 h-40 rounded flex shadow-md justify-center items-center text-center bg-XFusion m-2">
                                <h1>Blog 4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed