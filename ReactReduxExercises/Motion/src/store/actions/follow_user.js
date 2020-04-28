export default (id, token) => (dispatch) => {
    const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({id})
    };
    fetch('https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/' + id + '/', data)
        .then((response) => response.json())
        .then((results) => {
            dispatch({type: "FOLLOW_USER", payload: id})
        });
};