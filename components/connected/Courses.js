import Router, { useRouter } from "next/router";
const Courses = () => {

  const router = useRouter();
const Course = ({
  imageSrc,
  studentsCount,
  duration,
  title,
  rating,
  reviewsCount,
  price,
  url
}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 cursor-pointer " onClick={() => { url && router.push(`./courses/${url}`) }}>
      <div className="rounded overflow-hidden mb-2 h-100 justify-content-center d-flex flex-column">
        <img className="img-fluid h-100" src={imageSrc} alt={title} />
        <div className="bg-sea p-4">
          <div className="d-flex justify-content-between mb-3">
            <small className="m-0">
              <i className="fa fa-users text-primary mr-2" />
              {studentsCount} Students
            </small>
            <small className="m-0">
              <i className="far fa-clock text-primary mr-2" />
              {duration}
            </small>
          </div>
          <a className="h5" href="#">
            {title}
          </a>
          <div className="border-top mt-4 pt-4">
            <div className="d-flex justify-content-between">
              <h6 className="m-0">
                <i className="fa fa-star text-primary mr-2" />
                {rating} <small>({reviewsCount})</small>
              </h6>
              <h5 className="m-0">${price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



  return (
    <section className="section why-us" data-section="section4">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5
              className="text-primary text-uppercase mb-3"
              style={{ letterSpacing: 5 }}
            >
              Courses
            </h5>
            <h1>Our Popular Courses</h1>
          </div>
          <div className="row">
            <Course
              imageSrc="images/course-5.jpg"
              studentsCount={554}
              duration="01h 30m"
              title="HTML, CSS and Javascript for web developers"
              rating={4.5}
              reviewsCount={250}
              price={0}
              url={"bro-code-javascript"}
            />
            <Course
              imageSrc="images/course-2.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />
            <Course
              imageSrc="images/course-3.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />
            <Course
              imageSrc="images/course-4.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />
            <Course
              imageSrc="images/course-5.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />
            <Course
              imageSrc="images/course-6.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />
            <Course
              imageSrc="images/course-1.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />
            <Course
              imageSrc="images/course-2.jpg"
              studentsCount={25}
              duration="01h 30m"
              title="Web design & development courses for beginner"
              rating={4.5}
              reviewsCount={250}
              price={99}
            />

          </div>
        </div>
      </div>

    </section>
  )
}

export default Courses;


