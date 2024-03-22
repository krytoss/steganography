import Input from "./elements/Input"

const Encode = ({ imageData, loadImage }) => {

    return (
        <div id='encode'>
            { imageData && <img alt='Uploaded image' src={ imageData } />}
            <Input loadImage={ loadImage } type='file' />
        </div>
    )

}

export default Encode