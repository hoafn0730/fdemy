import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DefaultLayout } from '~/layouts';
import { privateRoutes } from '~/routes';
import PrivateRoute from './components/PrivateRoute';
import config from './config';
import Login from './pages/Login';
import { getCurrentUser } from './redux/actions/accountAction';
import { addNewNotification } from './redux/actions/notificationAction';

const socket = io('http://localhost:5000');

function App() {
    const currentUser = useSelector((state: any) => state.account);
    const dispatch = useDispatch();
    const id = useId();

    useEffect(() => {
        if (!currentUser?.userInfo?.accessToken && !currentUser?.isLogin) {
            dispatch(getCurrentUser());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        socket.on('connect', () => {
            console.log(`Chào mừng ${socket.id} trở lại!`);
        });

        socket.emit('login', { userId: id });

        socket.on('notification', (data) => {
            toast.success(data.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            dispatch(addNewNotification(data));
        });

        // Remove event listener on component unmount
        return () => {
            socket.off('login');
            // socket.off('notification');
        };
    }, [dispatch, id]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <PrivateRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </PrivateRoute>
                                }
                            />
                        );
                    })}

                    <Route path={config.routes.login} element={<Login />} />
                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="light"
                />
            </div>
        </Router>
    );
}

export default App;
