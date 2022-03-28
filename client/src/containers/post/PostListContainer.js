import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { POST_REQUEST } from "../../redux/types";
import PostList from "../../components/Post/PostCardList";

const PostListContainer = () => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post);
    
    useEffect(() => {
      dispatch({type: POST_REQUEST});
      post ? console.log(post) : console.log(null);
    }, [dispatch]);
    
    return (
        <PostList />
    )



}

export default PostListContainer;