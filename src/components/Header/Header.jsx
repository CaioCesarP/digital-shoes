import { Typography, Box, Input, InputLabel, InputAdornment, FormControl, Button, IconButton, Icon, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const links = [
        'home', 
        'products',
        'promotions',
        'about us',
    ]

    return(
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <section style={{ display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
            <Typography variant="h1" sx={{ typography: { fontSize: '1em' }}}>LOGO</Typography>
            <Box item md='12'>
                <FormControl variant='standard'>
                    <InputLabel htmlFor='input-search'>
                        Search for product...
                    </InputLabel>
                    <Input id='input-search' 
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }/>
                </FormControl>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
                <Button variant='outlined'>sign up</Button>
                <Button variant='outlined' color='secondary'>Sign in</Button>
            </Box>
            <IconButton title='ShoppingCart'>
                <Icon>
                    <ShoppingCartIcon color='secondary'/>
                </Icon>
            </IconButton>
        </section>
        <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: "90%", gap: '30px',  }}>
            {links.map( (link, key) => {
                return <Link key={key} href='#' color='secondary' style={{ textUnderlineOffset: '5px' }}>{link}</Link>
            })
            }
        </section>
        </header>
    )
}

export default Header;
