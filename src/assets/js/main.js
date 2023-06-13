
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;


import "./alert.js"
import "./collapse.js"

// Import all of prism's JS
import "../../../node_modules/prismjs/prism";
import "../../../node_modules/prismjs/plugins/toolbar/prism-toolbar";
import "../../../node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

import "../../../node_modules/pace-js/pace.js";


import "../../../node_modules/prismjs/plugins/toolbar/prism-toolbar.css"
import "../css/main.css";