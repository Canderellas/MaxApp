import '@maxhub/max-ui/dist/styles.css';
import {
    Flex,
    Avatar,
    Typography,
    Panel,
    Button,
    Container,
    Grid,
    IconButton,
    CellHeader,
    CellSimple, CellList, CellInput
} from "@maxhub/max-ui";
function App() {

    return (
        <Panel
            mode="secondary"
        >
            <Flex
                direction="column"
                gap={24}
            >
                <Container>
                    <Flex
                        direction="column"
                        align="center"
                        gap={16}
                    >
                        <Avatar.Container
                            size={80}
                            onlineStatus
                        >
                            <Avatar.Image
                                fallback="ME"
                                src="..."
                            />
                        </Avatar.Container>

                        <Flex

                            direction="column"
                            align="center"
                        >
                            <Typography.Headline variant="large-strong">Vadim Tregubenko</Typography.Headline>
                            <Typography.Body variant="small">1 подписчик</Typography.Body>
                        </Flex>

                        <Grid
                            cols={4}
                            gap={8}
                        >
                            <Flex direction="column" align="center" gap={4}>
                                <IconButton
                                    aria-label="Уведомления"
                                    onClick={() => {}}
                                    variant="secondary"
                                >

                                </IconButton>
                                <Typography.Label variant="small">Уведомл.</Typography.Label>
                            </Flex>
                            ...
                        </Grid>
                    </Flex>
                </Container>

                <Flex
                    direction="column"
                    gap={16}

                >
                    <CellList
                        mode="island"
                        header={<CellHeader>О себе</CellHeader>}
                    >
                        <CellSimple
                            height="compact"
                            title="Frontend engineer 👨‍💻"
                        />
                    </CellList>
                    ...
                </Flex>

                <CellList
                    mode="island"
                    header={<CellHeader>Настройки</CellHeader>}
                >
                    <CellInput before="Статус" placeholder="Укажите статус" />
                    ...
                </CellList>

                <Container>
                    <Flex gap={8}>
                        <Button
                            size="large"
                            variant="secondary"
                            stretched
                        >
                            Выйти
                        </Button>
                        <IconButton
                            size="large"
                            variant="secondary"
                        >
                        </IconButton>
                    </Flex>
                </Container>
            </Flex>
        </Panel>
    )
}

export default App
