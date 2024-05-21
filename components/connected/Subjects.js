import React from 'react';

const Course = ({ image, title, count }) => {
    return (
        <div className="col-lg-3 col-md-6 my-4 p-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={image} alt="" />
                <a className="cat-overlay text-white text-decoration-none" href="">
                    <h4 className="text-white font-weight-medium">{title}</h4>
                    <span>{count} Courses</span>
                </a>
            </div>
        </div>
    );
};

const Subjects = () => {
    // Define subjects array
    const subjects = [
        { title: "Web Design", image: "images/cat-1.jpg", count: 100 },
        { title: "Development", image: "images/cat-2.jpg", count: 100 },
        { title: "Game Design", image: "images/cat-3.jpg", count: 100 },
        { title: "Apps Design", image: "images/cat-4.jpg", count: 100 },
        { title: "Marketing", image: "images/cat-5.jpg", count: 100 },
        { title: "Research", image: "images/cat-6.jpg", count: 100 },
        { title: "Content Writing", image: "images/cat-7.jpg", count: 100 },
        { title: "SEO", image: "images/cat-8.jpg", count: 100 }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-5">
                    <h5
                        className="text-primary text-uppercase mb-3"
                        style={{ letterSpacing: 5 }}
                    >
                        Subjects
                    </h5>
                    <h1>Explore Top Subjects</h1>
                </div>
                <div className="row">
                    {subjects.map((subject, index) => (
                        <Course
                            key={index}
                            title={subject.title}
                            image={subject.image}
                            count={subject.count}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Subjects;
