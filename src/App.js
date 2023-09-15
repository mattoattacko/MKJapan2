// App.js

import React, { useState } from 'react';

import './App.css';

import { foodData, shoppingData, sightseeingData } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('food');

  return (
    <div className="App">
      <header>
        <h1>M&K Japan Exploration</h1>
      </header>

      <nav>
        <button
          className={activeTab === 'food' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('food')}  
        >
          Food & Drink
        </button>

        <button
          className={activeTab === 'shopping' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('shopping')}
        >
          Shopping
        </button>

        <button
          className={activeTab === 'sightseeing' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('sightseeing')}  
        >
          Sightseeing
        </button>
      </nav>

      <main>
        {activeTab === 'food' && <FoodList data={foodData} />}
        {activeTab === 'shopping' && <ShoppingList data={shoppingData} />}
        {activeTab === 'sightseeing' && <SightseeingList data={sightseeingData} />}
      </main>
    </div>
  );
}

function FoodList({ data }) {
  return (
    <div className="content">
      {Object.keys(data).map(region => (
        <div key={region}>
          <h2>{region}</h2>
          
          <table>
            <tbody>
              {data[region].map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.note}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      ))}
    </div>
  );
}

function ShoppingList({data}) {
  return (
    <div className="content">
      {Object.keys(data).map(region => (
        <div key={region}>
          <h2>{region}</h2>
          
          <table>
            <tbody>
              {data[region].map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.note}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      ))}
    </div>
  );
}

function SightseeingList({data}) {
  return (
    <div className="content">
       {Object.keys(data).map(region => (
         <div key={region}>
           <h2>{region}</h2>
           
           <table>
             <tbody>
               {data[region].map(item => (
                 <tr key={item.name}>
                   <td>{item.name}</td>
                   <td>{item.note}</td>
                   <td>{item.time}</td>
                 </tr>
               ))}
             </tbody>
           </table>
           
         </div>
       ))}
    </div>
  );
}

export default App;