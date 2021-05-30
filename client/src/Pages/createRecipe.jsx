import { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { useAtom } from 'jotai'
import { useHistory } from 'react-router-dom'

import { tokenAtomPersisted } from '../store/tokenAtom'
import CreateRecipeHandler from '../handlers/createRecipe'

const CreateRecipe = () => {
    const [token] = useAtom(tokenAtomPersisted)
    const { push } = useHistory()
    const [form, setForm] = useState({
        title: '',
        description: '',
        content: '',
        image: ''
    })
    const [categories, setCategories] = useState([])
    const handleOnChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSelect = selectedItems => {
        const selectedCategories = []
        for (let i = 0; i < selectedItems.length; i++) {
            selectedCategories.push(selectedItems[i].value)
        }
        setCategories(selectedCategories)
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const data = await CreateRecipeHandler(form, categories, token)
        if (data.newpost !== null) {
            push('/')
        }
    }
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 72px)'}}>
                <Col xs="12" md="6">
                    <h3 className="text-center text-muted mb-3">New Recipe</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input onChange={handleOnChange} value={form.title} type="text" name="title" placeholder="Recipe name." />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label>Description</Label>
                            <Input onChange={handleOnChange} value={form.description} type="textarea" name="description" />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label>Categories</Label>
                            <Input onChange={(e) => handleSelect(e.target.selectedOptions)} value={categories} type="select" name="categories" multiple>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label>Content</Label>
                            <Input onChange={handleOnChange} value={form.content} type="textarea" name="content" />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <Label for="exampleEmail">Image URL</Label>
                            <Input onChange={handleOnChange} value={form.image} type="url" name="image" placeholder="Image link." />
                        </FormGroup>
                        <Button className="mt-4" color="success">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateRecipe;
