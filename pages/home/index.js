import Blog from "@/components/connected/Blog"
import Subjects from "@/components/connected/Subjects"
import Header from "@/components/connected/Header"
import Courses from "@/components/root/Courses"
import Footer from "@/components/root/Footer"

 const Home = () => {
    return (<>
        <Header />
        <Subjects />
        <Blog />
        <Footer />
        </>)
}

export default Home