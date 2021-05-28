import { useState } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleOnLogin = e => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col xs="12" sm="10" md="5" lg="5">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3" className="text-center">Welcome back.</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted text-center mt-3">Log into your account</CardSubtitle>
                            <Form className="mt-4" onSubmit={handleOnLogin}>
                                <FormGroup>
                                    <Label for="examplePassword">Email</Label>
                                    <Input onChange={handleOnChange} value={form.email} type="email" name="email" placeholder="Type your email" />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <Label for="examplePassword">Password</Label>
                                    <Input onChange={handleOnChange} value={form.password} type="password" name="password" placeholder="Type your password" />
                                </FormGroup>
                                <Button color="primary" className="mt-5" type="submit">Login</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;