import MyImage from './img/jpg_44.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='container'>
          <h1 class="mb-5">Normal optimized image</h1>

          <h2 class="mb-5">Scrollez vers le bas pour voir l'image, l'idée ici est qu'elle soit hors de vue du dom pour
            le
            chargement</h2>
          <button class="mb-5">test</button>
          <button class="mb-5">test</button>

          <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in ante sodales, cursus nulla ut,
            luctus
            diam. Maecenas accumsan, quam ac sodales commodo, tortor enim dapibus nunc, quis tincidunt elit
            velit quis
            justo. Phasellus et porta dolor. Maecenas ut consequat ex. Praesent sit amet bibendum enim. Fusce
            aliquet
            odio urna, a egestas lacus sagittis volutpat. Nam nibh orci, congue sit amet nulla id, ornare
            porttitor
            nisi. Praesent sed pulvinar erat.</p>

          <p class="mb-5"> Proin tincidunt odio eget sodales dictum. Proin a tortor a ligula vestibulum imperdiet.
            Integer
            mauris
            velit, tincidunt et laoreet a, rhoncus non quam. Maecenas varius efficitur mattis. Cras lectus dui,
            vulputate sed pulvinar eget, convallis id nibh. Donec ac massa mi. Praesent a ex sit amet sem
            commodo
            aliquet id at libero. Praesent aliquam ipsum quis nulla facilisis laoreet. Suspendisse suscipit
            varius lacus
            ac malesuada. Curabitur pellentesque dolor feugiat varius vulputate. Sed mollis leo eu venenatis
            congue. Ut
            eget quam porttitor, euismod nulla ac, bibendum odio.</p>

          <p class="mb-5">
            Vivamus porttitor, lacus ac tristique convallis, ante felis hendrerit dui, eget pretium lectus
            turpis vitae
            mauris. Pellentesque dignissim, nunc dictum aliquet mattis, erat nunc pellentesque arcu, sit amet
            placerat
            turpis tortor ac libero. Mauris gravida semper arcu nec bibendum. Curabitur cursus auctor ante, in
            aliquet
            urna consequat in. Nam ut ipsum id ex facilisis tincidunt. Donec justo libero, facilisis placerat
            sollicitudin laoreet, volutpat vitae justo. Vivamus non urna eu est tincidunt gravida. Pellentesque
            in
            sollicitudin elit.
          </p>

          <p class="mb-5">
            Nunc a tempor enim. Ut lacinia arcu feugiat, pretium neque quis, gravida lectus. In ornare elit eget
            lorem
            pulvinar facilisis. Aliquam ac bibendum elit, non feugiat libero. Fusce iaculis massa vel est
            scelerisque
            viverra. In lacinia sollicitudin varius. Nulla blandit a mauris eget venenatis.
          </p>

          <p class="mb-5">
            Sed nisi lacus, fringilla sed ultrices eu, sollicitudin et nibh. Mauris tempor enim metus, quis
            accumsan
            felis efficitur ac. Integer rutrum mauris porta, porttitor nibh non, congue tortor. Vestibulum
            faucibus
            convallis ipsum et sollicitudin. Nullam tempor quam enim, in eleifend quam hendrerit eget. Proin
            vehicula id
            velit id consectetur. Vivamus finibus mollis imperdiet. Curabitur blandit vitae tellus mollis
            pharetra. Nunc
            convallis metus nec leo laoreet venenatis. Donec varius euismod augue, ut gravida leo bibendum eu.
            Nullam
            gravida mi magna, vel gravida ex sodales in. Curabitur eleifend orci nisi, sed molestie libero
            commodo at.
            Donec sodales tortor id magna accumsan, ac porttitor ipsum fringilla. In venenatis sapien nec ante
            tincidunt
            sollicitudin. Curabitur nec varius magna, sit amet hendrerit dui. </p>
          <img src={MyImage} alt="Img" height="600" width="1000"></img>
        </div>
      </div>
    </div>

  );
}

export default App;
