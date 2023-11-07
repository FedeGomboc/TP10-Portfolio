import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import { Badge } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import StyledBadge from '@mui/material/Badge';
import { FavoritosContext } from '../context/FavoritosContext';
import { useContext } from 'react';

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'Info',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Mis creaciones',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Mis favoritos',
        to: '/favoritos',
        active: 'favoritos'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const {cantidadFavoritos } = useContext(FavoritosContext);
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
                <li>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cantidadFavoritos} color="secondary">
                        <StarIcon />
                    </StyledBadge>
                </IconButton>
                </li>
            </Box>
        </Box>
    )
}