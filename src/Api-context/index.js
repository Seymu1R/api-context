import React from 'react'
import { contentService } from '../post-services/contents';

const Postcontext = React.createContext([]);

function ProviderPosts({ children }) {

    const [state, useState] = React.useState(false)
    const [posts, setPost] = React.useState([]);
    const [comments, setComments] = React.useState([]);


    React.useEffect(() => {
        contentService.getAllPost().then(({ data }) => setPost(data));
        contentService.getAllComments().then(({data})=>setComments(data))
    }, []);

    return (
        <Postcontext.Provider value={[{ state, useState, posts,comments}]}>
            {children}
        </Postcontext.Provider>
    );
}


const usePostsContext = () => {
    const postcontext = React.useContext(Postcontext);
    return postcontext;
};



export {  ProviderPosts , usePostsContext };    