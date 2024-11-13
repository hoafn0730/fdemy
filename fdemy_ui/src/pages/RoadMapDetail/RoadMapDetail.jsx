import classnames from 'classnames/bind';

import styles from './RoadMapDetail.module.scss';
import Heading from '~/components/Heading';
import IndexModule from '~/components/IndexModule';
import LearningPathGroup from './LearningPathGroup';

const cx = classnames.bind(styles);

function RoadMapDetail() {
    const data = [
        {
            title: '1. Tìm hiểu về ngành IT',
            desc: `Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành
            chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.`,
            courses: [
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
            ],
        },
        {
            title: '2. HTML và CSS',
            desc: `Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.`,
            courses: [
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
            ],
        },
        {
            title: '3. JavaScript',
            desc: `Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.`,
            courses: [
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
                {
                    title: 'Xây Dựng Website với ReactJS',
                    desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
                    này trước nhé.`,
                    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                    linkTo: '/',
                },
            ],
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <Heading
                    title="Lộ trình học Front-end"
                    desc={`Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".`}
                    className={cx('heading')}
                />

                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-8')}>
                        {data.map((item, index) => (
                            <LearningPathGroup key={index} title={item.title} desc={item.desc} items={item.courses} />
                        ))}
                    </IndexModule>

                    <IndexModule className={cx('col', 'l-4')}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam libero ullam doloribus
                        omnis voluptates quis harum suscipit quae repellendus repudiandae temporibus recusandae earum
                        aliquid, ratione nihil illum unde repellat.
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default RoadMapDetail;
