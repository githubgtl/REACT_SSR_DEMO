import { hydrateRoot  } from 'react-dom/client';
import APP from './APP.js';
import React  from 'react';

const domNode = document.getElementById('root');
hydrateRoot(domNode,<APP />);