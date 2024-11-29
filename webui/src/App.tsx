import { useState, useContext } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Grommet,
  grommet,
  Header,
  Heading,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import { deepMerge } from "grommet/utils";
import { Moon, Sun } from "grommet-icons";
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import { acme } from './theme'
console.log({ x: 1, grommet: { ...grommet } })
const theme = deepMerge(grommet, acme)
import Test from './components/Test'

const AppBar = (props: Record<string, any>) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    {...props}
  />
);

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <Provider store={store}>
      <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
        <Page>
          <AppBar>
            <Text size="large">PlanitX</Text>
            <Button
              a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              icon={dark ? <Moon /> : <Sun />}
              onClick={() => setDark(!dark)}
              tip={{
                content: (
                  <Box
                    pad="small"
                    round="small"
                    background={dark ? "dark-1" : "light-3"}
                  >
                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  </Box>
                ),
                plain: true,
              }}
            />
          </AppBar>
          <PageContent>
            <PageHeader title="Welcome to Grommet!" />
            <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
              <CardTemplate title={"Card 1"} />
              <CardTemplate title={"Card 2"} />
              <CardTemplate title={"Card 3"} />
            </Grid>
            <Test />
          </PageContent>
        </Page>
      </Grommet>
    </Provider>
  );

}

const CardTemplate = ({ title }: { title: string }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Card>
      <CardHeader pad="medium">
        <Heading level={2} margin="none">
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad="medium">
        <Paragraph maxLines={size === "small" ? 3 : undefined}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porttitor non nulla ac vehicula. Aliquam erat volutpat. Mauris auctor
          faucibus est at mattis. Aliquam a enim ac nisi aliquam consectetur et
          ac velit. Mauris ut imperdiet libero.
        </Paragraph>
      </CardBody>
      <CardFooter pad="medium" background="background-contrast">
        Footer
      </CardFooter>
    </Card>
  );
};