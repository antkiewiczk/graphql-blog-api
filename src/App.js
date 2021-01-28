import React from "react";

import { Box, Card, Heading, Text, Button } from "rebass";

import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>dupa</Box>
        <Card>dupa 2</Card>
        <Heading fontSize={[5, 6, 7]} color="primary">
          Hello
        </Heading>
        <Text>dupa 4</Text>
        {/* <Button onClick={getFeed}>Click me</Button> */}
        <Feed />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
