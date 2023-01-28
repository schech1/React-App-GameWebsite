import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function NewCard(props) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="./images/screen1.png"
                    height={160}
                    alt="Game"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.title}</Text>
                <Badge color="pink" variant="light">
                    New
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                {props.text}
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Show me more
            </Button>
        </Card>
    );
}




