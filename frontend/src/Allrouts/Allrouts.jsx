import React from 'react'
import {Box,SimpleGrid} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import NewPost from '../Components/NewPost'
import Allpost from '../Components/Allpost'
import Navbar from './Navbar'
import SinglePost from '../Components/SinglePost'

const Allrouts = () => {
  return (
    <Box>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Allpost/>}  />
    <Route path="/publishblog" element={<NewPost/>}/>
    <Route path='/Singleblog/:id' element={ <SinglePost/> }/>
    </Routes>
      
    </Box>
  )
}

export default Allrouts
