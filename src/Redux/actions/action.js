// src/redux/actions/actions.js
/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"
export const url = 'http://localhost:8080/api/';

export let header = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		"Access-Control-Allow-Origin": "*",
	}
};

export function loadArticles() {
	return (dispatch) => {
		axios.get(`${url}articles`)
			.then((res) => {
				let articles = res.data;
				dispatch({type: 'LOAD_ARTICLES', articles})
			}).catch((err) => {
			console.log(err)
		})
	}
}

export function getUser(_id) {
	return axios.get(`${url}user/${_id}`).then((res) => {
		return res.data
	}).catch(err => console.log(err))
}

export function getUserProfile(_id) {
	return (dispatch) => {
		axios.get(`${url}user/profile/${_id}`).then((res) => {
			let profile = res.data;
			dispatch({type: 'SET_PROFILE', profile})
		}).catch(err => console.log(err))
	}
}

export function getArticle(article_id) {
	return (dispatch) => {
		axios.get(`${url}article/${article_id}`)
			.then((res) => {
				let article = res.data;
				dispatch({type: 'VIEW_ARTICLE', article})
			}).catch((err) => console.log(err))
	}
}

// article_id, author_id, comment
export function comment() {
	return (dispatch) => {
	}
}

//req.body.article_id
export function clap(article_id) {
	return (dispatch) => {
		axios.post(`${url}article/clap`, {article_id}).then((res) => {
			dispatch({type: 'CLAP_ARTICLE'})
		}).catch((err) => console.log(err))
	}
}

//id, user_id
export function follow(id, user_id) {
	return (dispatch) => {
		axios.post(`${url}user/follow`, {id, user_id}).then((res) => {
			dispatch({type: 'FOLLOW_USER', user_id})
		}).catch((err) => console.log(err))
	}
}

export function login(user) {
	return {
		type: 'SET_USER',
		user,
	}
}

export function toggleClose() {
	return (dispatch) => {
		dispatch({type: 'TOGGLE_MODAL', modalMode: false})
	}
}

export function toggleOpen() {
	return (dispatch) => {
		dispatch({type: 'TOGGLE_MODAL', modalMode: true})
	}
}