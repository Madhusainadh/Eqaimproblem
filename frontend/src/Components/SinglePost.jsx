import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { Markup } from 'interweave'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, redirect, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { deletesinglepost, getsingleposts } from '../Store/post/postactions'
import home from "../Assets/home.png";

const SinglePost = () => {
    const {id} = useParams();
    const initState = useSelector((store)=>store.post)

console.log(id)
const navigate = useNavigate();
const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getsingleposts(id))
    
    }, [])

const deletefun =()=>{

}

    if(initState.loading===true){
        return(<Flex justifyContent={'center'} p="40px" ><Image h={'500px'}  src="https://i.pinimg.com/originals/8c/25/df/8c25df594826acc0a9dec635e140bd98.gif"  /  >
        </Flex> ) }
  return (
    <div>
     <Flex justifyContent={'center'}>
     <Box>
        <Box p={"20px"}>
          <Link to={"/"} >
            <Button m={"10px"} h={"80px"} w="70px" bg="#E9E9E9">
              <Image src={home} />
            </Button>
          </Link>
        </Box>
      </Box>
     <Box p={'10px'} maxW='60%'  >
          <Markup content={initState.data.Description} />
            </Box>
     </Flex>
     <Button colorScheme={"red"} onClick={()=>{ 
        dispatch(deletesinglepost(initState.data._id))
        navigate("/") }
    }
      >Delete</Button>
    </div>
  )
}

export default SinglePost
