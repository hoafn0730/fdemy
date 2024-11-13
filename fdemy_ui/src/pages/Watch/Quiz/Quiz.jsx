import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Quiz.module.scss';
import Heading from '~/components/Heading';
import MarkdownParser from '~/components/MarkdownParser';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Quiz({ data }) {
    const [quiz] = useState(data[0]);
    const [_answer, setAnswer] = useState();
    const [selected, setSelected] = useState();
    const [showExplanation, setShowExplanation] = useState(false);

    const handleChooseAnswer = (answer, e) => {
        setAnswer(answer);
        setSelected(e.target);
    };

    useEffect(() => {
        setShowExplanation(false);
    }, [_answer]);

    const handleSubmit = () => {
        if (_answer) {
            if (_answer.isCorrect) {
                selected.classList.add(cx('success'));
            } else {
                selected.classList.add(cx('error'));
            }
            setShowExplanation(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Heading title={quiz.title} updatedAt="Cập nhật tháng 6 năm 2022" />
                <div className={cx('desc')}>
                    <MarkdownParser content={quiz.content} style={{ '--font-size': '1.6rem', '--line-height': 2 }} />
                </div>

                <div className={cx('content')}>
                    {quiz.answers.map((answer) => (
                        <div
                            key={answer.id}
                            className={cx('answer', {
                                selected: answer?.id === _answer?.id,
                            })}
                            onClick={(e) => handleChooseAnswer(answer, e)}
                        >
                            {answer.answer}
                        </div>
                    ))}
                </div>

                <div className={cx('footer')}>
                    <Button rounded primary className={cx('submit')} onClick={handleSubmit}>
                        Reply
                    </Button>
                </div>

                {showExplanation && (
                    <div className={cx('explanation')}>
                        <h2>Explanation</h2>
                        <MarkdownParser
                            content={_answer.explanation}
                            style={{ '--font-size': '1.6rem', '--line-height': 2 }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
