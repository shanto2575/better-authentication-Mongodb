import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const Form = ({handlePost}) => {
    return (
        <div>
            <Modal>
                <Button variant="secondary">Add Posts</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Contact Us</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and well get back to you. The modal adapts automatically
                                    when the keyboard appears on mobile.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form action={handlePost} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="title" type="text">
                                            <Label>Tittle</Label>
                                            <Input placeholder="Enter your title" />
                                        </TextField>
                                        <TextField className="w-full" name="description" type="text">
                                            <Label>Description</Label>
                                            <Input placeholder="Enter your Description" />
                                        </TextField>
                                    </form>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close">Send Message</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

        </div>
    )
}

export default Form
