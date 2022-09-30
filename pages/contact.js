import content from "../content/contact.md"

import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact/Contact"

const { attributes: { titre, corps }} = content

console.log(content)

const ContactView = props => <Layout><Contact titre={titre} corps={corps}/></Layout>

export default ContactView