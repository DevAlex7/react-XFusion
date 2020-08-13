import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon'
import { NavLink } from 'react-router-dom'
import '../App.css'
class ItemSidenav extends Component{
    render(){
        //get props from component in sidebar
        const {icon, name, route} = this.props
        //set navlink
        return(
            <NavLink 
            //set color item navigation
            activeClassName="navItemActive" 
            //route property as a prop from parent state
            to={`${route}`} 
            //default style if user is not in selected page
            className="flex shadow-md justify-start px-4 py-2 mt-2 text-sm font-semibold rounded-lg">
                <Icon fontSize="small" className="mr-3">{icon}</Icon>
                {name}
            </NavLink>
        )
    }
}

export default ItemSidenav