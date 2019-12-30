import React from 'react';
import { Prediction } from './AddModal.styles';

function SearchPrediction({ id, image, title, onSelect }) {
    return (
        <Prediction
            onClick={e => {
                e.stopPropagation();
                onSelect(id);
            }}
        >
            {image && <img src={image.small || image.medium || image.original} />}
            {/* show a transparent png so it just shows css bg */}
            {!image && (
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" />
            )}
            {title}
        </Prediction>
    );
}

export default SearchPrediction;
