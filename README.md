# ReactTasks-width-MongoDB
 `https://mlab.com/`に登録、セットアップ
- そのあと、`create-react-app xxx`でプロジェクト作成
- 不要なファイル削除＋初期設定(svgとかcssとか諸々)
- `npm install --save muicss axios`をインストール
- App.jsを最初の状態にし、MyAppが出るようにする
```js
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          My App
      </div>
    );
  }
}

export default App;

//これでnpm startで表示できていればOK
```

## muicssを使えるようにする
- https://www.muicss.com/
- `import {Appbar, Container} from 'muicss/react';`
- public/index.htmlにcssを読み込み ※場所はReact/introduction
```html
<link href="http://cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
```
- Musicssに記載されているAppbarのサンプルをコピーして書き換え
```js
//App.js
import React, { Component } from 'react';
import {Appbar, Container} from 'muicss/react';
//Tasksのcomponentを作成して読み込む
import Tasks from './components/Tasks';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar>
          <Container>
            <table width="100%">
              <tbody>
                <tr>
                  <td className="mui--appbar-height"><h3>React Tasks</h3></td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Appbar>
        <br/>
        <Container>
        //Tasksのcomponentを作成して読み込む
          <Tasks />
        </Container>
      </div>
    );
  }
}

export default App;

```
- src/components/Tasks.jsxを作成
```js
import React, { Component } from 'react';
import {Panel} from 'muicss/react';


class Tasks extends Component {
  render() {
    return (
      <Panel>
        Tasks
      </Panel>
    );
  }
}

export default Tasks;

```
