import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { newpost } from "../Store/post/postactions";
import { Button, Box, Flex, Image, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import home from "../Assets/home.png";
import postadd from "../Assets/postadd.png";

const NewPost = () => {
  const modules = {
    toolbar: [
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "list",
        "link",
        "clean",
      ],
    ],
  };
  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  const newpostfun = () => {
    console.log(value);
    dispatch(newpost({ Description: value }));
    console.log("navigate")
    navigate("/")
    
  };

  return (
    <Flex p={'40px'}>
      <Box>
        <Box p={"20px"}>
          <Link to={"/"} >
            <Button m={"10px"} h={"80px"} w="70px" bg="#E9E9E9">
              <Image src={home} />
            </Button>
          </Link>
        </Box>
        <Box>
       
            <Button onClick={newpostfun} m={"10px"} h={"80px"} w="70px" bg="#E9E9E9">
              <Image src={postadd} />
            </Button>
        
        </Box>
      </Box>
      <Box style={{ width: 500, height: 300 }}>
        <Box bg="#D9D9D9" ref={quillRef} >
        
        </Box>
      </Box>
     
    </Flex>
  );
};

export default NewPost;
