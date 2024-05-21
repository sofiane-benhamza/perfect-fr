const Teacher = ({image, name, designation}) => (
    <div className="col-md-6 col-lg-3 text-center team mb-4">
      <div className="team-item rounded overflow-hidden mb-2">
        <div className="team-img position-relative">
          <img className="img-fluid" src={image} alt={name} />
          <div className="border border-light rounded p-4 mt-4 teachers-hover cursor-pointer">
            <h5>{name}</h5>
            <p className="m-0">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const Teachers = () => {
    return (
      <section className="section why-us" data-section="section5">
        <div className="container">
          <div className="text-center mb-5">
            <h5
              className="text-primary text-uppercase mb-3"
              style={{ letterSpacing: 5 }}
            >
              Teachers
            </h5>
            <h1 className="text-light">Meet Our Teachers</h1>
          </div>
          <div className="row">
            <Teacher image="/images/team-1.jpg" name="Jhon Doe" designation="Web Designer"/>
            <Teacher image="/images/team-2.jpg" name="Jhon Doe" designation="Web Designer"/>
            <Teacher image="/images/team-3.jpg" name="Jhon Doe" designation="Web Designer"/>
            <Teacher image="/images/team-4.jpg" name="Jhon Doe" designation="Web Designer"/>
          </div>
        </div>
      </section>
    );
  };
  
  export default Teachers;
  