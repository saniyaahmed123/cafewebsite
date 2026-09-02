import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h3 className="footer-logo">Bakery Café</h3>
                    <p className="footer-tagline">Baked with love, served with a smile.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <a href="#menu">Menu</a>
                        <a href="#about">About Us</a>
                        <a href="#desserts">Desserts</a>
                        <a href="#order">Order Now</a>
                    </div>

                    <div className="footer-col">
                        <h4>Visit Us</h4>
                        <p>123 Main Street</p>
                        <p>Open Daily 7am – 8pm</p>
                        <p>(555) 123-4567</p>
                    </div>

                    <div className="footer-col">
                        <h4>Follow</h4>
                        <a href="#instagram">Instagram</a>
                        <a href="#facebook">Facebook</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Bakery Café. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer