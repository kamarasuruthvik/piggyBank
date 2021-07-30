import React from 'react'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
const Iconic = ({category}) => {
    switch(category){
        case 'Shopping':
            return <ShoppingCartIcon color=""/>
        case 'Fuel':
            return <LocalGasStationIcon color="#fca311"/>
        case 'Home':
            return <HomeWorkIcon color="#d90429"/>
        case 'Food':
            return <FastfoodIcon color="#43aa8b"/>
        default:
            return <NotListedLocationIcon/>
    }
}

export default Iconic;
