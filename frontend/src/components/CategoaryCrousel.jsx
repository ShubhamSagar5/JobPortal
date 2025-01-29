import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Card, CardMedia } from "@mui/material";

const CategoaryCrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    
      };
    
      const softwareRoles = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "DevOps Engineer",
        "Mobile Developer",
        "Data Engineer",
        "ML Engineer",
        "Security Engineer"
      ];
    
      return (
        <Box sx={{ maxWidth: 600, margin: "auto" }}>
          <Slider {...settings} className='m-2'>
            {softwareRoles.map((item, index) => (
                <Button variant="outlined"  sx={{ padding: "8px 16px", marginRight: "10px" }}  key={index} className='m-2'>{item}</Button>
            ))}
          </Slider>
        </Box>
      );
}

export default CategoaryCrousel