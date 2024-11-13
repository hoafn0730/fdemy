import classnames from 'classnames/bind';
import MDEditor from '@uiw/react-md-editor';

import styles from './MdEditor.module.scss';

const cx = classnames.bind(styles);

type MdEditorProps = {
    name?: string;
    value: string;
    editorOnly?: boolean;
    style?: object;
    onChange: (event?: any) => void;
};

function MdEditor({ name, value, editorOnly, style, onChange }: MdEditorProps) {
    return (
        <MDEditor
            className={cx('wrapper')}
            value={value}
            preview="edit"
            style={style}
            textareaProps={{
                name: name,
                placeholder: 'Please enter Markdown text',
            }}
            onChange={onChange}
        />
    );
}

export default MdEditor;
