import React from 'react'
import ICard from './ICard'


function ICardGallery() {
  const student={
    roll: "12345",
    name: "Tanishq",
    course: "B.Tech",
    branch:"Computer Science and engineering ",

  }
  
  
    return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', border: '2px solid white' }}>
      {/* <ICard roll="12345" name="Tanishq" branch="Computer Science and Engineering" picture={flower}/>
      <ICard
        roll="12345"
        name="Tanishq"
        course="B.Tech"
        branch="Computer Science and Engineering"
        college="Abes engineering college"
        picture={flower}
      />
      <ICard
        roll="12346"
        name="John Doe"
        course="B.Tech"
        branch="Computer Science and Engineering"
        college="Abes engineering college"
        picture={flower}
      /> */}
      <ICard data={student}/>
      <ICard data={student}/>
      <ICard data={student}/>
    </div>
  );
}

export default ICardGallery