import content from "../content/galerie.md"

import Layout from "../components/Layout/Layout"
import Gallery from "../components/Galerie/Gallery"

const { attributes: { title, pictures }} = content

const GalerieView = props => (
  <Layout>
    <h1>{title}</h1>
    <Gallery pictures={pictures}/>
  </Layout>)

export default GalerieView