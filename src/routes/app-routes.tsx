export type NavRoute = {
    path: string
    title: string
    icon?: string
}


export const appRoutes: {home: string, artist: string} = {
    home: '/',
    artist: '/artist'
}

export const navRoutes: NavRoute[] = [
    {
        path: appRoutes.home,
        title: 'Home'
    },
    {
        path: appRoutes.artist,
        title: 'Artist'
    }
]