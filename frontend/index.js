import React from 'react';
import { render } from 'react-dom';

import TvShow from './components/TvShow';

render(<div>
    <TvShow title="Mr. Robot"></TvShow>
</div>, document.querySelector('#app'));