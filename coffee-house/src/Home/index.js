
import './index.html';
import './index.scss';

import Header from '../Header';
import Enjoy from '../Home/enjoy';
import Choose from '../Home/choose';
import Resource from './resource';
import Download from './download';
import Footer from '../Footer';


const header = document.getElementById('header');
header.append(Header);

const root = document.getElementById('root');
// console.log(root);

if (root) {
  root.append(Enjoy);
  root.append(Choose);
  root.append(Resource);
  root.append(Download);
}


const footer = document.getElementById('footer');
footer.append(Footer);
console.log(footer);






