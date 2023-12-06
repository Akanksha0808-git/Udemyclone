import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link ,useNavigate} from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

import "./Searchbar.css"
const Searchbar = () => {
  const [name, setname] = useState("");
  const [data1, setdata] = useState([]);
  const url =" https://udemyclone-rx0k.onrender.com/search";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (name === "") {
          setdata([]);
          return;
        }

        const response = await axios.post( url , {
          search: name,
        });
         console.log(response.data.data) 
       await  setdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
      // Reset the data1 state to an empty array when a link is clicked
  setdata([]);
    window.scroll(0, 0)
  };
  return (
    <div className='searchbar'>
  <div className='searchbox'>
<div className="list">
  {data1.length >0 ? (
    <ul>
      {data1.slice(0, 10).map((item, index) => (
        <Link
                  to={"/detailpage/" + item.id }
                  onClick={handleLinkClick}
                  key={index}
                >
        <li key={index}>{item.heading}</li>
        </Link>
        // <li key={index}>{item.heading}</li>

      ))}
    </ul>
  ) : (
   null
  )}
</div>
</div>
    </div>
  )
}

export default Searchbar
