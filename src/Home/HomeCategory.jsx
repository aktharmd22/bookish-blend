import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choose Your Book Wisely";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: './assets/images/category/01.webp',
        imgAlt: 'Thriller Books',
        iconName: 'icofont-brand-windows',
        title: 'Thriller',
    },
    {
        imgUrl: './assets/images/category/02.webp',
        imgAlt: 'Fantasy Books',
        iconName: 'icofont-brand-windows',
        title: 'Fantasy',
    },
    {
        imgUrl: './assets/images/category/03.webp',
        imgAlt: 'Science Fiction Books',
        iconName: 'icofont-brand-windows',
        title: 'Science Fiction',
    },
    {
        imgUrl: '/assets/images/category/04.webp',
        imgAlt: 'History Books',
        iconName: 'icofont-brand-windows',
        title: 'History',
    },
    {
        imgUrl: '/assets/images/category/05.webp',
        imgAlt: 'Biography Books',
        iconName: 'icofont-brand-windows',
        title: 'Biography',
    },
    {
        imgUrl: '/assets/images/category/06.webp',
        imgAlt: 'Novel Books',
        iconName: 'icofont-brand-windows',
        title: 'Novel',
    },
]
    ;

const HomeCategory = () => {
    return <div className="category-section style-4 padding-tb">
        <div className="container">
            {/* section header */}
            <div className="section-header text-center">
                <span>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
            {/* section card */}
            <div className="section-wrapper">
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to={"/shop"} className='category-item'>
                                <div className='category-inner'>
                                    {/* img thumbnail */}
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt="" />
                                    </div>
                                    {/* content */}
                                    <div className="category-content">
                                        <div className="cate-icon">
                                            <i className={val.iconName}></i>
                                        </div>
                                        <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>))
                    }
                </div>
                {/* gest started btn */}
                <div className='text-center mt-5'>
                    <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    </div>
};

export default HomeCategory