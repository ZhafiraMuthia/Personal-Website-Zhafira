const Contact = () => {
    return (
        <main className="content-page">
            <div className="page">
                <h1>Contact Me</h1>
                <h3>See you again, pals!</h3>
        
                <form>
                    <div className="input-group">
                        <input type="text" id="fname" name="fname" placeholder="Your Name.." />

                    </div>
        
                    <div className="input-group">
                        <input type="text" id="em" name="em" placeholder="Your Email.."/>
                    </div>
        
                    <div className="input-group">
                        <textarea name="message" rows="10" cols="50" placeholder="Your Message.."></textarea>
                    </div>
        
                    <div className="input-group">
                        <input type="submit" value="Send" />
                    </div>
                </form>
        
                <div className="contact-icons">
                    <a href="https://instagram.com/zhmuth_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/qr/2OEPRMB3UWBNM1" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="mailto:zhafiramuthr@gmail.com" target="_blank">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

            </div>
        </main>
    );
  }

export default Contact;