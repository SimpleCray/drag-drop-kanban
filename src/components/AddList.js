import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, ClickAwayListener, Icon, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import useForm from '../hooks/useForm';
import { setKanban } from '../redux/slices/appSlice';
import { Close, Add } from '@mui/icons-material';
import { CardContainer } from './CommonStyled';

const AddList = () => {
    const dispatch = useDispatch();
    const kanban = useSelector((state) => state.app.board);

    const [formOpen, setFormOpen] = useState(false);
    const { form, handleChange, resetForm } = useForm({
        title: '',
    });

    // useEffect(() => {
    //     if (!formOpen) {
    //         resetForm();
    //     }
    // }, [formOpen, resetForm]);

    function handleOpenForm() {
        setFormOpen(true);
    }

    function handleCloseForm() {
        setFormOpen(false);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        dispatch(
            setKanban({
                lists: kanban.lists.push({
                    title: form.title,
                    cards: [],
                }),
            })
        );
        handleCloseForm();
    }

    function isFormInvalid() {
        return form.title.length === 0;
    }

    return (
        <CardContainer>
            {formOpen ? (
                <ClickAwayListener onClickAway={handleCloseForm}>
                    <form onSubmit={handleSubmit}>
                        <Stack gap={1}>
                        <TextField
                            required
                            fullWidth
                            variant='outlined'
                            label='List title'
                            autoFocus
                            name='title'
                            value={form.title}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleCloseForm}>
                                            <Close />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button variant='contained' color='secondary' type='submit' disabled={isFormInvalid()}>
                            Add
                        </Button>
                        </Stack>
                    </form>
                </ClickAwayListener>
            ) : (
                <Button onClick={handleOpenForm}>
                    <Add />
                    Add a list
                </Button>
            )}
        </CardContainer>
    );
};

export default AddList;
