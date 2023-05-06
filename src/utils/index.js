import axios from 'axios';
const tmdbApiKey = '90dace2e24e092a4f4f2ed5b4fed67ab';

export const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: tmdbApiKey
    },
})

export const fetchToken = async () => {
    try{
        const {data} = await movieApi.get('/authentication/token/new');
        const token = data.request_token;
        if(data.success){
            localStorage.setItem('request_token',token);

            window.location.href=`https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
        }
    } catch (error) {
        console.log('Sorry, your token could not be created.')
    }
}

export const createSessionId = async () => {
    const token = localStorage.getItem('request_token');
    if(token){
        try {
            const {data: {session_id}} = await  movieApi.post('authentication/session/new',{
                request_token: token,
            });

            localStorage.setItem('session_id',session_id);
            return session_id;
        }catch (error){
            console.log(error);
        }
    }
}
