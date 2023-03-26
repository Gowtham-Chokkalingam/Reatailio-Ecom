import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, ButtonGroup, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { userLogoutAction } from "../Redux/Actions/userActions";
import { GoHome } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [path, setPath] = useState("");

  //   const { loginStatus, token } = useSelector((state) => state.UserLogin);
  const loginStatus = false;

  const handleLogout = (e) => {
    e.preventDefault();
    //   dispatch(userLogoutAction());
  };
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <Flex
      w={"100%"}
      flexWrap={"wrap"}
      height={"auto"}
      justify={"center"}
      alignItems="center"
      textColor={"black"}
      gap="2"
      py={4}
      px={6}
      bg={"#2146C7"}
    >
      <Box width={"80%"} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
        <Button
          leftIcon={<GoHome />}
          colorScheme={path === "/" ? "yellow" : "red"}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          colorScheme={path === "/Todo" ? "yellow" : "red"}
          onClick={() => {
            navigate("/Todo");
          }}
        >
          Todo
        </Button>

        {loginStatus ? (
          <Button colorScheme="teal" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          <Button
            colorScheme={path === "/Login" ? "yellow" : "red"}
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login
          </Button>
        )}
        {!loginStatus && (
          <Button
            colorScheme={path === "/Signup" ? "yellow" : "red"}
            onClick={() => {
              navigate("/Signup");
            }}
          >
            Signup
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default NavBar;
