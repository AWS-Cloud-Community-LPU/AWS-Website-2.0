import { Container, Box, SimpleGrid, Heading, Text, Button, Image, Center } from "@chakra-ui/react";
import React from "react";
import HillImg from "../../Assets/Home/hill.png";
import HouseImg from "../../Assets/Home/house.png";
import SunImg from "../../Assets/Home/sun.png";
import BirdImgOne from "../../Assets/Home/birds1.png";
import AWSImg from "../../Assets/Home/aws11.jpg";
import CloudComputingImg from "../../Assets/Home/aws22.jpg";
import EventImg from "../../Assets/Home/EC2.jfif";
import ResourceImg from "../../Assets/Home/resources.png";


const Home = () => {
    return (
        <Box mt={["0","10", "20"]} mb="14">
            <Container maxW="container.xl">

            <SimpleGrid minChildWidth="300px" columns={2}>

                <Box mb="20" height="300px">
                    <Heading fontSize="3xl" mt="10">We Are AWS-CLOUD Community LPU</Heading>
                    <Text mt="6" maxWidth={["100%", "80%"]}>
                        We are a community of enthusiatic students
                        with keen interset in cloud and devops. We conducts events,
                        community classes to promote tech and amazon aws technologies.
                        We love to learn share and implement.
                    </Text>

                    <Box mt="6">
                        <Button w="9rem" mr="4" colorScheme="orange" variant="solid">
                            Read more
                        </Button>
                        <Button w="9rem" colorScheme="orange" variant="outline">
                            Get in touch
                        </Button>
                    </Box>

                </Box>

                <Box position="relative" height="300px">

                    <Image
                        position="absolute"
                        ml="auto"
                        boxSize="100%"
                        objectFit="cover"
                        src={ HillImg }
                    />
                    <Image
                        position="absolute"
                        ml={["0","20"]}
                        mt="40"
                        src={ HouseImg }
                    />
                    <Image
                        position="absolute"
                        objectFit="cover"
                        src={ SunImg }
                    />
                    <Image
                        position="absolute"
                        ml="70%"
                        mt="16"
                        boxSize="20%"
                        objectFit="cover"
                        src={ BirdImgOne }
                />

                </Box>
            </SimpleGrid>

            <Box mt="10">
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/xZ3k7Fd6_eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Heading mt="14" mb="5" fontSize="3xl">
            AWS re:Invent 2020 - Keynote with Andy Jassy
            </Heading>
            <Text fontSize="sm">
            Andy Jassy, CEO of Amazon Web Services, delivers his AWS re:Invent 2020 keynote, 
            featuring the latest news and announcements, including the launches of Habana 
            Gaudi-based Amazon EC2 instances, AWS Trainium, Amazon ECS Anywhere, Amazon 
            EKS Anywhere, Lambda Container Support, AWS Proton, gp3 volumes for Amazon EBS, 
            io2 Block Express for Amazon EBS, Amazon Aurora Serverless v2, Babelfish for 
            Amazon Aurora PostgreSQL, AWS Glue Elastic Views, Amazon SageMaker Data Wrangler, 
            Amazon SageMaker Feature Store, Amazon SageMaker Pipelines, Amazon DevOps Guru, 
            Amazon QuickSight Q, Amazon Connect Wisdom, Amazon Connect Customer Profiles, 
            Real-Time Contact Lens for Amazon Connect, Amazon Connect Tasks, Amazon Connect 
            Voice ID, Amazon Monitron, Amazon Lookout for Equipment, AWS Panorama Appliance, 
            AWS Panorama SDK, AWS Outposts in two new smaller sizes, and 12 additional AWS 
            Local Zones. Guest speakers include Lori Beer, of JPMorgan Chase, Blake Scholl, 
            of Boom, and David Gitlin, of Carrier.
            </Text>
            </Box>

            <SimpleGrid mx={["auto", "20"]} mt="40" minChildWidth="250px" spacing="10px">
            <Box height="200px">
                <Heading fontSize="2xl" mb="5">What is Cloud Computing ?</Heading>
                <Text fontSize="sm" maxWidth={["100%", "80%"]}>
                Cloud computing is the delivery of online services 
                (such as servers, databases, software) to users. 
                With the help of cloud computing, storing data on 
                local machines is not required. It helps you access 
                data from a remote server. Moreover, it is also used 
                to store and access data from anywhere across the world.
                </Text>
            </Box>
            <Box height="200px">
            <Image
                src={ CloudComputingImg }
                alt="Dan Abramov"
            />
            </Box>
            </SimpleGrid>

            <br />

            <SimpleGrid mx={["auto", "20"]} mt="8" minChildWidth="250px" spacing="10px">
            <Box height="200px">
            <Image
                src={ AWSImg }
                alt="Dan Abramov"
            />
            </Box>
            <Box height="200px">
            <Heading fontSize="2xl" mb="5">What is AWS</Heading>
                <Text fontSize="sm" maxWidth={["100%", "80%"]}>
                Amazon web service is an online platform that 
                provides scalable and cost-effective cloud 
                computing solutions. AWS is a broadly adopted 
                cloud platform that offers several on-demand 
                operations like compute power, database storage, 
                content delivery, etc., to help corporates scale 
                and grow.
                </Text>
            </Box>
            </SimpleGrid>

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
            <Image src={ EventImg } fallbackSrc="https://via.placeholder.com/300" />
            </Center>

            <Box mt="10">
                <Heading ml={["auto", "28"]} my="5" color='orange.400' fontSize="3xl">AWS Engage</Heading>
                <Text justifyContent="justify" mx={["auto", "28"]}>
                We, at AWS Cloud Community LPU, believe that knowledge shared 
                is knowledge earned. Accepting and giving is the way of living. 
                It keeps you updated in today's dynamic industry and can make you 
                tomorrow's leader.
                </Text>
                <Center mt="8">
                <Button w="9rem" mr="4" colorScheme="orange" variant="solid">
                    Attend event
                </Button>
                <Button w="9rem" colorScheme="orange" variant="outline">
                    View all events
                </Button>
                    </Center>  
            </Box>
            </Box>


            <Box my="44">
                <Center>
                <Image src={ ResourceImg } fallbackSrc="https://via.placeholder.com/300" /> 
                </Center>

                <Heading color="orange.400" mt="5" textAlign="center">
                    Eager to learn about AWS but dont know where to start?
                </Heading>


                <Text mt="4" textAlign="center">
                    Dont worry AWS has provided documentation of each of its service.You can find it by
                </Text>

                <Center>
                <Button mt="5" w="10rem" colorScheme="orange" variant="outline">
                    Clicking here.
                </Button>
                </Center>

            </Box>

            </Container>
        </Box>
    );
}
 
export default Home;