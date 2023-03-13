import contractor from '../../assets/images/cediLogo.jpeg'
import house from '../../assets/images/dollar.png'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'materials',
        label: 'Materials',
        path: '/',
        img: contractor
    },
    {
        key: 'estates',
        label: 'Real Estates Mkt',
        path: "estates",
        img: house
    }
]

export const DASHBOARD_TOPBAR_LINKS = [
    {
        key: 'disclaimer',
        label: 'Disclaimer',
        path: 'disclaimer'
    },
    {
        key: 'why bldr',
        label: 'Why Bldr?',
        path: 'bldr'
    },
    {
        key: 'about',
        label: 'About',
        path: 'about'
    },

]