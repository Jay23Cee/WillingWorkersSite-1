import React from 'react'
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from '@react-google-maps/api';
import styled from 'styled-components';


const Style = styled.div`
.About{
  display:flex;
  flex-direction:column;
}



.About-text{
 
  width:20vw;
  h3{
    font-size:.9em;
  }
}



@media screen and (max-width:768px) {

.About{
  flex-direction:column;
}


.About-text{
  width:60vw;
}

}
`





function About() {





  return (

    <Style>
      
<div className="About">


        <div className="layer"></div>
  <h1>About</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nulla dolor laudantium eum dolorem deserunt tenetur quod in incidunt voluptatibus id, soluta aliquam exercitationem. Quasi voluptate minus, consectetur natus accusamus expedita perspiciatis nam. Tempore facere quidem provident eius magnam necessitatibus, libero repellendus unde similique officiis perspiciatis est sint quibusdam ipsam nam, fugit corporis fugiat? Fugit est unde omnis assumenda excepturi, dolore repellat, dignissimos quaerat ipsum autem vel quidem eveniet facilis sequi? Deleniti architecto earum consectetur ullam nesciunt veritatis eum quo eos quam repudiandae, est neque dolorum accusantium fugiat animi reprehenderit dolores voluptatem, aperiam voluptatibus! Vel aperiam harum officia, ut minima quod odit a quisquam voluptatibus dicta cupiditate quasi sapiente praesentium aut voluptates quidem ducimus numquam beatae, recusandae delectus optio porro ab error animi! Unde, cumque. Expedita tenetur in soluta sapiente, pariatur tempora ullam atque, fugiat recusandae labore, unde ratione? Rem eligendi omnis voluptatem tempore amet molestias harum maiores temporibus quos sed maxime nisi impedit asperiores mollitia labore, porro, animi nobis. Similique, laboriosam dignissimos. Modi, dolore. Animi, odio excepturi? Reprehenderit nemo molestias nisi esse minima illum eaque dicta suscipit odit inventore porro minus, dolorem nostrum laborum. Blanditiis tempore iste quo. Ex aperiam asperiores blanditiis nihil quaerat molestiae illo iste enim quas.</p>



    <div className="About-text">
      <h5>Schedule a tour today</h5>
      <h3 style={{'color':'gray;'}}>Willing Workers is currently giving tours following CDC guidelines. Masks are mandatory during your visit.</h3>
      <h3>  4813 W. Washington Blvd.<br></br>
Los Angeles , Los Angeles 90016</h3>
<br></br>

      <h3>Telephone: (323) 937-5950</h3>
      <h3>Monday - Friday <br></br> 7am-3pm</h3>
      <br></br>


    </div>


      </div>
      </Style>
  )
}

export default React.memo(About)