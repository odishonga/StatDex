import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 5%;
    width: 63vw;
    height: 53vh;
`

export const Watch = () => {
    
    return (
        <Container>
            <iframe
                src="https://player.twitch.tv/?channel=pokemon&parent=statdex.netlify.app"
                height="100%"
                width="100%"
                title='Pokemon Twitch livestream'
                allowFullScreen={true}>
            </iframe>
        </Container>
    )
}