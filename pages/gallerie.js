import content from "../content/gallerie.md"

import Layout from "../components/Layout/Layout"
import Gallery from "../components/Gallerie/Gallery"

const { attributes: { title, pictures }} = content

const GallerieView = props => (
  <Layout>
    <h1>{title}</h1>
    <Gallery pictures={pictures}/>
  </Layout>)

export default GallerieView