import React from 'react';

import {
    View,
    Text,
    Image
} from 'react-native'

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb33e091-6aac-43af-b782-109fec329825/d7io6i7-6bfb2e52-91a2-4b65-89c6-dba18d5cfe3f.png/v1/fill/w_667,h_744,strp/mega_charizard_x_icon_by_theezinc_d7io6i7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ0IiwicGF0aCI6IlwvZlwvY2IzM2UwOTEtNmFhYy00M2FmLWI3ODItMTA5ZmVjMzI5ODI1XC9kN2lvNmk3LTZiZmIyZTUyLTkxYTItNGI2NS04OWM2LWRiYTE4ZDVjZmUzZi5wbmciLCJ3aWR0aCI6Ijw9NjY3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WT2lcH1k-FrrYT_YP4yx3LEaWUgcBWridQhAePIJI_s';

    return (
        <Image 
            style={styles.image}
            source={{ uri }}
            resizeMode="cover"
        />
    );
}