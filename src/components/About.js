import './stylesabout.css';

const About = () => {
    return (
        <main className="content-page">
            <div className="page">
                <h1>About Me</h1>

                <div className="about-container">
                    <div className="about-content">
                        <p style={{ textAlign: 'justify' }}>
                            Pleasure to meet you all! I go by the name Zhafira Muthia Rabbani, but feel free to give me any cool nickname you come up with. I popped into this world in Jakarta on the 12th of September 2004. I'm a Computer Science Education student at the Faculty of Mathematics and Natural Sciences Education (FPMIPA) in the Indonesia University of Education (UPI). Currently cruising through my second year. In my free time, you'll catch me sketching and diving into a good read. Anything to keep the boredom at bay heheh!
                        </p>
                        <p style={{ textAlign: 'justify' }}>This is my educational background</p>

                        <table className="education-table">
                                <tr>
                                    <th>Educational Level</th>
                                    <th>Name of The School/University</th>
                                    <th>Year of Enrollment</th>
                                    <th>Year of Graduation</th>
                                </tr>
                                <tr>
                                    <td>SD</td>
                                    <td>SDN Sumur Batu 01 Pagi</td>
                                    <td>2010</td>
                                    <td>2016</td>
                                </tr>
                                <tr>
                                    <td>SMP</td>
                                    <td>SMP Negeri 10 Jakarta</td>
                                    <td>2016</td>
                                    <td>2019</td>
                                </tr>
                                <tr>
                                    <td>SMA</td>
                                    <td>SMA Negeri 5 Jakarta</td>
                                    <td>2019</td>
                                    <td>2022</td>
                                </tr>
                                <tr>
                                    <td>S1</td>
                                    <td>Universitas Pendidikan Indonesia</td>
                                    <td>2022</td>
                                    <td>-</td>
                                </tr>
                        </table>
                    </div>
                    <img className="about-image" src="/photos/1jap.jpg" alt="" />
                </div>

            </div>
        </main>
    );
}

export default About;