import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { clearAccount } from '~/redux/actions/accountAction';

function PrivateRoute({ children }: { children: ReactNode }) {
    const { isLogin, userInfo } = useSelector((state: any) => state.account);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLogin || userInfo.role !== 'admin') {
            dispatch(clearAccount());
        }
    }, []);

    return isLogin && userInfo.role === 'admin' ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
