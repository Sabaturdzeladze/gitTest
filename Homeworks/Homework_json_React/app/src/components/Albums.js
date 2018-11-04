import React from 'react';

const Albums = (props) => {
    let data = [];
    if (props.length < props.data.length) {
        data = props.data.slice(0, props.length)
    }
    return (
        <div>
            {data.map((album) => (
                <div className="albums" key={album.id}>
                    <h2>Album id: {album.id}</h2>
                    <p>Album title: {album.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Albums;