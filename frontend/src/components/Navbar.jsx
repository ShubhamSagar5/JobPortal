import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {

    const login = false
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };
  
    return (
    <div className=' p-3  shadow-lg '>
        <div className='mx-[3%]'><div className='flex items-center justify-between mx-auto'>
            <div>
                <div className='font-bold text-2xl cursor-pointer' onClick={()=>(navigate("/"))}>Job<span className='text-[#f83002]'>Hunt</span></div>
            </div>
            <div className='flex justify-between items-center gap-8'>
            <div >
                <ul className='flex justify-between items-center gap-8 cursor-pointer'>
             <Link to={"/"}><li>Home</li></Link>   
             <Link to={"/jobs"}><li>Jobs</li></Link> 
             <Link to={"/browse"}><li>Browse</li></Link> 
                </ul>
            </div>
            {
                !login ? <div className='flex gap-1'>
                <Button  variant="outlined" onClick={()=>(navigate("/login"))}>Login</Button> 
                <Button  variant="contained" onClick={()=>(navigate("/signup"))}>Signup</Button>
                </div> : <div><Avatar onClick={handleClick('bottom')} className='cursor-pointer' sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200,}}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2,mt:1.7, }}>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3'>
                    <Avatar onClick={handleClick('bottom')} className='cursor-pointer' sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                        <div className=''>
                        <p className='font-semibold'>Hariboll Hariboll</p>
                        <p>Lorem ipsicing elit.dfd</p>
                        </div>                    </div>
                    <div className='flex flex-col gap-3'>
                    <Button variant="outlined"  startIcon={<Person2Icon />}>
        Profile
      </Button>
      <Button variant="outlined" startIcon={<LogoutIcon />}>
       Logout
      </Button>
                    </div>
                </div>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper></div> 
            }
            </div>
        </div></div>
        
    </div>
  )
}

export default Navbar