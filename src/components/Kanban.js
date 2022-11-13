import { Box, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import AddList from './AddList';
import { KanbanHeader, KanbanListContainer, StyledBackground } from './CommonStyled';
import List from './List';

const Kanban = () => {

    const kanban = useSelector(state => state.app);
    console.log('kanban')
    console.log(kanban)

    const onDragEnd = (result) => {
        console.log(result);
    }
    return (
        <StyledBackground maxWidth={false}>
            <KanbanHeader>Draggale Kanban</KanbanHeader>
            {/* <Container maxWidth={false}> */}
                <Stack gap={2}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable
                            droppableId="list"
                            type="list"
                            direction="horizontal"
                        >
                            {(provided) => (
                                <KanbanListContainer ref={provided.innerRef}>
                                    {kanban?.lists?.map((listItem, index) => (
                                        <List key={listItem.name} data={listItem}/>
                                    ))}
                                    {provided.placeholder}

                                    <AddList/>
                                </KanbanListContainer>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Stack>
            {/* </Container> */}
        </StyledBackground>
    );
};

export default Kanban;
