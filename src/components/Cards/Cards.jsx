import './Card.css'
import Card from '../Card/Card'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'

const Cards = () => {
    const products = [
        { id: 1, title: "Delicious Dessert", subtitle: "Try our latest creation!", image: p1 },
        { id: 2, title: "Special Offer", subtitle: "Limited time only!", image: p2 },
        { id: 3, title: "New Menu Item", subtitle: "Check out our new selection!", image: p3 },
        { id: 4, title: "Delicious Dessert", subtitle: "Try our latest creation!", image: p1 },
        { id: 5, title: "Special Offer", subtitle: "Limited time only!", image: p2 },
        { id: 6, title: "New Menu Item", subtitle: "Check out our new selection!", image: p3 }
    ];

    return (
        <section className="promo-section">
            <div className="promo-grid">
                {products.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            title={product.title}
                            subtitle={product.subtitle}
                            image={product.image}
                        />
                    );
                })}
                {/* <Card title="Delicious Dessert" subtitle="Try our latest creation!" image={p1} />
                <Card title="Delicious Dessert" subtitle="Try our latest creation!" image={p2} />
                <Card title="Delicious Dessert" subtitle="Try our latest creation!" image={p3} /> */}

            </div>



        </section>
    )
}
export default Cards