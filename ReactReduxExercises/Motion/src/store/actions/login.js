export default (email, password) => (dispatch) => {
    const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    };
    fetch('https://motion.propulsion-home.ch/backend/api/auth/token/', data)
        .then((response) => response.json())
        .then((results) => {
            const token = results.access;
            localStorage.setItem('token', token);
            dispatch({type: 'LOGIN', payload: token})
        });
};