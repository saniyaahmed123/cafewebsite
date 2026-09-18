const Card = (props) => {
    return (
        <>
            <div className="promo-card">
                <div className="promo-card-img-wrap">
                    <img src={props.image} className="promo-card-img" alt={props.title} />
                </div>
                <div className="promo-card-body">
                    <h3 className="promo-card-title">{props.title}</h3>
                    <p className="promo-card-subtitle">{props.subtitle}</p>
                </div>
                <div className="promo-card-footer">``
                    <a href="#order" className="promo-footer-action">
                        <span className="promo-icon-badge">
                            <svg className="promo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M6 8h12l-1 12H7L6 8z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span>ORDER NOW</span>
                    </a>
                    <div className="promo-footer-divider"></div>
                    <a href="#desserts" className="promo-footer-action">
                        <span className="promo-icon-badge round">
                            <svg className="promo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span>Desserts</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Card;