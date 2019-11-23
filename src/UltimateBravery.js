import React from 'react';
import ReactTooltip from 'react-tooltip';

const champions = JSON.parse('{ "Long Hair": {  "name": "Long Hair",  "champions": [   "Taric",   "Vayne",   "Janna",   "Sivir",   "Yasuo",   "Zyra",   "Olaf"  ] }, "Bald": {  "name": "Bald",  "champions": [   "Lux",   "Braum",   "Singed"  ] }, "Helmet Squad": {  "name": "Helmet Squad",  "champions": [   "Malzahar",   "Sion",   "Yorick",   "Syndra",   "Olaf",   "Azir",   "Khazix",   "Aatrox",   "MasterYi"  ] }, "Trees": {  "name": "Trees",  "champions": [   "Ivern",   "Maokai"  ] }, "Animal Kingdom": {  "name": "Animal Kingdom",  "champions": [   "Warwick",   "Nasus",   "Renekton",   "Twitch",   "volibear",   "Skarner",   "Khazix",   "Azir"  ] }, "Birds": {  "name": "Birds",  "champions": [   "Azir"  ] }, "Beards/ moooostash": {  "name": "Beards/moooostash",  "champions": [   "Braum",   "Ivern",   "Ornn",   "Olaf",   "Lux"  ] }, "Hookers": {  "name": "Hookers",  "champions": [   "Nautilus",   "Thresh"  ] }, "Ya cant see me": {  "name": "ya cant see me",  "champions": [   "Zed",   "Singed",   "MasterYi",   "Jax",   "Syndra",   "Nautilus",   "Malzahar"  ] }, "Cheap Bois": {  "name": "Cheap Bois",  "champions": [   "Diana",   "Ivern",   "Kogmaw",   "Maokai",   "Nasus",   "Ornn",   "Renekton",   "Taliyah",   "Vayne",   "Vladimir",   "Warwick",   "Zyra"  ] }, "Im good": {  "name": "Im bad",  "champions": [   "Ezreal"  ] }, "Boomer Aang": {  "name": "Boomer Aang",  "champions": [   "Lux"  ] }, "Then the Fire Nation Attacked": {  "name": "Then the Fire Nation Attacked",  "champions": [   "Annie",   "Yasuo",   "Taliyah",   "Syndra"  ] }, "Metalbenders": {  "name": "Metalbenders",  "champions": [   "Reksai",   "Nocturne"  ] }, "Best Art": { "name": "Best Art", "champions": [ "Nami", "Qiyana", "Zyra", "Kindred", "Kogmaw", "Taric", "Syndra" ]	}, "V": { "name": "Champs that start with V", "champions": [ "Varus", "Vayne", "Veigar", "Vladimir", "Volibear" ] }, "N": {	"name": "Champs that start with N", "champions": [ "Neeko", "Nami", "Nasus", "Nautilus", "Nocturne" ] }, "A": { "name": "Champs that start with A", "champions": [ "Ashe", "Annie", "Aatrox", "Azir" ] }, "Leftover Squad": { "name": "Leftover Squad", "champions": [ "DrMundo", "Leblanc", "Brand", "Soraka" ] }}');

class UltimateBravery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_synergy: { "name": null, "champions": [] },
      second_synergy: { "name": null, "champions": [] },
      first_list: null,
      second_list: null,
      first_item: null
    };
  }

  componentDidMount() {
    var randomProperties = function (obj) {
      var keys = Object.keys(obj)
      var ret = [null, null];
      do {
        ret[0] = obj[keys[ keys.length * Math.random() << 0]];
        ret[1] = obj[keys[ keys.length * Math.random() << 0]];
      } while(ret[0].name === ret[1].name);
      return ret;
    };
    let synergies = randomProperties(champions);
    this.setState({ first_synergy: synergies[0] }, () => {
      let images = [];
      for (let i = 0; i < this.state.first_synergy.champions.length; i++) {
        let url = "/ChampionIcons/" + this.state.first_synergy.champions[i].toLowerCase() +"!.jpg";
        images.push(url);
      }
      images = images.map((image, index) =>
        <li key={index}>
          <img className="champion_image" src={process.env.PUBLIC_URL + image} data-tip={this.state.first_synergy.champions[index].toLowerCase()}/>
        </li>
      );

      this.setState({ first_list: <ul>{images}</ul> }, () => {
      });
    });
    this.setState({ second_synergy: synergies[1] }, () => {
      let images = [];
      for (let i = 0; i < this.state.second_synergy.champions.length; i++) {
        let url = "/ChampionIcons/" + this.state.second_synergy.champions[i].toLowerCase() +"!.jpg";
        images.push(url);
      }
      images = images.map((image, index) =>
        <li key={index}>
          <img className="champion_image" src={process.env.PUBLIC_URL + image} data-tip={this.state.second_synergy.champions[index].toLowerCase()}/>
          <ReactTooltip />
        </li>
      );

      this.setState({ second_list: <ul>{images}</ul> }, () => {
      });
    });
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <div className="container text-center">
          <div className="vertical-center">
            <div className="inner">
              <div className="synergy_header">
                { this.state.first_synergy.name }
              </div>
              <br/>
              { this.state.first_list }
              <br/>

              <div className="synergy_header">
                { this.state.second_synergy.name }
              </div>
              <br/>
              { this.state.second_list }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UltimateBravery;
