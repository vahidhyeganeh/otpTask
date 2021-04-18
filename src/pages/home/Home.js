import Box from "../../components/Box/Box";
import ProfileImg from '../../assets/img/vahid.jpeg';
import './homeStyle.css'

const Home = () => {

    const logoutAccount = () => {
        localStorage.removeItem('auth')
        window.location.replace('/login')
    }

    return (
        <div className={'main-home'}>
            <h3>خوش آمدید</h3>
            <Box label={'مشخصات کاربری'} color={'#9999ff'}>
                <img src={ProfileImg}/>
                <p>موجودی : 2500 $</p>
                <ul>
                    <li>نام : وحید</li>
                    <li>نام خانوادگی : یگانه</li>
                    <li>کد ملی : 4490212453</li>
                    <li>کد کیف : SDD$1234</li>
                    <li>شماره کارت : 60370111111111</li>
                </ul>
                <span onClick={() => logoutAccount()}>خروج از حساب کاربری </span>
            </Box>
        </div>
    );
};

export default Home;