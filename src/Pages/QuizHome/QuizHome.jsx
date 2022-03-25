import { Container, Heading, Text, Center, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const QuizHome = () => {
    return ( 
       <Container maxW="container.xl">
           <Heading mt="14" color="orange.400">
                AWSCCLPU Monthly Quiz
            </Heading>

            <Text mt="8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Vero, doloremque eum sit in beatae possimus magni dolor ad? 
                Expedita, reiciendis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Vero, doloremque eum sit in beatae possimus magni dolor ad? 
                Expedita, reiciendis.
            </Text>

            <Center>
                <Text mt="8" color="orange.600" fontSize="2xl"
                textAlign="center" maxW="600px" fontWeight="600">
                    What are you waiting for ? Register now and compete with others
                    and get a chance to win exciting prizes.
                </Text>
            </Center>

            <Center mt="10" mb="20">
                <Link to="/signup">
                    <Button w="9rem" mr="4" size='lg'
                    colorScheme="orange" variant="solid">
                        Register
                    </Button>
                </Link>
                <Link to="/quiz/video">
                    <Button w="9rem" mr="4" size='lg'
                    colorScheme="orange" variant="solid">
                        Participate
                    </Button>
                </Link>
            </Center>
       </Container> 
    );
}
 
export default QuizHome;