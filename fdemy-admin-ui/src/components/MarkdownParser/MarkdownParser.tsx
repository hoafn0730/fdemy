import classnames from 'classnames/bind';
import parse from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import Clipboard from 'clipboard';
import { memo, useMemo } from 'react';
// import markdownItCodeWrap from 'markdown-it-codewrap';
// import markdownItIns from 'markdown-it-ins';

import styles from './MarkdownParser.module.scss';
import './token.scss';

const cx = classnames.bind(styles);

hljs.configure({
    classPrefix: 'token ',
});

type MarkdownParserProps = {
    content: string;
    style?: object;
    className?: string;
};

function MarkdownParser({ content, style, className }: MarkdownParserProps) {
    const mdParser: any = useMemo(
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
                        } catch (__) {
                            /* empty */
                        }
                    }

                    return '<pre><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
                },
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );
    // .use(markdownItIns)
    // .use(markdownItCodeWrap, markdownItCodeWrapOptions);

    new Clipboard('button[data-copy-state="copy"]');

    return (
        <div
            className={cx('wrapper', {
                [className as string]: className,
            })}
            style={style}
        >
            {parse(mdParser.render(content))}
        </div>
    );
}

export default memo(MarkdownParser);
