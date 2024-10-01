import styles from "./style.module.scss";

export default function ImageNav({ images, title }) {

 
  return (
    <div>
      <h2 className={styles.titleGallery}>{title}</h2>
      <div className={styles.gallery} >
          {images.map((image, index)=>
            <img  key={image.id} src={image.src} />
          )}
        </div>
      </div>
  );
}
