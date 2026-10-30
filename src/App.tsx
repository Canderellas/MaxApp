import '@maxhub/max-ui/dist/styles.css';
import {
    MaxUI,
    Flex,
    Avatar,
    Typography,
    Panel,
    Button,
    Container,
    Grid,
    IconButton,
    CellHeader,
    CellSimple, CellList, CellInput,
} from "@maxhub/max-ui";
function App() {

    return (
        <MaxUI>
            <Panel
                className="page"
                mode="secondary"
            >
                <Flex
                    direction="column"
                    gap={24}
                >
                    <Container className="header">
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
                                className="details"
                                direction="column"
                                align="center"
                            >
                                <Typography.Headline variant="large-strong">Vadim Tregubenko</Typography.Headline>
                                <Typography.Body variant="small" className="subsLabel">1 подписчик</Typography.Body>
                            </Flex>

                            <Grid
                                className="actions"
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
                        className="body"
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

                    <Container className="actions">
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
                    <Avatar.Container>
                        <Avatar.Icon>
                        </Avatar.Icon>
                    </Avatar.Container>
                </Flex>
            </Panel>
        </MaxUI>
    )
}

export default App
