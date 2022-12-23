import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getposts} from '../Store/post/postactions'
import {Box,Image,SimpleGrid,Flex,Button} from "@chakra-ui/react"
import { Markup } from 'interweave';
import iconpost from "../Assets/Addnewposticon.png"
import { Link, redirect } from "react-router-dom";
const Allpost = () => {
    const [arr,setarr] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getposts())
        
    },[])
 
    const initState = useSelector((store)=>store.post)

    useEffect(()=>{
       setarr(initState.data)
    },[initState])

    console.log(initState.data)
    if(initState.loading===true){
      return(<Flex justifyContent={'center'} p="40px" ><Image h={'500px'}  src="https://i.pinimg.com/originals/8c/25/df/8c25df594826acc0a9dec635e140bd98.gif"  /  >
      </Flex> ) }
      
  return (
    <Box p={'40px'} >
    <>
    
    <SimpleGrid position={'relative'} gap={"30px"} columns={[1,2,3]}>
    {arr.length===0?<Flex justifyContent={'center'} p="40px" ><Image h={'500px'}  src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif"  /  >
    </Flex> :arr?.map((e)=>{
        return (
          <Link to={`/Singleblog/${e._id}`}> <Box p='10px' id='scrolldiv' borderRadius={"15px"} minH={"250px"} maxH={"250px"} overflow='scroll' scrollBehavior={'none'} maxW="300px" bg="#D9D9D9" onClick={()=>redirect(`/SinglePost/${e._id}`)} >
          <Markup content={e.Description} />
            </Box></Link> 
        )
    })}    </SimpleGrid>
    </>
    <Link to="/publishblog"><Button  bottom={'100px'} right="30px" position={'absolute'}  h={'80px'} w="70px" bg="#E9E9E9" ><Image src={iconpost}/></Button></Link>
    </Box>
  )
}

export default Allpost
