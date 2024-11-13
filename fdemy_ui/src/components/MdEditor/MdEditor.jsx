import PropTypes from 'prop-types';
import MarkdownEditor from 'react-markdown-editor-lite';
import classnames from 'classnames/bind';
import 'react-markdown-editor-lite/lib/index.css';

import styles from './MdEditor.module.scss';
import MarkdownParser from '~/components/MarkdownParser';

const cx = classnames.bind(styles);

function MdEditor({ value, onChange, style }) {
    return (
        <MarkdownEditor
            value={value}
            style={style}
            placeholder="Nội dung viết ở đây"
            markdownClass={cx('editor')}
            htmlClass={cx('wrapper')}
            renderHTML={(text) => {
                return <MarkdownParser content={text} />;
            }}
            onChange={onChange}
        />
    );
}

MdEditor.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
};

export default MdEditor;
