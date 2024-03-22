import Input from "./elements/Input"
import Textarea from "./elements/Textarea"

const Encode = ({ imageData, loadImage }) => {

    return (
        <div id='encode'>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    { imageData && <img alt='Uploaded image' src={ imageData } />}
                    { imageData && <Textarea />}
                    <Input loadImage={ loadImage } type='file' />
                </div>
            </div>
        </div>
    )

}

export default Encode