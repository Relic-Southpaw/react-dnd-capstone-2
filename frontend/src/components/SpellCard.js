import React, { useContext } from 'react';
import UserContext from '../context/UserContext'
import { IconButton, } from '@mui/material';
import { Favorite, FavoriteBorder, Delete } from '@mui/icons-material';

export default function SpellCard({ spell, onProfilePage }) {
    const {
        userFavIds,
        addFavorite,
        removeFavorite,
    } = useContext(UserContext)
    const inFavorites = userFavIds.has(spell.index);


    const handleQuickAddClick = () => {
        if (!inFavorites) {
            // POST request to server to add spell to favorites
            addFavorite(spell);
        }
    };

    const handleTrashClick = () => {
        // POST request to server to delete spell from favorites
        removeFavorite(spell);

    };

    const quickAddBtn = (
        <IconButton
            aria-label='add to favorites'
            onClick={handleQuickAddClick}
            sx={{
                color: 'gray',
                marginLeft: 'auto',
                '&:hover': { color: 'red' },
            }}
        >
            {inFavorites ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
    );

    const trashBtn = (
        <IconButton
            aria-label='remove from favorites'
            sx={{
                color: 'orange',
                marginLeft: 'auto',
                '&:hover': { color: 'red' },
            }}
            onClick={handleTrashClick}
        >
            <Delete />
        </IconButton>
    );
    return (
        <li className="spell-card">
            <div className="card-front">
                <hgroup>
                    <h4>
                        {spell.name}
                    </h4>
                    <small>
                        {spell.level > 0 && `Level ${spell.level} `}
                        {spell.school.name}
                        {spell.level === 0 && " cantrip"}
                    </small>
                </hgroup>
                <div className="stats">
                    <p>
                        <strong>Casting Time</strong>
                        {spell.casting_time}
                    </p>
                    <p>
                        <strong>Range</strong>
                        {spell.range}
                    </p>
                    <p>
                        <strong>Components</strong>
                        {spell.components.join(", ")}
                    </p>
                    <p>
                        <strong>Duration</strong>
                        {spell.duration}
                    </p>
                </div>
            </div>
            {!onProfilePage ? quickAddBtn : trashBtn}
        </li >
    );
}

