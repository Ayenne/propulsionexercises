export default (id, token) => (dispatch) => {
    dispatch({type: "DELETE_POST", payload: id});
    const data = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({id})
    };
    console.log(data);
    fetch('https://motion.propulsion-home.ch/backend/api/social/posts/' + id +'/', data)
        .then((response) => response.text())
        .then((results) => {});
};