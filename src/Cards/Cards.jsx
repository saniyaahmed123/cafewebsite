import './Card.css'
import Card from '../Card/Card'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'

const Cards = () => {
    return (
        <section className="promo-section">
            <div className="promo-grid">
                <Card title="Delicious Dessert" subtitle="Try our latest creation!" image={p1} />
                <Card title="Special Offer" subtitle="Limited time only!" image={p2} />
                <Card title="New Menu Item" subtitle="Check out our new selection!" image={p3} />
                <Card title="Delicious Dessert" subtitle="Try our latest creation!" image={p1} />
                <Card title="Special Offer" subtitle="Limited time only!" image={p2} />
                <Card title="New Menu Item" subtitle="Check out our new selection!" image={p3} />

                </div>

                

        </section>
    )
}
export default Cards