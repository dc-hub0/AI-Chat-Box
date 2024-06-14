// src/config/uploadImage.js

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('YOUR_UPLOAD_ENDPOINT_URL', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }

    const data = await response.json();
    console.log('Upload response data:', data); // Debugging: log the response data
    return data.imageUrl; // Assuming the server responds with the uploaded image URL
};

export default uploadImage;
