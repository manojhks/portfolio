import {TypeAnimation} from 'react-type-animation'
// import Image from './images/image.png'
export const About = () => {
  return (
    <div className='container'>
    <div className="About">
        <h3 className='about'>About Me</h3><br/><br/><br/>
        <h1 className='namehead'>Hey!, I'm <span className="name">MANOJH</span><span className='text-dark'>.</span></h1>
        <TypeAnimation className='type'
            sequence={['Front-end Developer.',1000,'Web Developer.',1000]}
            speed={60}
            style={{fontSize:"1.5rem"}}
            repeat={Infinity}
        /><br/><br/>
        <blockquote className='aboutquote'>turning designs into interactive and <br/>engaging user experiences with the art of CODE.</blockquote>
        <br/>
        <div className='aboutpara'>
I hold a B.E. in Robotics and Automation from Sri Ramakrishna Engineering College. where I graduated with a CGPA of
7.91. My academic journey is marked by several notable projects including the development of a vision-based
autonomous warehouse robot. an automated guided vehicle for food serving and a fire detector and extinguisher robot
These projects reflect my ability to apply theoretical knowledge to practical. real•world applications.
My commitment to continuous learning is demonstrated by the certifications I have earned. I completed an online Course
in Responsive Web Design from Topcoder Academy and a C for Beginners course from Great Learning Academy.
Additionally, I have actively participated in national-level workshops and seminars including an Industrial Controllers for
Automation workshop and a CSIR-sponsored seminar on Explorations on Autonomous Mobile Robots in Industry 40/5.0. I
also received a certificate of participation in •SA&IBHAV by the Ministry for promoting Entrepreneurship.
I am driven by a relentless pursuit of excellence and a passion for technology. My diverse skill set, combined with a solid
educational foundation and hands-on experience. positions me as a valuable asset in any team. I am eager to leverage my
skills and knowledge to contribute to innovative projects and drive success in a dynamic and collaborative environment
Connect with me to
e how I can add value to vour oraanization.</div>

    </div>

    </div>
  )
}
