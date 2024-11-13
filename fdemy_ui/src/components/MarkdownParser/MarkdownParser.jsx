import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import parse from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import markdownItIns from 'markdown-it-ins';
import hljs from 'highlight.js';
import markdownItCodeWrap from 'markdown-it-codewrap';
import Clipboard from 'clipboard';

import styles from './MarkdownParser.module.scss';
import './token.scss';
import { memo, useMemo } from 'react';

const cx = classnames.bind(styles);

const markdownItCodeWrapOptions = {
    wrapClass: cx('code-toolbar'),
    toolbarTag: 'div',
    hasToolbar: true,
    toolbarClass: cx('toolbar'),
    isButtonInToolbar: true,
    copyButtonAttrs: {
        class: cx('copy-to-clipboard-button'),
        'data-copy-state': 'copy',
        'data-clipboard-target': 'pre',
    },
    copyButtonLabel: '<span>Copy</span>',
    inlineCopyHandler: true,
};

hljs.configure({
    classPrefix: 'token ',
});

function MarkdownParser({ content, style, className }) {
    const mdParser = useMemo(
        () =>
            new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true,
                langPrefix: 'language-',
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return `<pre class='language-${lang}'><code class='language-${lang}'>${
                                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
                            }</code></pre>
                    `;
                        } catch (__) {}
                    }

                    return '<pre><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
                },
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )
        .use(markdownItIns)
        .use(markdownItCodeWrap, markdownItCodeWrapOptions);

    new Clipboard('button[data-copy-state="copy"]');

    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
            style={style}
        >
            {parse(mdParser.render(content))}
        </div>
    );
}

MarkdownParser.propTypes = {
    content: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default memo(MarkdownParser);
