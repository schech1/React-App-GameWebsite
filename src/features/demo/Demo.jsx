import { SimpleGrid, Container } from '@mantine/core';
import NewCard from '../cards/Card';


export default function Demo() {
    return (
        <Container size="xs" px="xs">

            <SimpleGrid cols={2} verticalSpacing="xl">
                <NewCard title="Demo available" text="Download the Demo!" />
                <NewCard title="Test Card" text="new Card" />
            </SimpleGrid>

        </Container>
    );
}
