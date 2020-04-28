const initState = {
    token: localStorage.getItem('token'),
    posts: [],
    users: [],
    category: "ALL",
    query: '',
    messages: '',
}

const reducer = (state = initState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            token: action.payload
        }
    }
    else if (action.type === "LOGOUT") {
        return {
            ...state,
            token: null
        }
    }
    else if (action.type === "FETCH_POSTS") {
        return {
            ...state,
            posts: action.payload
        }
    }
    else if (action.type === "CHANGE_CATEGORY") {
        return {
            ...state,
            category: action.payload
        }
    }
    else if (action.type === "SEARCH_POSTS") {
        return {
            ...state,
            query: action.payload
        }
    }
    else if (action.type === "LIKE_POST") {  
        return {
            ...state,
            posts: state.posts.map((post) => {
                if (post.id === action.payload) {
                    return {
                        ...post,
                        logged_in_user_liked: !post.logged_in_user_liked,
                        amount_of_likes: post.amount_of_likes + (post.logged_in_user_liked ? -1 : 1)
                    };
                } else {
                    return post;
                }
            })
        };
    }
    else if (action.type === "NEW_POST") {
        return {
            ...state,
            posts: [action.payload].concat(state.posts) 
        };
    }
    else if (action.type === "FETCH_USERS"){
        return {
            ...state,
            users: action.payload
        }
    }
    else if (action.type === "FOLLOW_USER") {  
        return {
            ...state,
            users: state.users.map((user) => {
                if (user.id === action.payload) {
                    return {
                        ...user,
                        logged_in_user_is_following: !user.logged_in_user_is_following,
                    };
                } else {
                    return user;
                }
            })
        };
    }
    else if (action.type === "DELETE_POST") {
        return {
            ...state,
            posts : state.posts.filter(post => post.id !== action.payload)
        }
    }
    return state;
}

export default reducer;