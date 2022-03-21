import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import { LOGIN_REQUEST } from "../../redux/types";

const LoginContainer = () => {
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [localMessage, setLocalMessage] = useState('');
    const { errorMsg } = useSelector(state => state.auth);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
       setLocalMessage(errorMsg);
    },[errorMsg]);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {email, password} = form;
        const user = {email, password};
        
        dispatch({
            type: LOGIN_REQUEST,
            data: user
        })

    }

    const handleToggle = () => {
        setModal(false);
    }


    return (
        <Modal onChange={onChange} form={form} onSubmit={onSubmit} handleToggle={handleToggle} localMessage={localMessage} />
    )
}

export default LoginContainer;