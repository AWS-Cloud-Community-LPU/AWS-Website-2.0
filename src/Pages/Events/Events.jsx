import React, { useEffect, useState } from "react";
import { Box, Container, Center, Heading, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import EventImg from "../../Assets/Home/EC2.jfif";
import BackgroundImg from "../../Assets/Blogs/tour-bg.png";
import { db } from "../../firebase";

const Events = () => {

    const [data, setData] = useState("");
    const [featuredEvent, setFeaturedEvent] = useState("");

    // ! To fetch data from DB
    useEffect(() => {
        db.collection("blogs")
        .orderBy("time","desc")
        .get()
        .then((snapshot) => {
            console.log(snapshot);
            setData(snapshot);
            setFeaturedEvent(snapshot.docs[0].data());
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
                Events
            </Heading>
            <Text fontSize="lg" my="4">
            We conduct frequent learning sessions for our 
            community to help, share and expand our knowledge 
            on various topics, all videos are shared on our 
            Youtube Channel
            </Text>
            </Box>

            { featuredEvent &&
            <Box my="28">
            <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={["5xl","6xl"]}
            fontWeight="extrabold"
            ml={["auto", "24"]}
            mb="8"
            >
                Our Upcoming Event
            </Text>

            <Center>
            <iframe width="100%" height="350" src={ featuredEvent.embedLink } 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </Center>

            <Box mt="10">
                <Heading ml={["auto", "28"]} my="5" color='orange.400' fontSize="3xl">
                { featuredEvent.title } 
                </Heading>
                <Text justifyContent="justify" mx={["auto", "28"]}>
                { featuredEvent.body } 
                </Text>
                <Center mt="8">
                <a href={ featuredEvent.link } target="blank" rel="noopener">
                <Button mr="2" w="9rem" colorScheme="orange">
                    View
                </Button>
                </a>
                </Center>  
            </Box>
            </Box>}

            <Heading fontSize="4xl" mb="8" color="orange.400">
                Our Past Events
            </Heading>

            <Box>

            { data &&
                <>
                { data.docs.map( result => (
                <Box 
                key = { result.key }
                boxShadow="2xl" 
                borderRadius="lg" bg="#ffffff" my="6" 
                mx={["0","6"]} display="flex" 
                flexWrap={["wrap", "wrap", "nowrap"]} 
                p="2">      

                    <Box w={["100%", "100%", "40%"]}>

                    <iframe width="100%" height="100%" src={ result.data().embedLink } 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>

                    {/* <Image boxSize="100%" src="https://awscloudcommunitylpu.netlify.app/images/blog/EC2.jfif" alt="Dan Abramov" /> */}
                    
                    </Box>

                    <Box w={["100%", "100%", "60%"]} mx="3" pb="4" px={["auto", "auto", "6"]}>
                        <Heading mt="4" fontSize="3xl">{ result.data().title }</Heading>
                        <Text my="2" color="orange.400">Date { result.data().date }</Text>
                        <Text fontSize="sm" my="4">
                        { result.data().body }
                        </Text>

                        <a href={ result.data().link } target="blank" rel="noopener">
                        <Button mr="2" w="7rem" colorScheme="orange">
                            View
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
 
export default Events;