import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import axios from "axios";
import PostWriteForm from "../../components/Post/PostWriteForm";
import { POSTUPDATE_REQUEST } from "../../redux/types";
import { useNavigate, useParams } from "react-router-dom";

const PostEditPage = () => {
  const [{ title, category }, handlePostTitleCategoryChange, setTitleCategory] =
    useInput({
      title: "",
      category: "",
    });

  const [contents, setContents] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePostContentsChange = (e) => {
    setContents(e);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const body = { title, category, contents, id, token };

    dispatch({
      type: POSTUPDATE_REQUEST,
      payload: body,
      navigate,
    });
  };

  useEffect(() => {
    const getFetchingPostDetail = async () => {
      try {
        const { data } = await axios.get(`/api/post/${id}`);

        setTitleCategory({
          title: data.title,
          category: data.category.categoryName,
        });

        setContents(data.contents);
      } catch (err) {
        alert("에러가 발생했습니다");
      }
    };

    getFetchingPostDetail();
  }, [id]);

  return (
    <PostWriteForm
      handlePostTitleCategoryChange={handlePostTitleCategoryChange}
      handlePostContentsChange={handlePostContentsChange}
      handlePostSubmit={handlePostSubmit}
      post={{ title, category, contents }}
    />
  );
};

export default PostEditPage;
