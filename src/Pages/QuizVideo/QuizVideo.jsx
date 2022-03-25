import { Container, Heading, Text, Center, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const QuizVideo = () => {
    return ( 
       <Container maxW="container.xl">
           <Heading mt="14" color="orange.400">
                AWSCCLPU Monthly Quiz Video
            </Heading>

            <Text mt="8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Vero, doloremque eum sit in beatae possimus magni dolor ad? 
                Expedita, reiciendis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Vero, doloremque eum sit in beatae possimus magni dolor ad? 
                Expedita, reiciendis.
            </Text>

            <Box my="14">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/hij160NgmAw" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </Box>

            <Center>
                <Text mt="8" color="orange.600" fontSize="2xl"
                textAlign="center" maxW="600px" fontWeight="600">
                    Attempt quiz to show your competence  
                </Text>
            </Center>

            <Center mt="10" mb="20">
                <Link to="/quiz/questions">
                    <Button w="9rem" mr="4" size='lg'
                    colorScheme="orange" variant="solid">
                        Attempt Quiz
                    </Button>
                </Link>
            </Center>
       </Container> 
    );
}
 
export default QuizVideo;