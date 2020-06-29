// Menggunakan class
// import React, {Component} from 'react'

// class ImagesList extends Component {
//     render (){
//         return (
//             <div>
//                 <h1 className='text-center my-3'>Images List Component</h1>
//             </div>
//         )
//     }
// }

import React from 'react'

let ImagesList = (props) => {

    // props.images = [{ alt_description, description, urls }, { alt_description, description, urls }]
    // image =  {alt_description, description, urls }
    let results = props.images.map((image) => {
        return (
            <img
                className="card"
                src={image.urls.regular}
                key={image.id}
                alt={image.alt_description}
                // title={image.}
            />
        )
    })

    return(
        <div className="card-columns">
            {results}
        </div>
    )
}
export default ImagesList