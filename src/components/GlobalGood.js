import React,{ Component } from 'react'
// import Columns from './Columns'
//import { CollectionView, FlowLayout } from "react-collectionview";
// import myLogo from './assets/logo.png'; // Use a relative path
// const avatarUrl = 'https://api.example.com/avatars/user-123.png';
const countries = Object.freeze({
    Japan:"Japan",
    Korea:"Korea",
    Singapore:"Singapore",
    USA:"USA",
    UK:"UK"
});
const data = [
    { id: 1, title: "Hokkaido Fries",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtzCNyXby7bC6V1z_QJIJGo3oPdoQibl40Q&s",country:countries.Japan, isavailable:true },
    { id: 2, title: "Letao Cheesecake",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsztwWcgKwDLpZNM2rxvaF2HwA36UXbi_Ag&s",country:countries.Japan, isavailable:false }, 
    { id: 3, title: "Tokyo Banana",url:"https://www.okashiland.com/wp-content/uploads/2025/12/%E6%9D%B1%E4%BA%AC%E9%A6%99%E8%95%89-%E9%A6%99%E6%B8%AF-OKL-1024x819.jpg",country:countries.Japan, isavailable:true },
    { id: 4, title: "Lotte Chocolate",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknMD7HyeOscMMrZP-ilo3Tv0nw6pXwDYN1Q&s",country:countries.Korea, isavailable:true },];
const availablefunc = (isavailable) => {
    if (isavailable) {
        return (<div>
        <div>{"Available"}</div>
        <div><button>Store Location</button></div>
    </div>);
    } else {
        return (<div>
        {"Not Available"}</div>);
    }
    
}
function GlobalGoodTable(params) {
    const { data,country } = params;
    return ( <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {data.filter(item => item.country === country).map(item => (
            <div key={item.id} style={{ border: "1px solid #ccc", padding: "20px" }}>
                {item.title} 
             
                {/* <div>
                    <img src={myLogo} alt="Company Logo" style={{ width: '100px' }} />
                </div>
                */}
                
                <div>
                    <img src={item.url} alt="User Avatar" style={{ width: '300px' }} />
                </div>
                <div>
                    {availablefunc(item.isavailable)}
                </div>

            </div> ))}
        </div>
    );
}
class GlobalGood extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: data,
         country: countries.Japan,
      };
    }


  render(){
    return (
      <div>
            <h1>Try to see if the item is available in HK</h1>
            <nav>
                <ul>
                    {Object.values(countries).map((country) => (
                        <li key={country} 
                            style={{ fontWeight: this.state.country === country ? 'bold' : 'normal', cursor: 'pointer' }}
                            onClick={() => this.setState({ country })}>
                            {country}
                        </li>
                    ))}
                </ul>
            </nav>
            <GlobalGoodTable data = {this.state.data} country= {this.state.country}></GlobalGoodTable>
            <h1>This is a demo on how to create a web store web page. Please go to other website for buying goods.</h1>
        </div>
    );
    // return (
      
    // );
  }

}
export default GlobalGood