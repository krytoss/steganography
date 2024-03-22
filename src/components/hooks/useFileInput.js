const useFileInput = (setImageData) => {
    const type = 'file'
    const onChange = (e) => {
        setImageData(null)
        const file = e.target.files[0];
        const reader = new FileReader();

        console.log(file)

        reader.addEventListener(
        "load",
        () => {
            // convert image file to base64 string
            setImageData(reader.result)
        },
        false,
        );

        if (file) {
        reader.readAsDataURL(file);
        }
    }

    return {
        type,
        onChange
    }
}

export default useFileInput