export default (message, token) => (dispatch) => {
    const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(message)
    };
    fetch('https://motion.propulsion-home.ch/backend/api/social/posts/', data)
        .then((response) => response.json())
        .then((createdMessage) => {
            dispatch({type: "NEW_POST", payload: createdMessage})
        });
};