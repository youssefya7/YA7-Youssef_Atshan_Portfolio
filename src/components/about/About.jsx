import "./About.css"
import Award from "../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        alt="" 
                        className="a-img" 
                    />
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                        I develop websites of all sizes, specializing in creating stylish,
                        modern websites, online stores.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Design Award...
                        </h4>
                        <p className="a-award-desc">
                            This award is......
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;