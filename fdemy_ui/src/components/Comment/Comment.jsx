import classnames from 'classnames/bind';

import styles from './Comment.module.scss';
import CommentBox from '../CommentBox';
import CommentItem from './CommentItem';

const cx = classnames.bind(styles);

function Comment() {
    const data = [
        {
            id: 1,
            avatar: 'https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj',
            username: 'Hoafn0730',
            comment:
                'em học khóa js được gần hết và có bỏ ngang,giờ muốn học luôn react js thì có được không ạ mọi người,liệu có khó hiểu k ạ',
            replies: [
                {
                    id: 1,
                    avatar: 'https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj',
                    username: 'Hoafn0730',
                    comment: 'Không khó hiểu đâu nha e',
                },
            ],
        },
        {
            id: 2,
            avatar: 'https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj',
            username: 'Hoafn0730',
            comment: `const course = {name:'JS', getName: ()=>{return this}} console.log(course.getName()) // undefined hay là Window... Mọi người xem giúp mình với..`,
        },
        {
            id: 3,
            avatar: 'https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj',
            username: 'Hoafn0730',
            comment: `có ai bị không chạy được code khi chạy trên visual studio code không ạ? Mình thêm extention "Live server" sau đó thêm dòng {     "liveServer.settings.CustomBrowser": "chrome" } vào file "settings.json" là chạy được. (để mở file settings.json thì mình ấn F1 sau đó nhập " Preferences: Open User Settings(JSON)"`,
            replies: [
                {
                    id: 1,
                    avatar: 'https://yt3.ggpht.com/JQxY7Ce5g2q_X2z3qy_2D53luYb_5JuE4SRBxb8PpG2fk8qmTfYasZLQpzjoSwye-KzuOxKhREA=s88-c-k-c0x00ffffff-no-rj',
                    username: 'Hoafn0730',
                    comment: 'abc',
                },
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('contentHeading')}>
                <h4>221 hỏi đáp</h4>
                <p className={cx('help')}>(Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)</p>
            </div>
            <CommentBox style={{ zIndex: 10 }} />
            {data.map((item) => (
                <CommentItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Comment;
