import React from 'react'
// import Columns from './Columns'
//import { CollectionView, FlowLayout } from "react-collectionview";
// import myLogo from './assets/logo.png'; // Use a relative path
// const avatarUrl = 'https://api.example.com/avatars/user-123.png';
const avatarUrl = 'https://www.okashiland.com/wp-content/uploads/2025/12/%E6%9D%B1%E4%BA%AC%E9%A6%99%E8%95%89-%E9%A6%99%E6%B8%AF-OKL-1024x819.jpg';
const data = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" }, 
    { id: 3, title: "Item 3" }
];
function GlobalGoodTable(params) {
    return ( <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
        {data.map(item => (
            <div key={item.id} style={{ border: "1px solid #ccc", padding: "20px" }}>
                {item.title} 
             
                {/* <div>
                    <img src={myLogo} alt="Company Logo" style={{ width: '100px' }} />
                </div>
                */}
                
                <div>
                    <img src={avatarUrl} alt="User Avatar" style={{ width: '300px' }} />
                </div>
                

            </div> ))}
        </div>
    );
}
function GlobalGood(props) {
    return (
        <div>
            <h1>Template if </h1>
            <GlobalGoodTable></GlobalGoodTable>
        </div>
    );
}

export default GlobalGood