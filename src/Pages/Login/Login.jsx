import { useState, useRef } from "react";
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
import { Link, useHistory } from "react-router-dom";
// import google from "../../Assets/google.png";
import { useAuth } from "../../Context/AuthContext";
import {  WarningIcon } from "@chakra-ui/icons";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    // ! For toogling password visibility
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const { login, loginWithGoogle } = useAuth();
    const [error, setError ] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSignInWithGoogle(e){
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await loginWithGoogle()         
            } catch {
            setError("Failure, minimum 6 characters password is required");
            console.log("error");
        }
    }

    async function handleLogin(e) {
        e.preventDefault();
        console.log("Indide handle login");
    
        try {
          setError("");
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/");
        } catch {
          setError("Incorrect email or password");
        }
    
        setLoading(false);
    }


    return (
        <Box>
            <Center>

                <Box w={[600, 450]} mt="12" p={[5,10]} pb={[20]}>

                { error &&
                <Alert mb="5" textAlign="center" display="block" status="error">
                <WarningIcon mr="2" w={5} h={5} color="red.500" />
                <AlertDescription>{ error }</AlertDescription>
                </Alert>}

                <Heading textAlign="center" fontSize={{ base: "30px", md: "35px", lg: "40px" }} mt="3" mb="8">
                    Login to continue
                </Heading>

                <form onSubmit={ handleLogin }>
                <Button display="flex" w="100%" onClick={ handleSignInWithGoogle }>
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

                <Button type="submit" mt="8" mb="5" w="100%" colorScheme="orange" variant="solid">
                    Continue
                    { loading &&
                    <Spinner ml="3"  color="white" />
                    }
                </Button>

                </form>

                <Text mb="10" textAlign="center">Create an account ? 
                <Link to="/signup">
                <Text ml="2" fontWeight="500" display="inline" color="blue">Signup</Text>
                </Link>
                </Text>

                </Box>
            </Center>
        </Box>
    );
}
 
export default Login;