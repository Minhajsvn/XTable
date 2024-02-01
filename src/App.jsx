import { useState } from 'react';
import './App.css';

const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
]


function App() {
  const [sortedData, setSortedData] = useState(tableData)

  const sortByDate = () => {
      setSortedData(
        tableData.slice().sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if(dateA != dateB){
          return dateB - dateA;
        }else{
          return b.views - a.views;

        }

      })
      )
  }

  const sortByViews = () => {
    setSortedData(
      tableData.slice().sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if(dateA != dateB){
        return b.views - a.views;
      }else{
        return dateB - dateA;

      }

    })
    )
}
  

  return (
    <div>
     <h1>Date and Views Table</h1>
     <button onClick={sortByDate}>Sort by Date</button>
     <button onClick={sortByViews}>Sort by Views</button>
     <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
      </thead>
      <tbody>
      {sortedData.map((article, id) => 
        <tr key={id}>
          <td>{article.date}</td>
          <td>{article.views}</td>
          <td>{article.article}</td>
        </tr>
      )}
      </tbody>
     </table>
    </div>
  )
}

export default App
