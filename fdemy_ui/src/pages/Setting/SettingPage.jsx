import classnames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';

import styles from './Setting.module.scss';
import IndexModule from '~/components/IndexModule';
import FieldGroup from '~/components/FieldGroup';
import Field from '~/components/Field';
import PhotoField from '~/components/PhotoField';
import InputField from '~/components/InputField';
import { useSelector } from 'react-redux';

const cx = classnames.bind(styles);

function SettingPage() {
    const { userInfo } = useSelector((state) => state.user);

    const { page } = useOutletContext();

    return (
        <div className={cx('page')}>
            <IndexModule className={cx('row')}>
                <IndexModule className={cx('col', 'l-12')}>
                    {page === 'personal' ? (
                        <FieldGroup title={'Thông tin cá nhân'}>
                            <Field>
                                <InputField
                                    label={'Họ tên'}
                                    name={'fullName'}
                                    placeholder={'Họ tên'}
                                    desc={'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'}
                                />
                            </Field>
                            <Field>
                                <PhotoField
                                    label={'Avatar'}
                                    name={'fullName'}
                                    value={userInfo.avatar}
                                    placeholder={'Họ tên'}
                                    desc={'Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.'}
                                />
                            </Field>
                        </FieldGroup>
                    ) : (
                        page === 'security' && <h2>Security</h2>
                    )}
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default SettingPage;
