export default function Features() {
  const featureList = [
    { icon: "🚚", title: "Free Shipping", desc: "On all orders over ₦100" },
    { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" },
    { icon: "🔒", title: "Secure Payment", desc: "100% secure checkout" },
    { icon: "⭐", title: "Top Rated", desc: "Rated 4.9/5 by users" },
  ];

  return (
    <div className="features">
      {featureList.map((f, i) => (
        <div key={i} className="feature-item">
          <div className="feature-icon">{f.icon}</div>
          <h4>{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
