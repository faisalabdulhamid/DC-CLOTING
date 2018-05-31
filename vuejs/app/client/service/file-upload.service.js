import * as axios from 'axios';

// const BASE_URL = '/';

function upload(formData) {
    const url = `/client/desain/upload`;
    return axios.post(url, formData, {
    	headers: {
    		Authorization: `Bearer ${localStorage.getItem('login_user')}`
    	}
    })
        // get data
        // .then(x => x.data)
        .then(x => Object.assign({}, {url: x.data}))
        // add url field
        // .then(x => x.map(
        // 		img => Object.assign({}, img, { url: `${BASE_URL}/images/${img.id}` })
        // 	)
        // );
}

export { upload }