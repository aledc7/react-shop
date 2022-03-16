import styled from 'styled-components';
import { BsStackOverflow } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';

import {
    GitHub,
    LinkedIn,
    Twitter,
    Room,
    Phone,
    MailOutline,
} from '@mui/icons-material';
import { mobile } from '../responsive';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection: "column"})}
`;

const Logo = styled.h1` 

`;

const Description = styled.p` 
    margin: 20px 0px;
`;

const SocialContainer = styled.div` 
    display:flex;
`;

const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: ${props => props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor:pointer;
`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding: 20px;
`;

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}
`;


const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Paiment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Ale DC</Logo>
                <Description>Frontend Engineer</Description>
                <SocialContainer>
                    <Tooltip title="Linkedin">
                        <SocialIcon color="#55ACEE" onClick={() => openInNewTab('https://www.linkedin.com/in/aledc7/')}>
                            <LinkedIn />
                        </SocialIcon>
                    </Tooltip>

                    <Tooltip title="Github">
                        <SocialIcon color="#000" onClick={() => openInNewTab('https://github.com/aledc7')}>
                            <GitHub />
                        </SocialIcon>
                    </Tooltip>

                    <Tooltip title="Stack Overflow">
                        <SocialIcon color="#f48024" onClick={() => openInNewTab('https://stackoverflow.com/users/10220740/ale-dc')}>
                            <BsStackOverflow />
                        </SocialIcon>
                    </Tooltip>

                    <Tooltip title="Twitter">
                        <SocialIcon color="#1DA1F2" onClick={() => openInNewTab('https://twitter.com/ing_aledc')}>
                            <Twitter />
                        </SocialIcon>
                    </Tooltip>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{ marginRight: "10px" }} /> Rioja 2776, Rosario, Argentina - CP: (2000) </ContactItem>
                <ContactItem> <Phone style={{ marginRight: "10px" }} /> +54 3415498622</ContactItem>
                <ContactItem> <MailOutline style={{ marginRight: "10px" }} /> ing.aledc@gmail.com</ContactItem>
                <Paiment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}

export default Footer
