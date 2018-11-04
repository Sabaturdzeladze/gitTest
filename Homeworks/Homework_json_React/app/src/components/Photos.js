import React from 'react';

const Photos = (props) => {
    let data = [];
    if (props.length < props.data.length) {
        data = props.data.slice(0, props.length)
    }
    return (
        <div>
            {data.map((photo) => (
                <div className="photos" key={photo.id}>
                    <h2><b>Photo title:</b> {photo.title}</h2>
                    <a href={photo.url} target="__blank">Go to Photo</a>
                </div>
            ))}
        </div>
    )
}

export default Photos;