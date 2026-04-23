import React from 'react'
import {  getPosts } from '../../database/post'
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import {handlePost} from '../action/action'

const ServerActionPage = async () => {
    const posts =await getPosts()
    // console.log(posts)
    
    return (
        <div>
            <div className='mx-20 my-10'>
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
                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary">
                                                    Cancel
                                                </Button>
                                                <Button type='submit' slot="close">ADD POST</Button>
                                            </Modal.Footer>
                                        </form>
                                    </Surface>
                                </Modal.Body>

                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
            <div className='grid grid-cols-2 gap-20 mx-20'>
                {
                    posts.map((post,index) => <div key={index} className='border rounded-2xl p-5'>
                        <h2 className='text-3xl font-bold text-green-300'>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ServerActionPage