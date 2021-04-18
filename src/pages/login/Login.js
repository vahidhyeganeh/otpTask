import Box from "../../components/Box/Box";
import {Input, FormGroup, Label, Button, Col} from "reactstrap";
import React, {useState} from "react";
import {useDispatch,} from "react-redux";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";

const Login = () => {

    const [phone, setPhone] = useState(null)
    const [validatePhone, setValidatePhone] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()

   function phoneValidate(phone) {
        if (!/^(\+98|0098|98|0)?9\d{9}$/g.test(phone)){
            return false;
        }
        return true
    }

    const userEnter = () => {
        if(phone) {
            if (phoneValidate(phone)){
                const randomNumber = Math.floor(1000 + Math.random() * 9000);
                dispatch({type: "TOKEN_CODE", payload: randomNumber});
                alert('کد تایید شما :' + randomNumber)
                setRedirect(true)
            }else {
                setValidatePhone(true)
            }
        }else {
            toast("شماره تماس را وارد کنید !!")
        }


    }

    return (
        <Box label={'ورود'}>
            {redirect ? <Redirect to={'/GetOTP'}/>:null}
            <FormGroup>
                <Col xs={12} className={'mb-3'}>
                    <Label style={{margin: '15px'}} for="phone">شماره تماس : </Label>
                    <Input type="text" name="phone" id="phone"
                           value={phone}
                           onChange={e => setPhone(e.target.value)}
                    />
                    {validatePhone ? <span> فرمت شماره تماس اشتباه است</span>:null}
                </Col>
                <Col xs={12}>
                    <Button color="primary" onClick={() => userEnter()}> ورود</Button>
                </Col>

            </FormGroup>
        </Box>
    );
};

export default Login;