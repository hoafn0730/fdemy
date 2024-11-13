import classnames from 'classnames/bind';

import styles from './PhotoField.module.scss';
import Avatar from '../Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import authService from '~/services/authService';

const cx = classnames.bind(styles);

function PhotoField({ label, name, value, desc }) {
    const [isEdit, setIsEdit] = useState(false);
    const [photo, setPhoto] = useState(value);
    const inputRef = useRef();

    const handleChangePhoto = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPhoto(file);
    };

    useEffect(() => {
        return () => {
            photo && URL.revokeObjectURL(photo.preview);
        };
    }, [photo]);

    const handleChoosePhoto = () => {
        !isEdit && setIsEdit(true);
        isEdit && inputRef.current.click();
    };

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleSave = () => {
        authService.updateProfile({ avatar: photo }).catch((err) => console.log(err));
        setIsEdit(false);
    };

    const handleCancel = () => {
        setIsEdit(false);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <label className={cx('label')}>{label}</label>
                <div className={cx('body')}>
                    <p className={cx('desc')}>{desc}</p>
                    <div className={cx('avatar')} onClick={handleChoosePhoto}>
                        <Avatar src={photo?.preview || value} alt="hoafn" style={{ '--font-size': '8.9px' }} />
                        {isEdit && (
                            <div className={cx('chooseAva')}>
                                <FontAwesomeIcon icon={faCamera} className={cx('icon')} />
                                <input
                                    ref={inputRef}
                                    name={name}
                                    type="file"
                                    id={'avatar'}
                                    accept="image/jpg, image/jpeg, image/png"
                                    onChange={handleChangePhoto}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {!isEdit && (
                <Button outline rounded fieldBtn onClick={handleEdit}>
                    Edit
                </Button>
            )}

            {isEdit && (
                <div className={cx('editMode')}>
                    <Button outline rounded fieldBtn saveFieldBtn onClick={handleSave}>
                        Save
                    </Button>
                    <Button outline rounded fieldBtn onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            )}
        </>
    );
}

export default PhotoField;
