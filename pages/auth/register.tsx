import * as React from 'react';

import { CommonSeo } from '../../src/core/components';
import AuthRegister from '@features/auth/AuthRegister';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <>
            <CommonSeo title="Register" />
            <AuthRegister />
        </>
    );
};

export default RegisterPage;
