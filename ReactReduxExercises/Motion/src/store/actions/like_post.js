export default (id, token) => (dispatch) => {
    dispatch({type: "LIKE_POST", payload: id});
    const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({id})
    };
    fetch('https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/' + id +'/', data)
        .then((response) => response.json())
        .then((results) => {
        });
};