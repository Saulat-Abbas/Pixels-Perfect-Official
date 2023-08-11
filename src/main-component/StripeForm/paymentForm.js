import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';
import FormControlLabel from '@material-ui/core/FormControlLabel'; // Make sure to import FormControlLabel
import Checkbox from '@material-ui/core/Checkbox'; // Make sure to import Checkbox



const countriesData =
  [
    {
      "name": "Brazil",
      "cities": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre"]
    },
    {
      "name": "Canada",
      "cities": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "London"]
    },
    {
      "name": "China",
      "cities": ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chongqing", "Tianjin", "Wuhan", "Chengdu", "Nanjing", "Hangzhou"]
    },
    {
      "name": "Egypt",
      "cities": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Asyut", "Ismailia", "Fayyum"]
    },
    {
      "name": "France",
      "cities": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"]
    },
    {
      "name": "Germany",
      "cities": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig"]
    },
    {
      "name": "India",
      "cities": ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur"]
    },
    {
      "name": "Italy",
      "cities": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"]
    },
    {
      "name": "Japan",
      "cities": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"]
    },
    {
      "name": "Mexico",
      "cities": ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Toluca", "Tijuana", "Leon", "Ciudad Juarez", "Merida", "San Luis Potosi"]
    },
    {
      "name": "Netherlands",
      "cities": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen"]
    },
    // Pakistan
    {
      "name": "Pakistan",
      "cities": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Peshawar", "Quetta", "Sialkot", "Gujrat"]
    },

    {
      "name": "Russia",
      "cities": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don"]
    },
    {
      "name": "South Africa",
      "cities": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "Polokwane", "Nelspruit", "East London", "Kimberley"]
    },
    {
      "name": "South Korea",
      "cities": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam"]
    },
    {
      "name": "Spain",
      "cities": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma de Mallorca", "Las Palmas de Gran Canaria", "Bilbao"]
    },
    {
      "name": "Turkey",
      "cities": ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Kayseri", "Mersin"]
    },
    {
      "name": "Ukraine",
      "cities": ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol"]
    },
    {
      "name": "United Kingdom",
      "cities": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Edinburgh", "Leeds", "Bristol", "Sheffield", "Newcastle upon Tyne"]
    },
    {
      "name": "United States",
      "cities": ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]
    },
    {
      "name": "Vietnam",
      "cities": ["Ho Chi Minh City", "Hanoi", "Da Nang", "Haiphong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Nam Dinh", "Buon Ma Thuot"]
    },
    {
      "name": "Argentina",
      "cities": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "San Miguel de Tucuman", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan"]
    },
    {
      "name": "Australia",
      "cities": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Wollongong", "Geelong"]
    },
    {
      "name": "Austria",
      "cities": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn"]
    },
    {
      "name": "Belgium",
      "cities": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst"]
    },
    {
      "name": "Chile",
      "cities": ["Santiago", "Valparaíso", "Concepción", "Antofagasta", "Vina del Mar", "Temuco", "Rancagua", "Talca", "Arica", "Iquique"]
    },
    {
      "name": "Colombia",
      "cities": ["Bogotá", "Medellin", "Cali", "Barranquilla", "Cartagena", "Cucuta", "Soledad", "Ibague", "Bucaramanga", "Pereira"]
    },
    {
      "name": "Denmark",
      "cities": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde"]
    },
    {
      "name": "Finland",
      "cities": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyvaskyla", "Lahti", "Kuopio", "Pori"]
    },
    {
      "name": "Greece",
      "cities": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis"]
    },
    {
      "name": "Hungary",
      "cities": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pecs", "Gyor", "Nyiregyhaza", "Kecskemet", "Szekesfehervar", "Szombathely"]
    },
    {
      "name": "Czech Republic",
      "cities": ["Prague", "Brno", "Ostrava", "Plzen", "Liberec", "Olomouc", "Usti nad Labem", "Hradec Kralove", "Ceske Budejovice", "Pardubice"]
    },

    // Egypt
    {
      "name": "Egypt",
      "cities": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Asyut", "Ismailia", "Fayyum"]
    },

    // Finland
    {
      "name": "Finland",
      "cities": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyvaskyla", "Lahti", "Kuopio", "Pori"]
    },

    // Greece
    {
      "name": "Greece",
      "cities": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis"]
    },

    // Hungary
    {
      "name": "Hungary",
      "cities": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pecs", "Gyor", "Nyiregyhaza", "Kecskemet", "Szekesfehervar", "Szombathely"]
    },

    // India
    {
      "name": "India",
      "cities": ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur"]
    },

    // Indonesia
    {
      "name": "Indonesia",
      "cities": ["Jakarta", "Surabaya", "Bandung", "Medan", "Bekasi", "Semarang", "Tangerang", "Depok", "Palembang", "Makassar"]
    },

    // Ireland
    {
      "name": "Ireland",
      "cities": ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Sligo", "Bray", "Navan"]
    },

    // Israel
    {
      "name": "Israel",
      "cities": ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beersheba", "Bnei Brak", "Holon"]
    },

    // Italy
    {
      "name": "Italy",
      "cities": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"]
    },
  ]

function PaymentForm() {
  
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryIndex, setCountryIndex] = useState("");
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    lastName: '',
    address: '',
    apartment: '',
    phoneNumber: '',
    zip: '',
    state: '',
    city: '',
    country: 'United States',
  });
  const data = [
    // ... (all the country data you provided)
  ];
  useEffect(() => {
    const index = countriesData.findIndex((country) => country.name === formData.country);
    setCountryIndex(index);
  }, [formData.country]);

  // Sort the data array in ascending order based on country name
  data.sort((a, b) => a.name.localeCompare(b.name));

  console.log(JSON.stringify(data, null, 2)); // Printing the sorted data
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {

    const { name, value } = event.target;
    console.log("handleChange  event ===========>", name);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: formData.fullName,
        email: formData.email,
        address: {
          postal_code: formData.zip, // Include the zip code
          state: formData.state,
          line1: formData.address,
          line2: formData.apartment,
          city: formData.city, // City
          country: formData.country, //Country

        }
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      console.log(paymentMethod);
      console.log(formData);
      console.log(`Quantity: ${quantity}`);
    }
  };
  console.log("formdata.city ===========>", formData.city);
  console.log("formdata.country ===========>", formData.country);
  return (
    <div className="two-panel-container">
      <div className="code-panel">
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3 style={{paddingBottom:"10%"}}>Contact Form</h3>
              <label style={{ cursor: 'none' }}>
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email:abc@email.com"
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email me with news and offers"
              />
            </div>
            <div className="form-group" style={{ width: '100%' }}>
              <label><b>Shipping Country</b></label>
              <select
                onChange={(e) => handleChange(e)}
                name='country'
                defaultValue="United States" 
                value={formData.country}
                >
                {countriesData.map((country, index) => (
                  <option value={country.name} key={index}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ width: '100%' }}>
              <label><b>Shipping City</b></label>
              <select onChange={(e) => handleChange(e)} name='city'>
                {countriesData[countryIndex]?.cities.map((city, index) => (
                  <option key={city} value={city}>
                    {city || "Please Choose Country"}
                  </option>
                ))}
              </select>
              
              
              <div class="d-flex" style={{ marginTop: "5%" }}>
                <input class=""
                  type="number"
                  max={"99999"}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 5);
                  }}
                  placeholder="ZIP"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
                
                <input class=""
                
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required />
              </div>
            </div>
            <div className="name-container">
              <div className="form-group" style={{ width: "60.5%" }}>
              <label style={{ cursor: 'none' }}>
                <b>Full Name</b>
              </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
            <label style={{ cursor: 'none' }}>
                <b>Address</b>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
            <label style={{ cursor: 'none' }}>
                <b>Apartment</b>
              </label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                placeholder="Apartment, suit etc (Optional)"
                onChange={handleChange}
              />
            </div>
            <div className="card-element-container" >
              <CardElement />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" disabled={!stripe || loading}>
              {loading ? 'Processing...' : 'Continue to Shipping'}
            </button>
          </form>
        </div></div >
      <div className="picture-panel">
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <div class="left border">
                <div class="row">
                  <span ><h2>Payment</h2></span>
                  <div class="icons">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" />
                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                    <img src="https://img.icons8.com/color/48/000000/maestro.png" />
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-8">
              <div >
                <div ><h1 style={{ textAlign: "center" }}
                >Order Summary</h1></div>
                <p>2 items</p>
                <div class="row item">
                  <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/79M6pU0.png"></img></div>
                  <div class="col-8">
                    <div class="row"><b>$ 26.99</b></div>
                    <div class="row text-muted">Be Legandary Lipstick-Nude rose</div>
                    <div class="row">Qty:1</div>
                  </div>
                </div>
                <div class="row item">
                  <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/Ew8NzKr.jpg"></img></div>
                  <div class="col-8">
                    <div class="row"><b>$ 19.99</b></div>
                    <div class="row text-muted">Be Legandary Lipstick-Sheer Navy Cream</div>
                    <div class="row">Qty:1</div>
                  </div>
                </div>
                <hr></hr>
                <div class="row lower">
                  <div class="col text-left">Subtotal</div>
                  <div class="col text-right">$ 46.98</div>
                </div>
                <div class="row lower">
                  <div class="col text-left">Delivery</div>
                  <div class="col text-right">Free</div>
                </div>
                <div class="row lower">
                  <div class="col text-left"><b>Total to pay</b></div>
                  <div class="col text-right"><b>$ 46.98</b></div>
                </div>
                <div class="row lower">
                  <div class="col text-left"><a href="#"><u>Add promo code</u></a></div>
                </div>

                <button
                  type="Place Order"
                  className={`submit-button ${loading ? 'loading' : ''}`}
                  disabled={!stripe || loading}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}

export default PaymentForm;
