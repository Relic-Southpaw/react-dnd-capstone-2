import React, { useContext, useEffect, useState } from 'react';
//lazy, Suspense from above
import { useParams, Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ContentContainer from "../common/ContentContainer"
import SpellCard from "../SpellCard"
import {
    Stack,
    Typography,
    Grid,
    Avatar,
    Button,
    Divider,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import ProfileSkeleton from './ProfileSkeleton';
import EditProfile from './EditProfile';

export default function Profile() {
    const { username } = useParams();
    const { currentUser, getCurrentUser, userData, token, getFavorites, favorites } =
        useContext(UserContext);

    const [open, setOpen] = useState(false);

    const handleEditClick = () => {
        setOpen(true);
    };

    useEffect(() => {
        // GET request for userData
        if (!userData && currentUser) getCurrentUser(username);
        // eslint-disable-next-line
    }, [currentUser, getCurrentUser]);

    useEffect(() => {
        if (currentUser) getFavorites()
    }, [])


    if (!token) return <Navigate to={'/login'} />;

    return (
        <Stack>
            <ContentContainer>
                <Grid
                    container
                    spacing={2}
                    direction={'row'}
                    alignItems={'flex-end'}
                >
                    {userData ? (
                        <>
                            <EditProfile
                                open={open}
                                setOpen={setOpen}
                                username={username}
                            />
                            <Grid item>
                                <Avatar
                                    src={userData.imageURL}
                                    sx={{ width: 120, height: 120 }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='h5'
                                    color={'secondary.main'}
                                >
                                    {userData.username}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                marginLeft={'auto'}
                            >
                                <Button
                                    size='small'
                                    onClick={handleEditClick}
                                >
                                    <Edit
                                        fontSize='medium'
                                        sx={{
                                            color: 'secondary.main',
                                            marginLeft: 2,
                                        }}
                                    />
                                </Button>
                            </Grid>
                        </>
                    ) : (
                        <ProfileSkeleton />
                    )}
                    <Grid
                        item
                        xs={12}
                    >
                        <Divider sx={{ color: 'blue' }} />
                    </Grid>
                </Grid>
                <h3>Favorite Spells</h3>
                <div className="App">
                    {favorites.length === 0 && <span className="loading">No Spells yet!</span>}
                    <ul className="spell-list">
                        {favorites ? favorites.map((spell) => (
                            <SpellCard key={spell.index} spell={spell} onProfilePage />
                        )) : null}
                    </ul>
                </div>
            </ContentContainer>
        </Stack >
    );
}