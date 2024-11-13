import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthModal } from '~/store/actions/authModalAction';

function PrivateRoute({ children }) {
    const { isLogin } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const timeOut = new Promise((resolve) => {
            setTimeout(resolve, 800);
        });

        timeOut.then(() => {
            if (!isLogin) {
                dispatch(openAuthModal());
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return isLogin ? children : <div></div>;
}

export default PrivateRoute;
