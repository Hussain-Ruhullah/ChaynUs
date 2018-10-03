import React from 'react';

import { HEADLINE, DESCRIPTION } from '../constants/text';

const Intro = ({ title }) => (
    <div className="tapp__intro">
        <h1 className="headline">
            {title}
        </h1>
        <p>
            {DESCRIPTION}
        </p>
    </div>
);

export default Intro;
