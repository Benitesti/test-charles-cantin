import styles from "./Categories.module.css"

const Categories = ({ handleCategories, handleReset}) => {


return (
  <div className={styles.Categories}>
    <button onClick={event => handleCategories(event)} value="mariage">Mariage</button>
    <button onClick={event => handleCategories(event)} value="grossesse">Grossesse</button>
    <button onClick={event => handleCategories(event)} value="bebe">Bébé</button>
    <button onClick={event => handleCategories(event)} value="bapteme">Baptême</button>
    <button onClick={event => handleCategories(event)} value="famille">Famille</button>
    <button onClick={event => handleCategories(event)} value="portrait">Portrait</button>
    <button onClick={handleReset}>Toutes</button> 
  </div>
)}

export default Categories