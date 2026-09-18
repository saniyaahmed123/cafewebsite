import './Section.css'
import sec1 from '../../assets/sec1.png'

function Section() {
    return (
        <section className="promo-section text-center">
            <div className="promo-section-inner">
                <h2 className="promo-section-title">
                    Welcome to your neighborhood bakery café
                </h2>
                <p className="promo-section-subtitle">
                    Where smiles are served daily
                </p>
                <p className="promo-section-description ">
                    Enjoy delicious pastries, warm breads, stunning cakes, and
                    expertly brewed drinks while feeling right at home.
                </p>
                <img src={sec1} alt="Bakery Café" />
            </div>
        </section>
    )
}

export default Section