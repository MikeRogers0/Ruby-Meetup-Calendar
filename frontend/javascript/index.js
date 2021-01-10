import "index.css"

import LocalTime from "local-time"
LocalTime.start()

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)
