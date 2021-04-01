import "index.css"

import LocalTime from "local-time"
LocalTime.start()

import feather from "feather-icons"
feather.replace();

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

// Import the React Components
const components = require.context('./components', true, /.js$/)
components.keys().forEach(components)
