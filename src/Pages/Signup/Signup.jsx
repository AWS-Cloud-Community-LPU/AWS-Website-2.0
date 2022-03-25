import { useRef, useState } from "react";
import { 
    Box, 
    Center, 
    FormControl, 
    Input, 
    InputGroup,
    InputRightElement,
    Button, 
    Text, 
    Image, 
    Heading, 
    Alert, 
    AlertDescription, 
    Spinner 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import google from "../../Assets/google.png";
import { useAuth } from "../../Context/AuthContext";
import {  WarningIcon } from "@chakra-ui/icons";

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // ! For toogling password visibility
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    const { signup, loginWithGoogle } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSignInWithGoogle(e){
        e.preventDefault();
        try {
            await loginWithGoogle()
            } catch {
            console.log("error");
        }
    }

    async function handleSignup(e) {
        e.preventDefault();
        console.log("Inside handleSubmit");
        console.log(emailRef.current.value);
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match");
        }
    
        try {
          setError("");
          setLoading(true);
          signup(emailRef.current.value, passwordRef.current.value)
        } catch {
          setError("Failure, minimum 6 characters password is required");
        }
    
        setLoading(false);
    }

    return (
        <Box>
            <Center>

                <Box w={[600, 450]} mt="8" p={[5,10]} pb={[20]}>

                { error &&
                <Alert mb="5" textAlign="center" display="block" status="error">
                <WarningIcon mr="2" w={5} h={5} color="red.500" />
                <AlertDescription>{ error }</AlertDescription>
                </Alert>}

                <Heading textAlign="center" fontSize={{ base: "30px", md: "35px", lg: "40px" }} mt="2" mb="8">Create an account</Heading>

                <form onSubmit={ handleSignup }>
                <Button display="flex" w="100%"
                onClick={ handleSignInWithGoogle }>
                    {/* <Image w="7" src={ google } alt="" /> */}
                    <Text ml="3" mr="4">Continue with google</Text>
                </Button>

                <Text textAlign="center" my="3">Or continue with email</Text>

                <FormControl id="email">
                <Input ref={ emailRef } type="email" placeholder="Enter email" autoComplete="off" />
                </FormControl>

                <FormControl id="password" mt="4">
                    <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        ref={ passwordRef }
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id="confirm-password" mt="4">
                    <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        ref={ passwordConfirmRef }
                        type={show ? "text" : "password"}
                        placeholder="Confirm password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button type="submit" mt="8" mb="5" w="100%" colorScheme="orange" variant="solid">
                    Create account
                    { loading &&
                    <Spinner ml="3"  color="white" />
                    }
                </Button>

                </form>

                <Text textAlign="center">Already have an account ? 
                <Link to="/login">
                <Text ml="2" fontWeight="500" display="inline" color="blue">Login</Text>
                </Link>
                </Text>

                </Box>
            </Center>
        </Box>
    );
}
 
export default Signup;