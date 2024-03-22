import Input from "./elements/Input"
import Textarea from "./elements/Textarea"
import Button from "./elements/Button"

const Encode = ({ imageData, loadImage }) => {

    return (
        <div id='encode'>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    { imageData && <img alt='Uploaded image' src={ imageData } />}
                    { imageData && <Textarea />}
                    <Input loadImage={ loadImage } type='file' />
                </div>
                <div>
                    { imageData && <Button value='Encode the message' />}
                </div>
                <div>

                </div>
            </div>
        </div>
    )

}

export default Encode