import Input from "./elements/Input"
import Textarea from "./elements/Textarea"
import Button from "./elements/Button"
import { useState } from "react"

const Encode = ({ imageData, loadImage }) => {

    const [ message, setMessage ] = useState(null)

    return (
        <div id='encode'>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    { imageData && <img alt='Message carrier' src={ imageData } />}
                    { imageData && <Textarea placeholder='Enter your message to be encoded' onChange={ setMessage } value={ message } />}
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