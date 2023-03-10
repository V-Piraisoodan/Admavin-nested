import './App.css';
import { useState } from 'react';

function App() {

  const data = [{
    parent : "📁 Tamilnadu",
    folder : [{place:"📂 Mahabalipuram",subPlace :["👉 Shore Temple","👉 Krishna Butter Ball","👉 Mahishasura Mardini cave","👉 Olakkannesvara Temple"]},
              {place:"📂 Kodaikanal",subPlace :["👉 Bryant Park","👉 Kurinji Andavar Temple","👉 Kodaikanal Lake","👉 Coaler's Walk"]},
              {place:"📂 Ooty",subPlace :["👉 Rose Garden","👉 Botanical Garden","👉 Boat House","👉 Doddebetta Peak"]},
              {place:"📂 Kanyakumari",subPlace :["👉 Thiruvalluvar Statue","👉 Vivekananda Rock Memorial","👉 Arulmigu Bhagavathy Amman Aalayam"]},
              {place:"📂 Thanjavur",subPlace :["👉 Thanjavur Big Temple","👉 Brihadeeswara Temple","👉 Saraswathi Mahal Library"]}]
    },
  {
    parent : "📁 Karnataka",
    folder : [{place:"📂 Bagalkote",subPlace :["👉 Badami Cave Temples","👉 Virupaksha Temple","👉 Shri Shakambhari Banashankari Shakti Peetha"]},
             {place:"📂 Ballari",subPlace :["👉 Ballari Fort","👉 Sri Kumara Swamy Temple","👉 Kaladham"]},
             {place:"📂 Belagavi",subPlace : ["👉 Belagavi Fort","👉 Military Shri Mahadeva Shiva Temple"]},
             {place:"📂 Bengaluru",subPlace :["👉 Lalbagh Botanical Garden","👉 Bengaluru Palace","👉 Cubbon Park","👉 ISKCON Temple"]},
             {place:"📂 Chamaraja nagar",subPlace :["👉 Barachukki Waterfalls","👉 Bandipur National Park","👉 Chamarajeshwara Temple","👉 Himavad Gopalaswamy Temple"]}]
  },
]
  const [click,setClick] = useState([])
  const [fid ,setfid] = useState([])
  const [show,setShow] = useState(false)
  const [fshow,setfshow] = useState(false)
  const [secondChild , setsecondChild] = useState([])


  function fchild(e){
    var len = e.target.getAttribute("data-index")
    setfid(len)
    let folLen = (data[len].folder.length)
    
    let pushdata = []
    for(let i=0;i<folLen;i++){
    let place =( data[len].folder[i].place)
    pushdata.push(place)
    }setClick(pushdata)
    setsecondChild('')
    setShow(!show)
  
  }

  function schild(e){
    var secLen = e.target.getAttribute("fchild-index")
    // console.log(secLen)
    let subPlaceLen = (data[fid].folder[secLen].subPlace.length)
    
    let pushdata = []
    for(let i=0;i<subPlaceLen;i++){
    var secChild =( data[fid].folder[secLen].subPlace[i])
    pushdata.push(<div className='secChild'>{secChild}</div>)
    }setsecondChild(pushdata)
  }
  


  var mapdata = data.map((e,index)=><div className='parent' key={index} data-index={index} onClick={fchild}>{e.parent}</div>)
  var fchil = click.map((e,index)=><div className='fchild' key={index} fchild-index={index} onClick={schild}>{e}</div>)
  return (
    <div className="App">
      <div className='heading'>Nested List Component</div>
      <div className='data'>   
        <div className='par'>{mapdata}</div>
        {show?<div className='fir'>{fchil}</div> :""}
        <div className='secChild-con'>{secondChild}</div>
      </div>
  
    </div>
  );
}

export default App;
