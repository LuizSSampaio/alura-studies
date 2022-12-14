import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import { Items } from "../GlobalInterfaces";
import { Row, Col, Grid } from "./StyleApp";

const App = () => {
    const [tasks, setTasks] = useState([{
        title: "a",
        time: "00:30:00"
    }]);

    const newTask = (task: Items) => {
        setTasks([...tasks, task]);
    };

    return tasks.length > 0 ? (
        <Grid>
            <Row>
                <Col style={{ flex: 1 }}>
                    <Form addTask={(task: Items) => newTask(task)} />
                </Col>
                <Col style={{ flex: 1 }}>
                    <List tasks={tasks} />
                </Col>
            </Row>
        </Grid>
    ) : (
        <Grid>
            <Row>
                <Col style={{ flex: 1 }}>
                    <Form addTask={(task: Items) => newTask(task)} />
                </Col>
            </Row>
        </Grid>
    );
};

export default App;
