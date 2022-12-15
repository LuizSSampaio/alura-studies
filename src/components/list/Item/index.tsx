import React, { useState } from "react";
import Button from "../../Button";
import Watch from "../../../Watch";
import { ButtonContainer, Col, ListItem, Row, Title } from "./StyledItem";

interface ItemProps {
    title: string;
    time: string;
}

const Item = (props: ItemProps) => {
    const [time, setTime] = useState(props.time);
    // const [status, setStatus] = useState("stop");

    const play = () => {
        // setStatus("play");
        setTimeout(() => {
            setTime("00:00:00");                
        }, 1000);
    };

    return (
        <ListItem>
            <Title>{props.title}</Title>
            {/* <span>{props.time}</span> */}
            <Watch time={time}></Watch>
            <ButtonContainer>
                <Row>
                    <Col style={{flex: 6}}>
                        <Button onClick={() => play()} fullWidth>Play</Button>
                    </Col>
                    <Col style={{flex: 1}}>
                        <Button trash>D</Button>
                    </Col>
                </Row>
            </ButtonContainer>
        </ListItem>
    );
};

export default Item;
