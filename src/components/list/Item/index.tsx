import React from "react";
import Button from "../../Button";
import Watch from "../../../Watch";
import { ButtonContainer, Col, ListItem, Row, Title } from "./StyledItem";

interface ItemProps {
    title: string;
    time: string;
}

const Item = (props: ItemProps) => {
    return (
        <ListItem>
            <Title>{props.title}</Title>
            {/* <span>{props.time}</span> */}
            <Watch time={props.time}></Watch>
            <ButtonContainer>
                <Row>
                    <Col style={{flex: 6}}>
                        <Button fullWidth>Play</Button>
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
