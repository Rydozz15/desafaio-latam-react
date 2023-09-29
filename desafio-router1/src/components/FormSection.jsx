import { Button, Form } from "react-bootstrap";

function FormSection() {
    return(
        <>
            <Form className="d-flex flex-column justify-content-center">
            <Form.Group className="d-flex flex-column align-items-center mb-3">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-center mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Escribe lo que quieras :)" />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-center">
                <Button variant="danger" type="submit">
                    Enviar
                </Button>
            </Form.Group>
            </Form>
        </>
    )
}

export default FormSection