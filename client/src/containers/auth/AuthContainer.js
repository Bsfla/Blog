import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../../redux/types";

const AuthContainer = ({open, setOpen, isAuth}) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    });
    const [localMessage, setLocalMessage] = useState('');
    const { errorMsg } = useSelector(state => state.auth);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
       setLocalMessage(errorMsg);
       setForm({
        email: "",
        password: "",
        name: ""
       });
    },[errorMsg, open]);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {email, password, name} = form;
        console.log(form);

        if (isAuth.register) dispatch({
            type: REGISTER_REQUEST,
            data: {email, name, password}
        })
        else dispatch({
            type: LOGIN_REQUEST,
            data: {email, password}
        })

        setOpen(false);

    }


    return (
        <Modal onChange={onChange} form={form} onSubmit={onSubmit}  localMessage={localMessage} open={open} setOpen={setOpen} isAuth={isAuth}  />
    )
}

export default AuthContainer;