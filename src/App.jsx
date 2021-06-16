import './App.scss';
import RatingBox from './RatingBox';

function App() {
  return (
    <div className="App">
      <header>
        <div className="title">
          <h1>
            10,000+ of our <br></br> users love our products.
          </h1>
          <h4>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </h4>
        </div>
        <div className="ratings">
          <RatingBox
            text={'Rated 5 Stars in Reviews'}
            style={{ alignSelf: 'flex-start' }}
          />
          <RatingBox
            text={'Rated 5 Stars in Report Guru'}
            style={{ alignSelf: 'center' }}
          />
          <RatingBox
            text={'Rated 5 Stars in BestTech'}
            style={{ alignSelf: 'flex-end' }}
          />
        </div>
      </header>
      <div className="container__buyer"></div>
    </div>
  );
}

export default App;

{
  /*   Rated 5 Stars in Reviews Rated 5 Stars in
Report Guru Rated 5 Stars in BestTech
<div class="attribution">
  Challenge by
  <a href="https://www.frontendmentor.io?ref=challenge">
    Frontend Mentor
  </a>
  . Coded by <a href="#">Your Name Here</a>.
</div> */
}
