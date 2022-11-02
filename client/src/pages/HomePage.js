import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/Post/PostCardList";
import { POST_REQUEST } from "../redux/types";
import CategoryList from "../components/Category/CategoryList";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const { postCounts } = useSelector((state) => state.post);
  const categories = useSelector((state) => state.post.categories);
  const loadMoreRef = useRef(null);

  let currentPostCount = useRef(0);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;

      if (target.isIntersecting) {
        let remainPostCount = postCounts - currentPostCount.current;

        if (remainPostCount > 0) {
          dispatch({
            type: POST_REQUEST,
            payload: currentPostCount.current + 6,
          });
          currentPostCount.current += 6;
        }
      }
    },
    [dispatch, postCounts]
  );

  useEffect(() => {
    dispatch({ type: POST_REQUEST, payload: 0 });
  }, [dispatch]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return (
    <>
      <CategoryList categories={categories} />
      <PostList posts={posts} ref={loadMoreRef} />
    </>
  );
};

export default HomePage;
