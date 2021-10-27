import React, { useEffect, useState } from "react";
import { Box, Container, Heading, SimpleGrid, Image, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import { db } from "../../firebase";

const Blogs = () => {

    const [data, setData] = useState("");
    const [featuredBlog, setFeaturedBlog] = useState("");

    // ! To fetch data from DB
    useEffect(() => {
        db.collection("blogs")
        .orderBy("time","desc")
        .get()
        .then((snapshot) => {
            console.log(snapshot);
            setData(snapshot);
            setFeaturedBlog(snapshot.docs[0].data());
        })
        .catch((err) => {
            console.log(err);
        })
    },[])


    return (
        <Box mt="10" mb="20">
            <Container maxW="container.xl">

            <Box p="5" bgImage={BackgroundImg}
            w="100%"
            bgPosition="center">
            <Heading color="orange.400">
                Blogs
            </Heading>
            <Text fontSize="lg" my="4">
                Learn more about AWS by reading our blogs. These blogs are very carefully curated
                by our community members.
            </Text>
            </Box>

            <SimpleGrid mt="20" minChildWidth={["270px", "500px"]} spacing={10}>
            { featuredBlog &&
            <Box height="auto">

                    <Box bg="teal">
                    <Image boxSize="100%" src={ featuredBlog.imgUrl } alt="Dan Abramov" />
                    </Box>
                    <Box mx="3">
                        <Heading mt="4" fontSize="3xl">{ featuredBlog.title }</Heading>
                        <Text my="2" color="orange.400">Posted by { featuredBlog.author }</Text>
                        <Text fontSize="sm" my="4">
                        { featuredBlog.body }
                        </Text>
                        <a href={ featuredBlog.link }>
                        <Button mb="6" w="9rem" rightIcon={<ArrowForwardIcon />} colorScheme="orange">
                            Read more
                        </Button>
                        </a>
                    </Box>

            </Box>}
            </SimpleGrid>

            <Box mt="8rem">
            <Heading color="orange.400">
                All Blogs
            </Heading>
            <Text fontSize="lg" my="4">
                Explore all of our blogs to your fullest !
            </Text>

            { data &&
                <>
                { data.docs.map( result => (

                <Box key={ result.id } boxShadow="2xl" 
                borderRadius="lg" bg="#ffffff" 
                my="6" mx={["0","6"]} display="flex" 
                flexWrap={["wrap", "wrap", "nowrap"]} 
                p="2"> 

                    <Box w={["100%", "100%", "40%"]}>   
                    <Image boxSize="100%" src={ result.data().imgUrl } alt="Dan Abramov" />
                    </Box>

                    <Box w={["100%", "100%", "60%"]} mx="3" pb="4" px={["auto", "auto", "6"]}>
                        <Heading mt="4" fontSize="3xl">{ result.data().title }</Heading>
                        <Text my="2" color="orange.400">Posted by - { result.data().author }</Text>
                        <Text fontSize="sm" my="4">
                        { result.data().body }
                        </Text>

                        <a href={ result.data().link } target="blank" rel="noopener">
                        <Button mr="2" w="7rem" colorScheme="orange">
                            Read more
                        </Button>
                        
                        </a>
                    </Box>
                </Box>

                ))}
                </>}
            </Box>

            </Container>
        </Box>
    );
}
 
export default Blogs;