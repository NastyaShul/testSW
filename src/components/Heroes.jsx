import React, { useEffect, useState } from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import { getCharacters } from '../services/SWServices';

const Heroes = () => {
   const [chars, setChars] = useState([]);

   useEffect(() => {
      const fetchChars = async () => {
         const char = await getCharacters();
         setChars(char)
      }
      fetchChars();
   }, []);

   const TextBox = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
         textAlign: "center",
      },
   }));

   const HeroBox = styled(Box)(({ theme }) => ({
      marginBottom: "20px",
      padding: "10px",
      boxShadow: "5px 3px 4px blue",
      [theme.breakpoints.down("md")]: {
         textAlign: "center"
      },
   }));

   return (
      <Container>
         <TextBox>
            <Typography
               fontSize="35px"
               fontWeight="700"
               marginBottom="20px" >
               You don't know about it:
            </Typography>
         </TextBox>
         {chars.map(char =>
            <HeroBox>
               <Typography
                  key={char.name}
                  fontSize="20px"
                  marginBottom="10px"
                  color={"text.secondary"}>
                  {char.name}
               </Typography >
               <Box>
                  <Typography fontSize="14px">Height: {char.height}</Typography >
                  <Typography fontSize="14px">Mass: {char.mass}</Typography >
                  <Typography fontSize="14px">Birth year: {char.birth_year}</Typography >
               </Box>
            </HeroBox>
         )}
      </Container>
   )
}

export default Heroes;
