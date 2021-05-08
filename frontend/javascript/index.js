import 'index.css'

import LocalTime from 'local-time'
LocalTime.start()

// Import the React Components
const components = require.context('./components', true, /.js$/)
components.keys().forEach(components)

var Turbolinks = require("turbolinks")
Turbolinks.start()
