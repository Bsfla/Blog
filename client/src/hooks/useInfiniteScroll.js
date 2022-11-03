import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { POST_REQUEST } from "../redux/types";

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const { postCounts } = useSelector((state) => state.post);
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
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return { loadMoreRef };
};

export default useInfiniteScroll;
