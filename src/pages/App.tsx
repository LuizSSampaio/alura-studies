import React from "react";
import Form from "../components/form";
import List from "../components/list";
import { Row, Col, Grid } from "./StyleApp";

const App = () => {

    const tasks = [
        {
            title: "React1",
            time: "02:00:00",
        },
        {
            title: "React2",
            time: "02:30:00",
        },
        {
            title: "React3",
            time: "03:00:00",
        },
    ];

    return tasks.length > 0 ? (
        <Grid>
            <Row>
                <Col style={{flex: 1}}>
                    <Form />
                </Col>
                <Col style={{flex: 1}} >
                    <List tasks={tasks} />
                </Col>
            </Row>
        </Grid>
    ) : (
        <Grid>
            <Row>
                <Col style={{flex: 1}}>
                    <Form />
                </Col>
            </Row>
        </Grid>
    );
};

export default App;
