import one from "../assests/Images/per1.jpg";
import two from "../assests/Images/per2.jpg";
import three from "../assests/Images/per3.jpg";
// Product Component
function Products() {
    return (
      <section class="productbox">
        <div className="box">
          <img src={one} alt="perfume1" />
          <p>Long Lasting Perfume Lorem, ipsum dolor sit amet.</p>
        </div>
        <div className="box">
          <img src={two} alt="perfume2" />
          <p>Long Lasting Perfume Lorem, ipsum dolor sit amet.</p>
        </div>
        <div className="box">
          <img src={three} alt="perfume3" />
          <p>Long Lasting Perfume Lorem, ipsum dolor sit amet.</p>
        </div>
      </section>
    );
  }
  export default Products;