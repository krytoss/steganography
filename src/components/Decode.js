import { useState, useEffect, useCallback } from "react"
import useFileInput from "./hooks/useFileInput"
import Canvas from "./elements/Canvas"
import Input from "./elements/Input"
import Button from "./elements/Button"

const Decode = () => {

    const canvasId = 'decodeCanvas'
    const [ imageData, setImageData ] = useState(null)
    const {...input} = useFileInput(setImageData)
    const [ scannedData, setScannedData ] = useState(null)
    const [ message, setMessage ] = useState(null)

    const decodeMessage = useCallback(() => {
        if (scannedData) {
            let msg = '',
                msgLengthBin = '',
                msgLength
            for (let i = 0; i < 8; i++) {
                msgLengthBin += scannedData.data[i] % 2
            }
            msgLength = parseInt(msgLengthBin, 2)
            for (let i = 0; i < msgLength; i++) {
                const firstIndex = (i+1) * 8 + 1
                let charBin = ''
                for (let j = 0; j < 8; j++) {
                    charBin += scannedData.data[firstIndex + j] % 2
                }
                msg += String.fromCharCode(parseInt(charBin, 2))
            }
            setMessage(msg)
        } else {
            setMessage(null)
        }
    }, [ setMessage, scannedData ])

    useEffect(() => {
        if (imageData) {
            const img = new Image()
            img.onload = () => {
                const canvas = document.getElementById(canvasId + '-uploaded')
                const ctx = canvas.getContext('2d')
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
                setScannedData(ctx.getImageData(0, 0, canvas.width, canvas.height))
            }
            img.src = imageData
        } else {
            setMessage(null)
        }
    }, [ imageData ])

    return (
        <div id='encode'>
            <div className="grid grid-cols-3 gap-4 flex items-center justify-center">
                <div>
                    <Canvas id={canvasId + '-uploaded'} />
                    { imageData && <img alt='Message carrier' src={imageData} />}
                    <Input {...input} />
                </div>
                <div>
                    { imageData && <Button value='Decode the message' onClick={ decodeMessage } />}
                </div>
                <div>
                    <p>
                        { message }
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Decode