import { Grid } from '@mantine/core';
import NewCard from '../cards/Card';


export default function Demo() {
    return (

        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col span={2}>
                <NewCard title="Demo available" text="Download the Demo!" />
            </Grid.Col>

            <Grid.Col span={2}>
                <NewCard title="Test Card" text="new Card" />
            </Grid.Col>
        </Grid >
    );
}
