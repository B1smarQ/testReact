import Pedro from '../assets/Pedro.mp4'

function Header(){
    const date = new Date();
    return(
      <header>
          <h1>Почему кустик пидор</h1>
          <video muted autoPlay loop src = {Pedro} type = 'video/mp4'></video>
        </header>
    )
  }
export default Header;