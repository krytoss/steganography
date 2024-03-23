import Input from "./elements/Input"
import Textarea from "./elements/Textarea"
import Button from "./elements/Button"
import Canvas from "./elements/Canvas"
import { useState, useEffect } from "react"
import useFileInput from "./hooks/useFileInput"

const Encode = ({ loadImage }) => {

    const canvasId = 'encodeCanvas'
    const [ imageData, setImageData ] = useState(null)
    const [ message, setMessage ] = useState('')
    const [ scannedData, setScannedData ] = useState(null)
    const [ newImgData, setNewImgData ] = useState(null)
    const [ newImg, setNewImg ] = useState(null)
    const {...input} = useFileInput(setImageData)

    const encodeMessage = () => {
        if (message) {
            let encodedImgData = scannedData
            const msgLength = message.length
            const bin = ("00000000" + msgLength.toString(2)).slice(-8)
            if (scannedData) {
                for (let i = 0; i < 8; i++) {
                    const val = (scannedData.data[i] % 2) === 0 ? scannedData.data[i] : scannedData.data[i] - 1
                    encodedImgData.data[i] = (bin[i] === '0') ? val : val + 1
                }
                for (let i = 0; i < msgLength; i++) {
                    const character = message[i]
                    const binChar = ("00000000" + character.charCodeAt().toString(2)).slice(-8)
                    for (let j = 0; j < 8; j++) {
                        const nth = ((i + 1) * 8) + 1 + j
                        const val = scannedData.data[nth] % 2 === 0 ? scannedData.data[nth] : scannedData.data[nth] - 1
                        encodedImgData.data[nth] = binChar[j] === '0' ? val : val + 1
                    }
                }
            }
            setNewImgData(encodedImgData)
        } else {
            alert("You need to enter a message!")
        }
    }

    useEffect(() => {
        const canvas = document.getElementById(canvasId + '-generated')
        const ctx = canvas.getContext('2d')
        if (newImgData) {
            canvas.width = newImgData.width
            canvas.height = newImgData.height
            ctx.putImageData(newImgData, 0, 0)
            setNewImg(canvas.toDataURL())
        } else {
            
        }
    }, [ newImgData ])

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
            setNewImg(null)
            setNewImgData(null)
        }
    }, [ imageData, setNewImg, setNewImgData ])

    return (
        <div id='encode'>
            <div className="grid grid-cols-3 gap-4 flex items-center justify-center">
                <div>
                    <Canvas id={canvasId + '-uploaded'} />
                    { imageData && <img alt='Message carrier' src={imageData} />}
                    { imageData && <Textarea placeholder='Enter your message to be encoded' onChange={ setMessage } value={ message } />}
                    <Input {...input} />
                </div>
                <div>
                    { imageData && <Button value='Encode the message' onClick={ encodeMessage } />}
                </div>
                <div>
                    <Canvas id={canvasId + '-generated'} />
                    {
                        newImg &&
                        <>
                            <img alt='Encoded message' src={newImg} />
                            <a download='encoded.png' href={newImg}>Download</a>
                        </>
                    }
                </div>
            </div>
        </div>
    )

}

export default Encode