import Input from "./elements/Input"
import Textarea from "./elements/Textarea"
import Button from "./elements/Button"
import Canvas from "./elements/Canvas"
import { useState, useEffect } from "react"

const Encode = ({ imageData, loadImage }) => {

    const canvasId = 'encode'
    const [ message, setMessage ] = useState(null)

    useEffect(() => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.getElementById(canvasId)
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth / 3
        canvas.height = img.height * ( canvas.width / img.width )
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      }
      img.src = imageData
    }, [imageData])

    return (
        <div id='encode'>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    { imageData && <Canvas id={canvasId} /> }
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