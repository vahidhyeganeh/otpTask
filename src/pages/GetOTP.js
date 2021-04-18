import React, {useState} from 'react';
import Box from "../components/Box/Box";
import {Button, Col, FormGroup, Input, Label} from "reactstrap";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

const GetOtp = () => {

    const [tokenNumber, setTokenNumber] = useState(null)
    const state = useSelector(state => state)

    const userEnter = () => {
        if (tokenNumber == state.tokenCode) {
            localStorage.setItem('auth', '123')
            window.location.replace('/')
        } else {
            toast('کد تایید یکسان نیست')
         }
    }

    return (
        <div className={'main-otp'}>
            <span  className={"warning-msg"}>کد تایید برای تسهیل در کار تست درج شده!!</span>
            <p> کد تایید {state.tokenCode}</p>
            <Box label={'تایید شماره تماس'} background>
                <FormGroup>
                    <Col xs={12} className={'mb-3'}>
                        <Label style={{margin: '15px'}} for="phone">کد دریافت شده را وارد نمایید : </Label>
                        <Input type="text" name="phone" id="phone"
                               value={tokenNumber}
                               onChange={e => setTokenNumber(e.target.value)}
                        />

                    </Col>
                    <Col xs={12}>
                        <Button color="primary" onClick={() => userEnter()}> ورود</Button>
                    </Col>

                </FormGroup>
            </Box>
        </div>
    )
};

export default GetOtp;