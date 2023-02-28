

import SignUpForm from '../../components/sign-up-component/sign-up-form.component';
import SignIn from '../../components/sign-in-component/sign-in-form.component';

import './authentication.styles.scss'

const Authentication = () => {



    return (

        <div className='authentication-container'>
            <SignIn/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;