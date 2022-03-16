import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items:center;
    justify-content: space-between;
    font-size: 14px;
    font-weight:500;
`;

const Announcement = () => {
    return (
        <Container>
            <p></p>
            <p>Now on The Last💥</p>
            <p style={{marginRight:100}}>Toll-free </p>
            
        </Container>
    )
}

export default Announcement;
