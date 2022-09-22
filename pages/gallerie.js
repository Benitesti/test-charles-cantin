import Layout from "../components/Layout"
import Image from "next/image"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '/images/uploads/')] = r(item); });
  return images;
}

const pictures = Object.keys(importAll(require.context('../public/images/uploads', false, /\.(png|jpe?g)$/)))

const PictureGrid = (props) => {
  return (
    <div>
    {pictures.map((img, i) => (
      <div key={i}>
        <Image src={img} width="300" height="300" />
      </div>
    ))}
    </div>
  )
}
  

 

const GallerieView = props => <Layout><PictureGrid /></Layout>

export default GallerieView