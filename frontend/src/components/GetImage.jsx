import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageGallery() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        // Fetch image data from Kintone
        axios.get('https://momain.kintone.com/k/v1/records.json?app=1')
            .then(response => {
                // Extract image URLs from the response data
                const urls = response.data.records.map(record => record.photo.value);
                setImageUrls(urls);
            })
            .catch(error => {
                console.error('Error fetching image data:', error);
            });
    }, []);

    return (
        <div>
            {/* Render images */}
            {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

export default ImageGallery;
