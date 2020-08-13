import React , {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{
    render(){
        return (
            <div className="w-full flex h-screen bg-XFusion">
                <div className="m-auto p-12 md:p-0 md:m-auto text-white">
                    <p className="text-2xl">Bienvenido a tu plataforma de videojuegos</p>
                    <p className="text-4xl">XFusion</p>
                    <div className="mt-3">
                        <Link 
                        to="/feed"
                        className="px-4 py-2 text-red-600 bg-white rounded font-bold">
                            Entrar
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home