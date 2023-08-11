import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Header from '../../components/header';
import './PaymentForm.css';
import FormControlLabel from '@material-ui/core/FormControlLabel'; // Make sure to import FormControlLabel
import Checkbox from '@material-ui/core/Checkbox'; // Make sure to import Checkbox
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



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
  const [countryIndex, setCountryIndex] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
  });
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: formData.email,
        name: formData.name,
        phone: formData.phoneNumber,
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

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <b>Contact</b>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Email me with news and offers"
          />
        </div>
        <div className="form-group" style={{ width: '300%' }}>
          <label>Shipping Country</label>
          <select
            onChange={(e) => setCountryIndex(e.target.value)}>
            {countriesData.map((country, index) => (
              <option value={index} key={index}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group" style={{ width: '300%' }}>
          <label>Shipping City</label>
          <select>
            {countriesData[countryIndex]?.cities.map((city) => (
              <option>
                {city || "Please Choose Country"}
              </option>
            ))}
          </select>

        </div>
        <div className="form-group" >
          {/* <label>First name (Optional)</label> */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group" >
          {/* <label>Last Name</label> */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Address</label> */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder='Address'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Apartment, suit etc (Optional)</label> */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder='Apartment, suit etc (Optional)'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>City</label> */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='City'
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <div className="quantity-control">
            <button type="button" onClick={handleDecrement}>
              -
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
        <div className="card-element-container">
          <CardElement />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Continue to Shipping'}
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
