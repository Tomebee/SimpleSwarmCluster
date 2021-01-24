import React from 'react';
import styled from 'styled-components';
import AsyncComponent from './common/AsyncComponent';
import axios from 'axios';
import Loader from './components/Loader';
import Button from './components/Button';
import GlobalStyle from './theme/GlobalStyle';
import Code from './components/Code';

const Page = styled.div``;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 10rem;
`;

class App extends AsyncComponent {
  state = {
    calling: false,
    response: null
  };

  callApi = async () => {
    await this.setStateAsync({ calling: true, response: null });

    const responseData = await new Promise(resolve => {
      setTimeout(async () => {
        const data = (await axios.get('http://localhost:9999/api')).data;
        resolve(data);
      }, 500);
    });

    this.setState({
      calling: false,
      response: String(responseData)
    });
  };

  render() {
    const { calling, response } = this.state;
    return (
      <>
        <GlobalStyle />
        <Page>
          <Content>
            <h1>SPA in container!!</h1>
            <Button onClick={this.callApi}
              disabled={calling}>Talk with API</Button>
            <Loader visible={calling} />
            {response && <Code>{response}</Code>}
          </Content>
        </Page>
      </>
    );
  }
}

export default App;
