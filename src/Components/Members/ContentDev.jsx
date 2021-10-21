import React, { useEffect, useState } from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { db } from "../../firebase";

const ContentDevelopers = () => {

    const [data, setData] = useState("");

     // ! Using useEffect hook to fetch data on each reload
     useEffect(() => {
        db.collection("members")
        .get()
        .then((snapshot) => {
            console.log(snapshot);
            setData(snapshot);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    
    return (
        <Box display="flex" flexWrap="wrap">
            { data &&
            <>
            { data.docs.map(result => (
            <Box w="16rem" pt="7" style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} boxShadow="md" key={ result.id } 
            borderRadius="md"
            height="300px">  
            <Center>
            <Image
            mt="5"
            borderRadius="full"
            boxSize="150px"
            src={ result.data().profile_pic }
            alt="Segun Adebayo"
            />
            </Center>

            <Text textAlign="center" fontWeight="600" mt="3">
                { result.data().name }
            </Text>

            <Box mx="6" mt="1" fontSize="xl" display="flex" justifyContent="space-evenly">
            <a href={ result.data().linkedin_link }>
            <i class="fab fa-linkedin"></i>
            </a>

            <a href={ result.data().twitter_link }>
            <i class="fab fa-twitter"></i>
            </a>
                
            <a href={ result.data().facebook_link }>
            <i class="fab fa-facebook"></i>
            </a>
                
            <a href={ result.data().instagram_link }>
            <i class="fab fa-instagram"></i>
            </a>
            </Box>

            </Box>
            ))}
            </>}
        </Box>
    );
}
 
export default ContentDevelopers;